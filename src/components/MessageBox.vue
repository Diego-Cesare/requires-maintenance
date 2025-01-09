<template>
    <div class="w-1/4 h-auto m-4 absolute right-4">
        <Transition name="slide-fade">
            <div v-if="orderName" class="p-10 rounded-lg
            bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500">
                <h1 class="text-xl mb-3 text-white">Você selecionou o item <span class="text-black font-bold">{{ orderName
                        }}</span>
                </h1>
                <p class="text-white">Por favor crie sua lista de pedidos usando apenas</p>
                <p class="text-white">itens relacionado á <span class="text-black">{{ orderName }}</span></p>
            </div>
        </Transition>
        <Transition name="slide-fade">
            <div v-if="isValidOrder" class="p-10 rounded-lg 
            bg-gradient-to-r from-red-200 via-red-300 to-red-400">
                <h1 class="text-xl mb-3 text-white">Você não selecionou nenhum item!!!</h1>
                <p class="text-white">Por favor, vá até o menu lateral esquerdo e selecione um item para prosseguir com seu pedido!</p>
            </div>
        </Transition>
    </div>
</template>

<script setup>
const props = defineProps(['orderName', 'isValidOrder'])

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