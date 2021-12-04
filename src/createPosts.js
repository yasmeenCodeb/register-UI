import React,{ useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import axios from 'axios';




function createPosts() {
  const [inputs, setInputs] = useState({});

  // useEffect(() => {
  //   let body = {
  //     name:inputs.name,
  //     email:inputs.email
  //   }
  //     axios.post('http://localhost:5000/create/posts', body || {}).then((data)=>{
  //       console.log(data);
  //     })
     
  //   }, [])

  const submit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/create/posts', {
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
      <label>Enter the posts name:
        <br></br>
        <br></br>
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={e => setInputs({ ...inputs, name: e.target.value })}
      />
      </label>
      <br></br>
        <br></br>
      <label>Enter the posts email:
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
        <input type="submit" />
    </form>
  )
}

ReactDOM.render(<createPosts />, document.getElementById('root'));
export default createPosts;