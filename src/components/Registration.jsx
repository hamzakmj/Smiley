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
      if(input.pass!==input.confirm_pass)
      {
        alert('Passwords do not match')
      }else{
      alert(`
      name: ${input.name}
      Email: ${input.email}
      password: ${input.pass}
      `) ;
      }
    }
  
    return (
      <>
        {/*<div>
          <img src={Logo} className="logo" alt="SmileyWay logo" />
    </div>*/}
        <form onSubmit={handleSubmit} className='reg'>
        <nav className='small_nav'>
          <ul>
          <li>
              <select name="Mode"  value={input.name} onChange={handleChange}>
                <option value="Lightmode">🌝</option>
                <option class="Dark_mode">🌚</option>
              </select>
          </li>
            <li>
              <select name="lang"  value={input.name} onChange={handleChange}>
                <option value="ENG">ENG</option>
                <option value="AR">AR</option>
              </select>
          </li>
          </ul>
        </nav>
          <div className='inside_reg'>
            <h1 className='h1_reg'>Registration</h1>
            <div className="Registration">
              <input
              type='text'
              name='name'
              placeholder='&#xf007;   Name'
              value={input.name}
              onChange={handleChange}
              required
              />
              <input
              type='email'
              name='email'
              placeholder='&#xf0e0;  Email'
              value={input.email}
              onChange={handleChange}
              required
              />
              <input
              type='password'
              name='pass'
              placeholder='&#xf023;   Password'
              value={input.pass}
              onChange={handleChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 or more characters"
              required
              />
              <input
              type='password'
              name='confirm_pass'
              placeholder='&#xf023;   Confirm password'
              value={input.confirm_pass}
              onChange={handleChange}
              required
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
        </div>
        </form>
      </>
    );
  }

export default Registration;