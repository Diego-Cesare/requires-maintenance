<template>
  <div class="flex h-screen w-screen bg-indigo-100">
    <div class="bg-gray-100 m-4 w-screen rounded-xl flex">
      <MainMenu @update-order="updateOrder" />
      <FormBox :orderName="orderName" @valid-order="validateOrder" @send-susses="sendMailSusses" />
      <MessageBox :orderName="orderName" :isValidOrder="isValidOrder" :sendSusses="sendSusses" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import MainMenu from './components/MainMenu.vue';
import FormBox from './components/FormBox.vue';
import MessageBox from './components/MessageBox.vue';

const orderName = ref("")
const isValidOrder = ref(false)
const sendSusses = ref(false)

function updateOrder(newOrder) {
  orderName.value = newOrder
  validateOrder()
}

function validateOrder() {
  isValidOrder.value = orderName.value.trim() === ""
}

function sendMailSusses() {
  sendSusses.value = true
}

</script>
