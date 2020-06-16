export default {
  BUY_PRODUCT: (state, data) => {
    state.listCart.push(data);
  },
  CHANGE_QUANTITY: (state, { index, quantity, isReplace = false }) => {
    console.log('updateQuantity'+' '+index, quantity, isReplace);
    if (isReplace) {
      state.listCart[index].quantity = quantity;
    } else {
      state.listCart[index].quantity += quantity;
    }
  },
  DELETE_PRODUCT: (state, id) => {
    var newListCart = state.listCart.filter(item => {
      return item.product.id !== id;
    });
    state.listCart = newListCart;
  }
};
