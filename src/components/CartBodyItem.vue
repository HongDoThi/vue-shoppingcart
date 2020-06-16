<template>
  <tr>
    <th scope="row">{{index+1}}</th>
    <td>{{cart.product.name}}</td>
    <td>{{formatPrice}}</td>
    <td>
      <input type="text" min="1" :value="cart.quantity" @blur="handleUpdate" />
    </td>
    <td>
      <strong>{{formatTotal}}</strong>
    </td>
    <td>
      <a class="label label-info update-cart-item" href="#">Update</a>
      <a class="label label-danger delete-cart-item" href="#" @click="deleteProduct">Delete</a>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
import {
  NOTI_ACT_DELETE,
  NOTI_GREATER_THAN_ONE,
  NOTI_ACT_UPDATE
} from "../constants/config";
import { toCurrency, validateQuantity } from "../helpers";
export default {
  name: "cart-body-item",
  props: {
    cart: Object,
    index: Number
  },
  computed: {
    formatPrice() {
      return toCurrency(this.cart.product.price, "USD", "right");
    },
    formatTotal() {
      return toCurrency(
        this.cart.product.price * this.cart.quantity,
        "USD",
        "right"
      );
    }
  },

  methods: {
    ...mapActions({
      actdeleteProduct: "cart/actdeleteProduct",
      setLoading: "setLoading",
      actUpdateQuantity: "cart/actUpdateQuantity"
    }),
    deleteProduct() {
      if (confirm("Ban co muon xoa don hang nay khong")) {
        //   console.log(this.cart);
        this.actdeleteProduct(this.cart.product.id);
        this.$notify(NOTI_ACT_DELETE);
      }
    },
    handleUpdate(e) {
      this.setLoading(true);
      setTimeout(() => {
        let quantity = e.target.value;
        let check = validateQuantity(quantity);
        if (check) {
          let data = {
            cartUpdate: this.cart,
            quantity: parseInt(quantity)
          };
          this.actUpdateQuantity(data);
        } else {
          this.$notify(NOTI_GREATER_THAN_ONE);
          e.target.value = this.cart.quantity;
        }
        this.setLoading(false);
      }, 1000);
      this.$notify(NOTI_ACT_UPDATE);
    }
  }
};
</script>

<style>
</style>
