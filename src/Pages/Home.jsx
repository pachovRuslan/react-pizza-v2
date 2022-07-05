import React from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PiazzaBlock/PizzaBlock';
import Skeleton from '../components/PiazzaBlock/Skeleton';

function Home() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
      fetch('https://62c2a193876c4700f5296273.mockapi.io/items')
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
        window.scrollTo(0, 0)
    }, []);
  return (
    <div className="container">
    <div className="content__top">
      <Categories />
      <Sort />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {isLoading
        ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
        : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
    </div>
    </div>
  )
}

export default Home