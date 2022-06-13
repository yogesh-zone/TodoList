import {ADD_CONTACT} from "./constant"

const initalContact = [
    {
        id:1,
        name:'exapmple xyz',
        email:"example@gcomapany.com",
        number:1234567890
    }
];
const contactReducer = (contact = initalContact,action)=>{

    switch(action.type){
        case ADD_CONTACT:
            contact = [ ...contact , action.payload]
            console.log("state is ",contact);
            return contact;
        case "DELETE_CONTACT":
            const updateContact = contact.filter( (key)=> key.id !== action.payload?contact:null)
            contact = updateContact;
            return contact
        case "UPDATE_CONTACT":
            contact.filter((key) =>
            key.id === action.payload.id
              ? Object.assign(key, action.payload)
              : key
            );
            return contact

        default:
            return contact;
    }
}
export default contactReducer;