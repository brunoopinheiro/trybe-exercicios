const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Marinho';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
}

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

function isValid (object, keyName) {
  if (typeof object !== 'object' || typeof keyName !== 'string') {
    throw new Error ('Valores invalidos');
  }
}

function addNewKey (object, keyName, keyValue) {
  try {
    isValid(object, keyName);
    object[keyName] = keyValue;
    return object;
  } catch (e) {
    return e.message;
  }
}

addNewKey(customer, 'newKey', 'newValue');
console.log(customer);
