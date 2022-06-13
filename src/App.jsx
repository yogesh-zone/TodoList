import React from 'react';
import { Route ,Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from "./component/Contact_Book/Components/navbar" 
import Home from "./component/Contact_Book/Components/home"
import AddPost from "./component/Contact_Book/Components/addContact"
import EditContact from "./component/Contact_Book/Components/editContact"
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './component/Contact_Book/redux/reducers/rootReducer';
const store = createStore( rootReducer , composeWithDevTools());
const App = () => {
  return (
    <>
      <Provider store={store}>
      <Router>
      <ToastContainer />
      <Navbar/> 
      <Routes>
      <Route exact path='/' element={<Home/> }></Route>
      <Route  path="/add" element={<AddPost/>}/>
      <Route exact path="/edit/:id" element={<EditContact/>}/>
      </Routes>
      </Router>
      </Provider>
    </>
  )
}

export default App






// import React from 'react';
// import { Route ,Routes } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import Header from "./component/FakeShop/containor/Header"
// import ProductPage from "./component/FakeShop/containor/ProductListing"
// import ProductDetails from "./component/FakeShop/containor/ProductDetails"
// import store from './component/FakeShop/redux/store';

// const App = () => {
//   return (
//     <>
//       <Provider store={store}>
//       <Router>
//       <Header/> 
//       <Routes>
//       <Route path="/" element={<ProductPage/>}></Route>
//       <Route path="/product/:productId" element={<ProductDetails/>}/>
//       </Routes>
//       </Router>
//       </Provider>
//     </>
//   )
// }
// export default App





// import Todo from "./component/Todo List/todo"
// import React from 'react'
// function App() {
//   return (
//     <Todo/>
//   )
// }
// export default App





// import Temp from "./component/weather/temp"
// import React from 'react'
// function App() {
//   return (
//     <Temp/>
//   )
// }
// export default App




// import Resturent from "./component/resturent menu/Resturent"
// import React from 'react'
// function App() {
//   return (
//     <Resturent/>
//   )
// }
// export default App



// import Form_firebase from './component/Form/Form_firebase'
// import React from 'react'
// function App() {
//   return (
//     <Form_firebase/>
//   )
// }
// export default App



// import Resturent from './component/Resturent Yreact/Resturent' 
// import React from 'react'
// function App() {
//   return (
//     <Resturent/>
//   )
// }
// export default App



// import reportWebVitals from './reportWebVitals';
// import Lists from "./component/intern_project/Lists";
// import React from 'react'
// function App() {
//   return (
//     <Lists/>
//   )
// }
// export default App



// import Movie from './component/Movies/Movie'
// import Yreact from './component/Y_react/Yreact'

