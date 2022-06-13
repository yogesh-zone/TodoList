import { connect }  from 'react-redux';
import React from 'react'
import { useEffect,useState } from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = (state) => {
    const {updatecontact} = state;
    const contacts = state.contacts.state;
    const {id} = useParams();
    const history = useNavigate();
    const currentContact = contacts.find((key,idx) => key.id === parseInt(id));
    useEffect(() => {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setPhone(currentContact.number);
    }, [currentContact]);
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setPhone] = useState("");
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            id:currentContact.id,
            name,
            email,
            number
        }
        updatecontact(data);
        history('/');
        toast.success("Contact updated succesfully")


    }
    return (
        <div className='flex flex-col items-center font-thin'>
            <h1 className='font-semibold font-sans text-6xl py-3 px-3 my-4 '>Edit contact {id}</h1>
            <form action="#" className='focus:ring-2 focus:ring-blue-100 border-black w-[40%] flex flex-col items-center hover:shadow-lg hover:shadow-black bg-gray-100 required' onSubmit={handleSubmit}>
                <input className='border-2 border-gray-400 rounded-md w-[60%] focus:outline-none px-2 my-2 focus:ring-2 focus:ring-blue-200' type="text" value={name} name="name" placeholder='Name' onChange={e=> setName(e.target.value)}/>
                <input className='border-2 border-gray-400 rounded-md w-[60%] focus:outline-none px-2 my-2 focus:ring-2 focus:ring-blue-200' type="email" name="email" value={email} placeholder='Email'onChange={e=> setEmail(e.target.value)}/>
                <input className='border-2 border-gray-400 rounded-md w-[60%] focus:outline-none px-2 my-2 focus:ring-2 focus:ring-blue-200' type="number" name="number"value={number} placeholder='number'onChange={e=> setPhone(e.target.value)} />
                <button type='submit' className='border-2 border-black bg-green-500 my-3 px-2 py-2 font-semibold text-white w-[40%] hover:bg-green-600 focus:bg-green-800'>Update Details</button>
                <Link to='/' className='flex flex-col items-center border-2 px-2  border-black bg-red-600 my-3  py-2 font-semibold text-white w-[40%] hover:bg-red-500 focus:bg-red-800'>Cancle</Link>
            </form>
        </div>
    )
}

 const mapToStateProps =  (state) =>({
    contacts : state,
 })

 const mapToDispatchProps = (dispatch) =>({
     updatecontact : (data) => {
         dispatch({type:"UPDATE_CONTACT",payload:data})
     }
 })

export default connect(mapToStateProps,mapToDispatchProps)(EditContact); 