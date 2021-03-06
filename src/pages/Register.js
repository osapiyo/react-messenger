import React from 'react';

const Register = () => {
  return (
    <section>
      <h3>Create Account</h3>
      <form className='form'></form>
      <div className='input_container'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' />
      </div>
      <div className='input_container'>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' />
      </div>
      <div className='input_container'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' />
      </div>
    </section>
  );
};

export default Register;
