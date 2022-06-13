
import React,{useState} from 'react'
import './Style.css';

function Form_firebase() {
    const [user, setUser] = useState({name:"yogesh",email:"",password:"",number:""});
    const getUserData = (e)=>
     { 
         var namee = e.target.name ;
         var value = e.target.value;
        setUser({...user,[namee]:value})
     }
     const saveData  = async (e)=>
      { e.preventDefault();
        const {name,email,password,number} = user;
        const res = await fetch("https://userdata-f7137-default-rtdb.firebaseio.com/userData.json",{
            method:"post",
            header:{'Content-type':'application/json'},
            body: JSON.stringify({
                name,
                email,
                password,
                number
            })
        })
        alert("your data is saved sussesfully")
        setUser({name:"",email:"",password:"",number:""});
      }
    return (
        <div>
            <h1>Contact Us</h1>
            <form action="" method="post">
                <input type="text" name="name" placeholder="enter your name" value={user.name} onChange={getUserData} required/>
                <input type="email" name="email" placeholder="enter your email" value={user.email} onChange={getUserData} required />
                <input type="password" name="password" placeholder="enter your password" value={user.password} onChange={getUserData}required/>
                <input type="number" name="number" placeholder="enter your mobile number" value={user.number} onChange={getUserData} required />
                <button type="submit" onClick={saveData}>Submit</button>
            </form>
        </div>
    )
}

export default Form_firebase
