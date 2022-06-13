// import React ,{useState,useEffect} from 'react'
// import './Style.css';
// const Todo = () => {

//     // get local storage data back 
//     const getLocalData = () => {
//         const list = localStorage.getItem('mytodolist');
//         if(list)
//         return JSON.parse(list);
//         else
//         return [];
//     }

//     const [ inputData , setInputData] = useState('');
//     const [ item , setItem] = useState(getLocalData());
//     const [ isEditItem , setIsEditItem] = useState('');
//     const [toggelButton , setToggelButton] = useState(false);


//     // adding items
//     const addItem =() =>
//     {
//         if(!inputData)
//         alert("please enter some data");

//         else if(toggelButton && inputData)
//         {
//             console.log("yes true");
//             setItem(
//             item.map((curElm) => 
//             {
//                 if(curElm.id === isEditItem)
//                 return{...curElm , name:inputData};
//                 return curElm;
//             }));
//             setInputData('');
//             setIsEditItem(null);
//             setToggelButton(false);
//         }
//         else
//         {
//             const input = { name: inputData , id: new Date().getTime().toString() }
//             setItem([...item, input])
//             console.log(input.id);
//             setInputData('');
//         }
//      }
//     //  editing item 
//     const editItem = (index) =>
//     {
//         const edit = item.find((curElm)=>{ return index === curElm.id});
//         setInputData( edit.name);
//         setIsEditItem(index);
//         setToggelButton(true);
//     }
//     // deleting an item 
//     const deleteItem = (index) =>
//     {
//         const updatedItem = item.filter((curElm) => { return curElm.id !== index });
//         setItem(updatedItem)
//     }
//     //  deleting all items
//     const removeData = ()=> { setItem( [] )}

//     // adding local storage
//     useEffect(()=> 
//     {
//         localStorage.setItem("mytodolist",JSON.stringify(item))
//     },[item]);

    
//     return ( <>
//         <div className="main-div">
//             <div className="child-div">
//             <figure>
//                 <img className="todo-icon" src="https://media3.picsearch.com/is?tI-6vZ4vjolaNapyVJVypjNxodKPU-8wlsK8QTj0h-k&height=214" alt="todo list"/>
//                 <figcaption> Add Your List Here</figcaption>
//             </figure>
//                 <div className="input-div">
//                    <input type="text" placeholder="✍ Add your Item Here" className="input" value={inputData} onChange={(e)=>{setInputData(e.target.value)}} />
//                    { toggelButton?<i className=" far fa-edit add-btn"onClick={addItem}></i>:<i className=" fas fa-plus add-btn" onClick={addItem}></i>}
//                 </div>
//                 <div className="item-div">
//                     { item.map((curElm) => {
//                         return (
//                             <div className="items" key={curElm.id}>
//                                 <h3 className="item-string">{curElm.name}</h3>
//                                 <span className="items-icon">
//                                     <i className="far fa-edit edit-btn" onClick={ ()=> {editItem(curElm.id)}}></i>
//                                     <i className="far fa-trash-alt dlt-btn" onClick={()=>deleteItem(curElm.id)}></i>
//                                 </span>
//                              </div>);
                        
//                     })}
//                 </div>
//             <div>
//                 <button data-sm-link-text="Remove All remove-btn effect04" onClick={removeData}>
//                     <span>Check List</span>
//                 </button>
//             </div>
//             </div>
//         </div>
//     </>) 
// }

// export default Todo














// thapa todo code below





import React, { useState, useEffect } from "react";
import "./Style.css";

// get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  // add the items fucnction
  const addItem = () => {
    if (!inputdata) {
      alert("plz fill the data");
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );

      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  //edit the items
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  // how to delete items section
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // remove all the elements
  const removeAll = () => {
    setItems([]);
  };

  // adding localStorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  console.log(items);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="https://cdn.pixabay.com/photo/2014/04/03/00/30/pencil-308509__340.png" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          {/* show our items  */}
          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}>
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;