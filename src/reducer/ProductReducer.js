// import React from "react";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_API_DATA":
      const featureData = action.payload.filter((elem) => {
        return elem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
        featureProducts: featureData,
      };
    default:
      return state;
  }
};

export default ProductReducer;
