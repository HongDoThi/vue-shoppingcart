<template>
  <tbody id="my-cart-body">
    <!-- CART BODY -->
    <template v-if="items.length">
      <cart-body-item v-for="(item, index) in items" :key="index" :cart="item" :index="index"/>
    </template>
    <tr v-else>
      <td colspan="6">{{NOTI_EMPTY_PRODUCT}}</td>
    </tr>
  </tbody>
</template>

<script>
import { mapState } from "vuex";
import { NOTI_EMPTY_PRODUCT } from "../constants/config";
import CartBodyItem from "./CartBodyItem";

export default {
  name: "cart-body-table",
  data() {
    return {
        NOTI_EMPTY_PRODUCT
    };
  },
  components: {
    CartBodyItem
  },
  computed: {
    ...mapState({
      items: state => state.cart.listCart
    })
  }
};
</script>

<style></style>
