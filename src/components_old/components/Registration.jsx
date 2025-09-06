import { useState } from 'react';
import Logo from '../assets/Logo.jpg';
import './Registration.css';

function Registration() {
    const [input, setInput] = useState({});
  
    const handleChange=(e)=>{
      const value =e.target.type=== 'checkbox' ? e.target.checked : e.target.value;
      const name=e.target.name;
      setInput(vlaues => ({...vlaues,[name]:value}));
    }
  
    const handleSubmit= (e)=>{
      e.preventDefault();
     alert(`
     name: ${input.name}
     Email: ${input.email}
     password: ${input.pass}
     `) ;
    }
  
    return (
      <>
        {/*<div>
          <img src={Logo} className="logo" alt="SmileyWay logo" />
    </div>*/}
        <form onSubmit={handleSubmit} className='reg'>
          <h1 className='h1_reg'>Registration</h1>
          <div className="Registration">
            <input
            type='text'
            name='name'
            placeholder='&#xf007;   Name'
            value={input.name}
            onChange={handleChange}
            />
            <input
            type='email'
            name='email'
            placeholder='&#xf0e0;  Email'
            value={input.email}
            onChange={handleChange}
            />
            <input
            type='password'
            name='pass'
            placeholder='&#xf023;   Password'
            value={input.pass}
            onChange={handleChange}
            />
            <input
            type='password'
            name='confirm_pass'
            placeholder='&#xf023;   Confirm password'
            value={input.confirm_pass}
            onChange={handleChange}
            />
          </div>
          <label>
            <input
            type='checkbox'
            name="agreement"
            checked={input.agreement}
            onChange={handleChange}
            required
            />
            I agree on the terms and conditions
          </label>
          <button type='submit'>Register</button>
        <p className="read-the-docs">
          Already have an account? <a href="/login">Login</a>
        </p>
        </form>
      </>
    );
  }

export default Registration;