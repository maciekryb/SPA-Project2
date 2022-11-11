import React from 'react';

const LoginPage = () => {
  return (
    <>
      <label htmlFor=''>
        Poadj login <input type='text'></input>
      </label>{' '}
      <br />
      <label htmlFor=''>
        Poadj hasło <input type='password'></input>
      </label>{' '}
      <br />
      <button>Zaloguj</button>
    </>
  );
};

export default LoginPage;
