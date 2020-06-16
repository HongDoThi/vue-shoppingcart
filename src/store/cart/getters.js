export default {
    total: state =>{
        let listCart = state.listCart
        let initObjSum = {
            countItem: 0, totalPrice: 0
        }
      return listCart.reduce(function(objSum, objCart){
            let countItem = objSum.countItem + objCart.quantity
            let totalPrice = objSum.totalPrice + objCart.quantity * objCart.product.price
            return {countItem, totalPrice}
        }, initObjSum)
    }
}