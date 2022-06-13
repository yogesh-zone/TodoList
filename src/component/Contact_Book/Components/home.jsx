import React from 'react'
import {Link} from "react-router-dom";
import { connect  } from 'react-redux'
const Home = (state) => {
  console.log("state :",state);
  const {deleteContact} = state;
  const contacts = state.contacts.state;
  console.log("contacts:",contacts)
  return (
    <>
      <div className='flex pt-10 justify-between flex-col text-center'>
        <div className='font-bold text-4xl py-3 px-3'>Welcome to React Redux Contact App</div>
        <Link to='/add' className='px-10'>
        <button className='text-black font-semibold mt-8 mb-3 px-2 py-1 border-2 border-black rounded-lg hover:text-white hover:bg-green-600'>Add Contact</button>
        </Link>
        </div>
        {(contacts.length!==0)
        ?<div className='flex justify-center'>
        <table className=' border-separate  bg-gray-100 text-center'>
          <thead className='bg-slate-700 text-white'>
            <th className='px-10 font-bold '>S.NO</th>
            <th className='px-10 font-bold '>Name</th>
            <th className='px-10 font-bold '>Email</th>
            <th className='px-10 font-bold '>Phone</th>
            <th className='px-10 font-bold '>Update</th>
          </thead>
          <tbody>
            {
              contacts.map( (key,idx) => {
                return (
                        <tr className={`bg-gray-300 hover:bg-gray-500 hover:text-white`} key={idx}>
                          <td className='px-10 font-semibold'>{key.id}</td>
                          <td className='px-10 font-semibold'>{key.name}</td>
                          <td className='px-10 font-semibold'>{key.email}</td>
                          <td className='px-10 font-semibold'> {key.number}</td>
                          <td className='flex text-center'>
                            <Link to={`/edit/${key.id}`} className='flex flex-row  hover:text-green-400 uppercase font-semibold mx-auto my-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            </Link>
                            <button className={`  hover:text-red-400  uppercase font-semibold my-2 mx-auto ${key.id==1?" cursor-not-allowed":"static"}`}  onClick={key.id!=1?()=>deleteContact(key.id):""}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            </button>
                          </td>
                        </tr>)
              })
            }

          </tbody>
        </table>
        </div>
        :
        <div className='font-semibold text-2xl font-mono text-center'>No Item in the list!</div>}
    </>
  )
}

const mapStateToProps = (state) => ({
  contacts:state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    if(window.confirm("do you want to delete it"))
      dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home); 