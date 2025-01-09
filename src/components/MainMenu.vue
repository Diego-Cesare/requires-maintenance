<template>
    <div class="bg-indigo-500 w-3/12 m-4 rounded-xl dark:bg-blue-400">
        <div class="p-10">
            <h3 class="text-white text-2xl">Smect manutenção</h3>
        </div>
        <div class="py-5 px-10">
            <h1 class="text-white text-4xl font-bold">Selecione um dos itens</h1>
            <h1 class="text-white text-4xl font-bold">abaixo.</h1>
            <p class="text-white text-1xl font-thin"><strong>Atenção</strong>! Apenas um item será aceito por vez.
                <br>Isso ajudará as equipes de manutenção a terem mais agilidade
                para separar matérias, organizar ferramentas e planejar a manutenção na sua unidade.
            </p>
        </div>
        <div class="flex flex-col px-10 py-3">
            <button @click="changeOrder(item)" class="flex text-xl text-white font-thin py-2 px-2
            hover:bg-indigo-400 transition duration-300 dark:hover:bg-blue-300" v-for="item in items" :key="item.id">{{ item.name }}</button>
        </div>
        <div class="p-10">
            <button @click="togglePlusItems" class="flex justify-between w-full text-white text-1xl
            px-3 py-2
            bg-indigo-400 hover:bg-indigo-600 dark:bg-blue-300 dark:hover:bg-blue-300">Mais serviços
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            <Transition name="slide-fade">
                <div v-if="hidePlusItems" class="flex flex-col px-2 py-3 bg-indigo-400 dark:bg-blue-300">
                    <button @click="changeOrder(item)" class="flex text-white py-1 px-3 text-xs
                hover:bg-indigo-300 dark:hover:bg-blue-200
                " v-for="item in plusItems" :key="item.id">{{ item.name }}</button>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const hidePlusItems = ref(false)
const emit = defineEmits(['update-order']);

const items = [
    { "id": 1, "name": "Alvenaria" },
    { "id": 2, "name": "Elétrica" },
    { "id": 3, "name": "Hidráulica" },
    { "id": 4, "name": "Marcenaria" },
    { "id": 5, "name": "Serralheria" }
]

const plusItems = [
    { "id": 1, "name": "Ar-condicionado" },
    { "id": 2, "name": "Limpeza" },
    { "id": 3, "name": "Móveis" },
    { "id": 4, "name": "Póda de arvores" },
    { "id": 5, "name": "Transporte" }
]

function togglePlusItems() {
    hidePlusItems.value = !hidePlusItems.value
}

function changeOrder(item) {
    emit('update-order', item.name);
}


</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>