import React, { useState, useEffect } from 'react'
import "./form.css";

const Recruitmentform = () => {



  const initialState = { username: '', email: '', password: '', success: '' }
  const successState = { success: '' }
  
  const [inputValue, setInputValue] = useState({ initialState });
  const [errorCheck, setErrorCheck] = useState({ });
    const [submitSuccess, setSubmitSuccess] = useState({});
   const [storedData, setStoredData] = useState({});

  
  const handleChange = (e) => {
    // e.preventDefault()
    const { name, value } = e.target;
    setInputValue({...inputValue, [name]: value })
    console.log(inputValue);

  }


  const handleSubmit = (e)=> {
   e.preventDefault()
 // console.log(inputValue);
    setErrorCheck(validateInput(inputValue));
   // validateInput(inputValue);
   const input = {username:"john", email:"john@gmail.com", password: "john123"}
    localStorage.setItem("storageValue", JSON.stringify(input));

  }
  




  const validateInput = (values) => {
    let error = {};
   // let console = {};
    
    if (!values.username) {
      error.username = "username is required"
    } else if (values.username.length < 6 ) {
       error.username = "username  cannot be less than 6 "
    }else if (values.username.length > 20 ) {
       error.username = "username cannot be greater 20 characters "
    }

      if (!values.password) {
      error.password = "username is required"
    } else if (values.password.length < 6 ) {
       error.password = "username  cannot be less than 6 "
    }else if (values.password.length > 20 ) {
       error.password = "username cannot be greater 20 characters "
    }
    
    if (!values.email) {
      error.email = "email is required"
    } else  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email ))  {
       error.email = "invalid email address"
    }

 
    
    if (!error.email && !error.username && !error.password) {
   
    //  alert("Form submitted successfully")
}
  

    return error
    





  };
  

  useEffect(() => {
    const data = localStorage.getItem("storageValue");
    if (data) {
      setStoredData(JSON.parse(data));
      
    }
  console.log(data);
  }, []);
    
  

  
  



  return (
    <section className="container">
     
            <form action="container" onSubmit={handleSubmit}>
                <div>

                <label htmlFor="username">Username</label>
                <input type='text'  name='username'  placeholder='username'
            value={inputValue.username} id='username'
            onChange={handleChange}

             
          />
          <p>{errorCheck.username}</p>
                </div>

                <div>
                 <label htmlFor='Email'>Email</label>
                <input type='text' name='email'  placeholder='Email'
                value={inputValue.email} id='email'
           onChange={handleChange}
          />
            <p>{errorCheck.email }</p>
           </div>
          
                <div>
                 <label htmlFor="Password">Password</label>
            <input type="password"  name="password" placeholder='Password'
              value={inputValue.password} id="password"
               onChange={handleChange}
                />
          <p>{errorCheck.password}</p>
                </div>
                <button type="submit"> Submit application</button>
      </form>
      

      <div>
        <span>name:{storedData.username }</span>
        <span>email:{storedData.email}</span>
          <span>password:{storedData.password}</span>
        
</div>

    </section>
  )
}

export default Recruitmentform;