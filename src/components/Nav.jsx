import { useState } from 'react';
import Logo from '../assets/Logo_small.png';
import './Nav.css';



function Nav(){
    const [lang,setLang]=useState("");
    const handleChange=(e)=>{
      setLang(e.target.value);
    }
    return(
      <nav>
        <ul>
          <li style={{float:'left'}}><img src={Logo} alt="Logo" className='srimg'/></li>
          <li><p><a href='/Registration' style={{border:"1px solid white",borderRadius:"10px"}}>Registration</a></p></li>
          <li><form>
              <select value={lang} onChange={handleChange}>
                <option value="ENG">ENG</option>
                <option value="AR">AR</option>
              </select>
            </form>
          </li>
        </ul>
      </nav>
    )
  }

  export default Nav;