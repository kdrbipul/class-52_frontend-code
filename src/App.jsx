
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  useEffect(()=>{
      fetch('http://localhost:5000/users')
      .then(res=>res.json())
      .then(data => setUser(data))
  },[])


  const handleAddUser = (e) =>{
    e.preventDefault();
    // console.log("clicked the button");
    const form = e.target;
    const name = form.name.value;
    const email = form.emain.value;
    const user = [name, email];


    fetch('http://localhost:5000/users', {
      method:"POST",
      headers:{
        'content-type':'application/josn'
      },
      body:JSON.stringify(user)
    });

  }

  return (
    <>
      <div>
        <h1>
          {
            user.map(user=> <li key={user.uid}>{user.name}</li>)
          }
        </h1>
        <div>
          <form onSubmit = {handleAddUser}>
            <input type="text" name ="name" placeholder="Enter your name"/><br />
            <input type="email" name = "email" placeholder = "Enter your email" /> <br />
            <input type="submit" value = "Add User" />
          </form>
        </div>
      </div>
      
    </>
  )
}

export default App
