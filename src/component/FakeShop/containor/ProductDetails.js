import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT} from "../redux/constants/actionTypes"
const ProductDetails = (product) => {
  console.log("ProductDetails are :",product);
  const { productId } = useParams();
  const {selectedProduct,removeSelectedProduct} = product
  const { image, title, price, category, description } = product;
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    selectedProduct(response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      removeSelectedProduct()
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) =>({
  product:state
});
// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (id) => {
//     dispatch({ type: "DELETE_CONTACT", payload: id });
//   },
// });

const mapDispatchToProps = (dispatch) =>({
  selectedProduct: (data) =>{
    dispatch({type:SELECTED_PRODUCT,payload:data})
  },
  removeSelectedProduct : ()=> {
    dispatch({type:REMOVE_SELECTED_PRODUCT})
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);
