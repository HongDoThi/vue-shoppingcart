<template>
  <tfoot id="my-cart-footer">
    <!-- CART FOOTER -->

    <tr>
      <td colspan="4">
        There are
        <b>{{total.countItem}}</b> items in your shopping cart.
      </td>
      <td colspan="2" class="total-price text-left">{{formatPrice}}</td>
    </tr>
  </tfoot>
</template>

<script>
import { mapGetters } from "vuex";

import { toCurrency } from "../helpers";

export default {
  name: "cart-footer",
  computed: {
    ...mapGetters({
        'total': 'cart/total'
    }),
     formatPrice() {
      return toCurrency(this.total.totalPrice);
    }
  }
};
</script>

<style>
</style>
