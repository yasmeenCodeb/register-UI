import React,{ useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

// const token = Buffer.from(`${name}:${password}`, 'utf8').toString('base64')

function CreatePosts() {
  const [inputs, setInputs] = useState({});

  const submit = (event) => {
    event.preventDefault();
    console.log("In Submit function")
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` }
  // };
    const user = {
      name: inputs.name,
      email: inputs.email
    }

    // {headers: {
      // 'Authorization':`Bearer ${token}`}}
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThhMzRiMjI3YjYzZjUzOWQyZTVmOSIsImVtYWlsIjoiaGVuQGdtYWlsLmNvbSIsImlhdCI6MTYzODg3Njg0NiwiZXhwIjoxNjM4OTYzMjQ2fQ._UWQOeQNX6yTh5iWVmCAHS2Qx2yJp4MGM3_tDK5YIWc";
    axios.post('http://localhost:5000/create', user)
      .then((data)=>{
            console.log("In Axios",data);
          })
          console.log("After Axios",token)
  }
  console.log("Create Posts");
  return (
    <div>
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
    </div>
  )
}

ReactDOM.render(<CreatePosts />, document.getElementById('root'));
export default CreatePosts;