import { useState } from 'react';
import './Login.css';


function Login(){
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [rm,setRm]=useState("");
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      alert(`Email: ${email}, password: ${password}, Rm: ${rm}`);
    }
    return(
      <>
      <h2 style={{color:"white"}}>Your smile starts Here</h2>
      <div className='Log'>
        <h3 style={{color:'#008B8B'}}>Welcome to SmileyWay</h3>
        <form onSubmit={handleSubmit}>
          <input 
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}/>
          <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <div class="oneline">
          <p><a href='#' style={{color:'black'}}>Forget password?</a></p>
          <p><a href='/Registration' style={{color:'black'}}>Don't have account?</a></p>
          </div>
          <label> 
          <input
          type='checkbox'
          value={rm}
          onChange={(e)=> setRm(e.target.checked)}
          />
          Remember me</label>
          <button type='submit'>Login</button>
        </form>
      </div>
      </>
    );
  }

  export default Login;