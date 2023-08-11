
import React, { useEffect, useState } from 'react';
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import toast, { Toaster } from 'react-hot-toast';


const Form = ({setControl, control}) => {
  const [click,setClick]= useState(false);
  const [click1,setClick1]= useState(false);
  const  [phone,setPhone]= useState();
  const [form, setForm]= useState({
    name:"",
    surname:"",
    password:"",
    passControl:""
  })
 const handleChange =(e)=>{
  setForm((prevValue) => ({...prevValue, [e.target.name]:e.target.value}));
  console.log(form);
 }
 useEffect(()=>{
 (form.name.length >= 5) ? setControl((prevList) => ({...prevList, info1: true})) : setControl((prevList) => ({...prevList, info1: false}));
 (form.password.length >= 5 && form.password.length <= 15 ) ? setControl((prevList) => ({...prevList, info2: true})) : setControl((prevList) => ({...prevList, info2: false})) 
 //bunlar bir obje olduğu için karşılaştırma yapamayız o yüzden önce bir değişkene atadık
 const pass1= form.password, pass2= form.passControl;
 (pass1 === pass2 ) ? setControl((prevList) => ({...prevList, info3: true})) : setControl((prevList) => ({...prevList, info3: false})) 

 },[form])


 useEffect(()=>{
  console.log(control);
 })

 
const notify = () => toast.success('Kayıt Başarılı',{
  duration: 1000,
  style: {
  background:"#222",
  color:"#fff"
  },
});

  return (
    <div className='form-wrap'>
        <h4 className='form-title'>Login</h4>
        <form>
            <input onChange={handleChange} name="name" value={form.name}  type="text" placeholder='Name' />
            <input onChange={handleChange}  name="surname" value={form.surname} type="text" placeholder='Surname' />

            <PhoneInput value={phone} onChange={setPhone} type="text" placeholder='Phone Number' />
            
            <input onChange={handleChange}  name="password" value={form.password}  type={click ? "text" :"password"} placeholder='Password' />
            {click ? <AiFillEye className='icon' onClick={()=> setClick(!click)}/> : <AiFillEyeInvisible className='icon' onClick={()=> setClick(!click)}/> }

            <input onChange={handleChange} name="passControl"  value={form.passControl} type={click1 ? "text" : "password"} placeholder='Password Control'/>
            {click1 ? <AiFillEye className='icon' onClick={()=>setClick1(!click1)}/> : <AiFillEyeInvisible className='icon' onClick={()=> setClick1(!click1)}/>  }

        </form>
        <button onClick={notify}>Giriş Yap</button>
        <Toaster />
      
    </div>
  )
}

export default Form
