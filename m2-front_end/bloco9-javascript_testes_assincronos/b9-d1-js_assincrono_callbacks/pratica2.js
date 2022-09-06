const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) => console.log(`The temperature in Mars is ${toFahrenheit(temperature)}ºF.`);

const greet = (temperature) => console.log(`Hi! Curiosity here. The temperature in Mars is ${temperature} celsius.`);

const sendMarsTemperature = (callback) => {
  const delay = messageDelay();
  const temperature = getMarsTemperature();
  setTimeout(() => {
    callback(temperature);
  }, delay);
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);
