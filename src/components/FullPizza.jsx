import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FullPizza() {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://62c2a193876c4700f5296273.mockapi.io/items/' + id,
        );
        setPizza(data);
      } catch (error) {
        alert('ошибка при получении пиццы');
      }
    }
    fetchPizza();
  }, []);
if (!pizza){
    return 'Загрузка...'
}
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img  src={pizza.imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{pizza.title}</h4>

        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от 999 ₽</div>
        </div>
      </div>
    </div>
  );
}

export default FullPizza;
