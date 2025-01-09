<template>
  <div class="flex h-screen w-screen bg-indigo-100">
    <div class="bg-gray-100 m-4 w-screen rounded-xl flex">
      <MainMenu @update-order="updateOrder" />
      <FormBox :orderName="orderName" @valid-order="validateOrder" />
      <MessageBox :orderName="orderName" :isValidOrder="isValidOrder" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import MainMenu from './components/MainMenu.vue';
import FormBox from './components/FormBox.vue';
import MessageBox from './components/MessageBox.vue';

const orderName = ref("");
const isValidOrder = ref(false);

function updateOrder(newOrder) {
  orderName.value = newOrder;
  validateOrder();
}

function validateOrder() {
  console.log(orderName.value.trim())
  isValidOrder.value = orderName.value.trim() === ""
}

</script>
