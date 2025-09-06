import { useState } from 'react';
import Logo from '../assets/Logo.jpg';
import './Login.css';


function Login(){
    const [input, setInput] = useState({});
  
    const handleChange=(e)=>{
      const value =e.target.type=== 'checkbox' ? e.target.checked : e.target.value;
      const name=e.target.name;
      setInput(vlaues => ({...vlaues,[name]:value}));
    }
  
    const handleSubmit= (e)=>{
      e.preventDefault();
     alert(`
     Email: ${input.email}
     password: ${input.Password}
     `) ;
    }
    return(
      <>
      <div className="container">
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
        <div className='login_inside'>
          <div className="login_side">
            <img src={Logo} alt="Logo" className='second_logo'/>
            <h2 >Your smile, your way – log in to Smiley Way.</h2>
          </div>
          <div className='Log'>
            <h3 style={{color:'#008B8B'}}>Welcome to SmileyWay</h3>
            <form onSubmit={handleSubmit}>
              <input 
              type="email"
              name='email'
              placeholder='&#xf023;   Password'
              value={input.email}
              onChange={handleChange}
              required
              />
              <input
              type="password"
              name='Password'
              placeholder='&#xf023;   Password'
              value={input.Password}
              onChange={handleChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 or more characters"
              required
              />
              <div class="oneline">
              <p><a href='#' style={{color:'black'}}>Forget password?</a></p>
              <p><a href='/Registration' style={{color:'black'}}>Don't have account?</a></p>
              </div>
              <label> 
              <input
              type='checkbox'
              value={input.rm}
              onChange={handleChange}
              />
              Remember me</label>
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }

  export default Login;