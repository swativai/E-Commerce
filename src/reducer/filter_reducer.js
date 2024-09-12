const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      return {
        ...state,
        filter_product: [...action.payload],
        all_products: [...action.payload],
      };
    //   const newState = {
    //     ...state,
    //     filter_product: [...action.payload],
    //     all_products: [...action.payload],
    //   };

    //   // Log the updated filter_product
    //   console.log("Updated filter_product:", newState.filter_product);

    //   return newState;

    default:
      return state;
  }
};

export default filterReducer;
