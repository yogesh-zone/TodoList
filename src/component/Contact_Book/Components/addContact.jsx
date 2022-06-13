import React from 'react'
import { useState } from 'react';
import { connect  } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ADD_CONTACT } from '../redux/reducers/constant';
const AddPost = (state) => {
  // const contacts = useSelector( (state) => state );  // returning us state data
  console.log(state);
  const {addContact} = state;
  const contacts = state.contacts.state
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState();
  const history = useNavigate();
  console.log(contacts,"hello");
  const handleSubmit = (e)=>{
      e.preventDefault();
      const checkEmail = contacts.find( (contact)=>contact.email===email);
      const x = parseInt(number);
      const checkNumber = contacts.find( (contact)=>contact.number === x);
      if(!email || !number || !name){
        return toast.error("Please Fill In All Feilds!");
      }
      if(checkNumber) return toast.error("Number already exist");
      if(checkEmail) return toast.error("Email already exist");
      const data = {
        id : contacts[contacts.length-1].id+1,
        name,
        email,
        number
      }
      addContact(data);
      toast.success("Contact Added Successfully!!")
      history('/')
  } 
    
    
  return (
    <div className='flex flex-col items-center'>
        <h1 className='font-semibold font-sans text-6xl py-3 px-3 '>Add contact {2+2}</h1>
        <form action="#" className='focus:ring-2 focus:ring-blue-100 border-black w-[40%] flex flex-col items-center hover:shadow-lg hover:shadow-black bg-gray-200 required' onSubmit={handleSubmit}>
            <input className='border-2 border-gray-400 rounded-md w-[60%] focus:outline-none px-2 my-2 focus:ring-2 focus:ring-blue-200' type="text" name="name" placeholder='Name'onChange={ e=>setName(e.target.value)} />
            <input className='border-2 border-gray-400 rounded-md w-[60%] focus:outline-none px-2 my-2 focus:ring-2 focus:ring-blue-200' type="email" name="email" placeholder='Email'onChange={ e=>setEmail(e.target.value)} />
            <input className='border-2 border-gray-400 rounded-md w-[60%] focus:outline-none px-2 my-2 focus:ring-2 focus:ring-blue-200' type="number" name="number" placeholder='number'onChange={ e=>setNumber(e.target.value)} />
            <button className='border-2 border-black bg-slate-800 my-3 px-2 py-2 font-semibold text-white w-[60%] hover:bg-slate-500 focus:bg-slate-800'>Add Contact</button>
        </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  contacts:state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: ADD_CONTACT, payload: data });
  },
});


export default connect(mapStateToProps,mapDispatchToProps)(AddPost);