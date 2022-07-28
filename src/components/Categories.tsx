import React from 'react';


type CategoriesProps = {
  categoryId: number,
  onChangeCategory: (idx:number) => void
}
const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC<CategoriesProps> = React.memo(({categoryId, onChangeCategory}) => {

  return (
    <div className="categories">
      <ul>
        {categories.map((value, idx) => (
          <li key={idx} onClick={() => onChangeCategory(idx)}
          className={categoryId === idx ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
})

export default Categories;
