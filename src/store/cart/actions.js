export default {
  actBuyProduct({ commit, state }, data) {
    const index = state.listCart.findIndex(cart => {
      return cart.product.id === data.product.id;
    });
    if (index === -1) {
      commit("BUY_PRODUCT", data);
    } else {
      let quantity = data.quantity;
      commit("CHANGE_QUANTITY", { index, quantity });
    }
  },
  actdeleteProduct({ commit, state }, id) {
    commit("DELETE_PRODUCT", id);
  },
  actUpdateQuantity({ commit, state }, {cartUpdate, quantity}) {
    const index = state.listCart.findIndex(cart => {
      return cart.product.id === cartUpdate.product.id;
    });
    if (index !== -1) {
      let data = {
        index,
        quantity,
        isReplace: true
      };
      commit("CHANGE_QUANTITY", data);
    }

  }
};
