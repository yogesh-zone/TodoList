import React from 'react'

const Navbar = ({menuList , filterItem}) => {
    return (
        <>
            <navbar className="navbar">
                <div className="btn-group">
                    {
                        
                    menuList.map((curElm) =>
                    { return ( <button className="btn-group__item" onClick={()=>filterItem(curElm)}>{curElm}</button>);
                    })}
                </div>
            </navbar>
        </>

    );
};

export default Navbar
