import { useState } from 'react'
//import validator from 'validator';

import './App.css'

function App() {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [dob, setDob] = useState("")
  const [label, setLabel] = useState("")
  const [emailError, setEmailError] = useState();

  


  
  
    
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }



  const handleSubmit = event => {
    //console.log('The form was submitted');
    
    event.preventDefault();

    

    if(name.length == 0 || email.length == 0 || phone.length == 0 || dob.length == 0){
      setError(true)
      setLabel("Please fill out this field")
      setEmailError("Please fill out this field")
    }

    const valid = isValidEmail(email);
    console.log(valid)
    if (email.length>0 && !valid) {
      setError(true)
      setEmailError(`Please include an '@' in the email address. '${email}' is missing an '@'.`)
    }
    else if(email.length>0 && valid){
      //setError(false)
      setEmailError("")
    }

    
    
    if (phone.length > 0 && phone.length < 10) {
     alert("Invalid phone number. Please enter a 10-digit phone number.")
    }
   
    else if (phone.length > 0 && phone.length == 10) {
      setError(false)
    }
   
    //console.log(dob)
    //console.log(new Date().getTime() - new Date(dob).getTime() > 0);
    if (dob.length > 0 && new Date().getTime() - new Date(dob).getTime() < 0) {
      setError()
     alert("Invalid date of birth. Please enter a valid date of birth.")
    }
    

    //console.log(label)
    console.log(visible)
    
  };

 

  return (
   
    <>
     
     

      <h1>Use Details Modal</h1>
      <button onClick={() => setVisible(true)} >Open Form</button>
      
      {document.addEventListener('click', function (event) {
        if (event.target.id === "myForm") {
          setVisible(false);
        }
       
        
      })}

      
      {visible ? (
        <div className="modal" style={{background:"gray"}}>

          <div className="modal-content">
          
        <form id="myForm" onSubmit={handleSubmit}>
              <h2>Fill Details</h2>
            <div>  
                <p>Usename:</p>
                <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
              {error && name.length==0 ? <label>{label}</label> : null}
           
            <div>
              <p>Email Address:</p>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
              {(error && email.length==0) || error ? <label>{emailError}</label> : null}

            <div>
              <p>Phone Number:</p>
              <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
              {(error && phone.length==0) || error ? <label>{label}</label> : null}

            <div>
              <p>Date of Birth:</p>
              <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
              {error && dob.length==0? <label>{label}</label> : null}
          
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
