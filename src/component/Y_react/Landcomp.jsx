import React from 'react'

const Landcomp = ({landarr}) =>{
    
           
           return <>
           <ul className='compul'>
            {
                landarr.map((comp,idx)=>
                {
                    return  <li className='compli' id='container'>
                        <img src={comp} alt="land component" className="comimg" id='box' />
                    </li>
                        
                    
                })
            }
            </ul>
        </>
}

export default Landcomp
