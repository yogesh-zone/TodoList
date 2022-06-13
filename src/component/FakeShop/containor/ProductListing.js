import React, { useEffect } from "react";
import axios from "axios";
import { connect} from "react-redux";
import ProductComponent from "./Productcomponent";
import {SET_PRODUCTS} from "../redux/constants/actionTypes"
const ProductPage = (products) => {
  console.log("ProductPagr are :", products);
  const {setProducts} = products;
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="flex">
      <ProductComponent />
    </div>
  );
};
const mapToStateProps = (state)=>({
  products:state,
})
const mapToDispatchProps = (dispatch)=>({
    setProducts: (data)=>{
      dispatch({type:SET_PRODUCTS,payload:data})
    }
})
export default connect(mapToStateProps,mapToDispatchProps)(ProductPage);