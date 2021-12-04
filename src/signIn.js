import React,{ useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import axios from 'axios';




function signIn() {
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    let body = {
      email:"yasmeen@gmail.com",
      password:"yasmeen"
    }
      axios.post('http://localhost:5000/signin', body || {}).then((data)=>{
        console.log(data);
      })
     
    }, [])

  const submit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/signin', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({ inputs }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => setInputs(json.inputs))
  }
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs(values => ({...values, [name]: value}))
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(inputs);
  // }

  return (
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
  )
}

ReactDOM.render(<signIn />, document.getElementById('root'));
export default signIn;