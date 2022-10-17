import React from 'react';
import propTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
}

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3>{(verifyEmail(email) ? 'Email Valido' : 'Email Invalido')}</h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: propTypes.string.isRequired,
}

export default ValidEmail;
