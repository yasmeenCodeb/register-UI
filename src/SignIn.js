import React,{ useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';




function SignIn() {
  const [inputs, setInputs] = useState({});

  const submit = (event) => {
    event.preventDefault();
    const user = {
      email: inputs.email,
      password: inputs.password
    }
    axios.post('http://localhost:5000/signin', user).then((data)=>{
            console.log(data);
          })
  const token = Buffer.from(`${inputs}`, 'utf8').toString('base64')
  console.log("Token",token);
  }
//   axios.defaults.headers.common = {
//     'Authorization': 'bearer ' + token
// };

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
  )
}

ReactDOM.render(<SignIn />, document.getElementById('root'));
export default SignIn;