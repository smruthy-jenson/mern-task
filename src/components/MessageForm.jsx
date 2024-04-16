import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MessageForm() {
  const [firstname,setFirstName] = useState("")
  const [lastname,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [message,setMessage] = useState("")

  const handleMessage = async (e)=>{
    e.preventDefault()
    try{
     await axios.post("",{firstname,lastname,email,phone,message},{withCredentials: true,headers:{
      "Content-Type" : "application/json"
     }}).then((res)=>{
      toast.success(res.data.message)
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setMessage("")
     })
    }catch(error){
      toast.success(error.response.data.message)
    }
  }


  return (
    <div className='container form-component message-form'>
      <h2>Send Us A Message</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input type="text" placeholder='First Name' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder='Last Name' value={lastname} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
        <input type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="number" placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <textarea rows={7} placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <div style={{justifyContent:'center', alignItems:'center'}}>
          <button type='submit'>Send</button>
        </div>
      </form>
      <ToastContainer position='top-center'/>
    </div>
  )
}

export default MessageForm