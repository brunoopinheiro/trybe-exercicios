const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const delay = messageDelay();
  const temperature = getMarsTemperature();
  setTimeout(() => {
    console.log(`Delay = ${delay} ms.
    The temperature in Mars is: ${temperature} celcius.`);
    console.log('----------');
  }, delay);
};

sendMarsTemperature();
