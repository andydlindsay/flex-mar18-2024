import {useState} from 'react';

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');

  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'stuffed',
  });

  // $.post('/pizza', pizza);

  const addTopping = () => {
    const copy = {
      ...pizza,
      toppings: [
        ...pizza.toppings,
        newTopping,
      ]
    };

    setPizza(copy);
  };

  const setCrust = (event) => {
    const copy = {
      ...pizza,
      crustType: event.target.value,
    };

    setPizza(copy);
  };

  const mappedToppings = pizza.toppings.map((topping) => {
    return <p>{topping}</p>;
  });

  return (
    <div>
      <h2>Build your own Pizza!</h2>

      <div>
        <label>Crust Type:</label>
        <input 
          value={pizza.crustType}
          onChange={setCrust}
        />
        <h3>Current crust: {pizza.crustType}</h3>
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => { setNewTopping(event.target.value) }}
        />
        <button onClick={addTopping}>Add topping</button>
      </div>

      { mappedToppings }
    </div>
  );
};

export default Pizza;
