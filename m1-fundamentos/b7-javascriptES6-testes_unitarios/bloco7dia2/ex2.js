const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const phone = order.phoneNumber;
  const address = Object.values(order.address);

  return `Ola ${deliveryPerson}, entrega para: ${cliente}, Telefone: ${phone}, Endereco: ${address[0]}, N ${address[1]}, AP: ${address[2]}`;  
}

// console.log(customerInfo(order));

function getPizzas(order) {
  let pizzas = order.order.pizza;
  pizzas = Object.keys(pizzas);
  return pizzas;
}

function getDrink(order) {
  let drink = order.order.drinks;
  drink = Object.values(drink);
  drink = Object.values(drink[0]);
  drink = drink[0];
  return drink;
}

function orderPrice(order) {
  const orders = Object.assign(order.order.pizza, order.order.drinks);
  const fees = Object.entries(orders);
  let total = order.order.delivery.price;
  for (let i = 0; i < fees.length; i += 1) {
    const price = Object.values(fees[i][1]);
    total += price[1];
  }
  total = parseFloat(total);
  return total;
}

const orderModifier = (order) => {
  const cliente = order.name;
  const total = orderPrice(order);
  const pizzas = getPizzas(order);
  const bebidas = getDrink(order);

  return `Ola ${cliente}, o total do seu pedido de ${pizzas} e ${bebidas} eh R$${total}`
}

console.log(orderModifier(order));
