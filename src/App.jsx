import { useState } from 'react'
import validator from 'validator';

import './App.css'

function App() {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dob, setDob] = useState("")

  // const checkValidity = () => {
  //   if(name.length === 0 || email.length === 0 || phone.length === 0 || dob.length === 0){
  //     alert("Please fill all the fields")
      
  //   }
  //   else {
  //     setVisible(false)
  //   }
  // }

//  const handleChange = (value) => {
//     if(validator.isEmail(value)){
//       setEmail(value)
//     }
//     else {
//       alert("Please enter a valid email address")
//     }
  //   }
  
  
    
  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }



  const handleSubmit = event => {
    console.log('The form was submitted');
    event.preventDefault();

    if(name.length === 0 || email.length === 0 || phone.length === 0 || dob.length === 0){
      setError(true)
    }

    

    
    
  };

 

  return (
   
    <>
     

      <h1>Use Details Modal</h1>
      <button onClick={()=>setVisible(true)} >Open Form</button>

      
      {visible ? (
        <div className="modal" style={{background:"gray"}}>

          <div className="modal-content">
          
        <form id="myForm" onSubmit={handleSubmit}>
              <h2>Fill Details</h2>
            <div>  
                <p>Usename:</p>
                <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
              {error && name.length==0 ? <label>Please fill out this field</label> : null}
           
            <div>
              <p>Email Address:</p>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
              {error && email.length==0 ? <label>Please fill out this field</label> : null}

            <div>
              <p>Phone Number:</p>
              <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
              {error && phone.length==0 ? <label>Please fill out this field</label> : null}

            <div>
              <p>Date of Birth:</p>
              <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
              {error && dob.length==0? <label>Please fill out this field</label> : null}
          
              <div>
              <button className="submit-button">Submit</button>
                
            </div>
              
            </form>
            
          </div>

         
          

        </div>
      ) : null
      }

      


      
    </>
  )
}

export default App
