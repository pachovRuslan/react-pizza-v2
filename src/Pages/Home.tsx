/* eslint-disable */
import React from 'react';
import qs from 'qs';
import { useSelector  } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import PizzaBlock from '../components/PiazzaBlock/PizzaBlock';
import Skeleton from '../components/PiazzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { setCategoryId, setCurrentPage, setFilters, selectFilter, FilterSliceState} from '../redux/Slices/filterSlice';
import { fetchPizzas, SearchPizzasParams, selectPizzaData } from '../redux/Slices/PizzaSlice';
import { useAppDispatch } from '../redux/store';

const Home:React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage, searchValue  } = useSelector(selectFilter ) ;

  const { items, status } = useSelector(selectPizzaData);

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const getPizzas = async () => {
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
       fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = (qs.parse(window.location.search.substring(1)) as unknown) as SearchPizzasParams;
      const sort = list.find((obj) => obj.sortProperty === params.sortBy);
      dispatch(setFilters({
          searchValue: params.search,
          categoryId: Number(params.category),
          currentPage: Number(params.currentPage),
          sort: sort || list[0],
        }));
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty,  currentPage]);

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items.map((obj: any) =>
   
    <PizzaBlock key={obj.id} {...obj} />
 );

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div>
          <h2>
            Произошла ошибка <span>😕</span>
          </h2>
          <p>
           Не удалось получить пиццы.
            <br />
            Попробуйте повторить попытку позже
          </p>
          <Link to="/" className="button button--black">
            {' '}
            <span>Вернуться назад</span>
          </Link>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
