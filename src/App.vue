<template>
  <div class="flex h-screen w-screen bg-indigo-100 dark:bg-blue-300">
    <div class="bg-gray-100 dark:bg-gray-950 m-1 w-screen rounded-xl flex">
      <MainMenu @update-order="updateOrder" />
      <FormBox :orderName="orderName" @valid-order="validateOrder" @send-susses="sendMailSusses" />
      <MessageBox :orderName="orderName" :isValidOrder="isValidOrder" :sendSusses="sendSusses" />
      <div class="absolute bottom-7 right-7">
        <p class="text-gray-300 text-xs dark:text-gray-600">Copyright ©2025; Designd by Diego Cesare</p>
      </div>
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
