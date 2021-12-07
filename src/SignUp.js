import React,{ useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';


function SignUp() {
  
  const [inputs, setInputs] = useState({});
  const submit = (event) => {
    event.preventDefault();
    console.log("Sign Up Error", inputs);

    const user = {
          email:inputs.email,
          password:inputs.password
        }
          axios.post('http://localhost:5000/signup', user || {}).then((data)=>{
            console.log(data);
          })
  }

  return (
    <div>
    <form onSubmit={submit}>
      <label>Enter your Email ID:
        <br></br>
        <br></br>
      <input 
        type="email"
        name="email"
        value={inputs.email || ""} 
        onChange={e => setInputs({ ...inputs, email: e.target.value })}
      />
      </label>
      <br></br>
        <br></br>
      <label>Enter password:
      <br></br>
        <br></br>
        <input 
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={e => setInputs({ ...inputs, password: e.target.value })}
        />
        </label>
        <br></br>
        <br></br>
        <input type="submit" />
    </form>
    </div>
  );
}
ReactDOM.render(<SignUp />, document.getElementById('root'));
export default SignUp;