/* eslint-disable */
import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    title: string,
    imageUrl: string,
    price:number
  }>();
  const { id } = useParams();
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://62c2a193876c4700f5296273.mockapi.io/items/' + id,
        );
        setPizza(data);
      } catch (error) {
        alert('ошибка при получении пиццы');
        navigate('/')
      }
    }
    fetchPizza();
  }, []);
if (!pizza){
    return <>'Загрузка...'</>
}
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img  src={pizza.imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{pizza.title}</h4>

        <div className="pizza-block__bottom">
          <div className="pizza-block__price">цена {pizza.price} ₽</div>
        </div>
      </div>
    </div>
  );
}

export default FullPizza;
