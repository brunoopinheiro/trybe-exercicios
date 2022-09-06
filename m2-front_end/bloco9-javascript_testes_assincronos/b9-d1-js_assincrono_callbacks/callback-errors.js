const countryName = ({ name }) => console.log(`The country was ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is  ${currency}`);

const delay = (maxMiliseconds = 5000) => Math.floor(Math.random() * maxMiliseconds);

const printErrorMessage = (error) => console.log(`Error selecting country: ${error}`);

const getCountry = (onSuccess, onFailure) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brazil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = 'Country not found';
      onFailure(errorMessage);
    }
  }, delay());
};

getCountry(countryName, printErrorMessage);
getCountry(countryCurrency, printErrorMessage);
