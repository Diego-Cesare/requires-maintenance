<template>
    <div class="w-1/4 h-auto m-4 absolute right-4 flex flex-col gap-10">
        <Transition name="slide-fade">
            <div v-if="orderName" class="p-10 rounded-lg
            bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500
            dark:bg-gradient-to-r dark:from-blue-300 dark:via-blue-400 dark:to-blue-500">
                <h1 class="text-xl mb-3 text-white">Você selecionou o item <span class="text-black font-bold">{{
                    orderName
                        }}</span>
                </h1>
                <p class="text-white">Por favor, crie sua lista de pedidos usando apenas</p>
                <p class="text-white">itens relacionados à <span class="text-black">{{ orderName }}</span></p>
            </div>
        </Transition>
        <Transition name="slide-fade">
            <div v-if="isValidOrder" class="p-10 rounded-lg 
            bg-gradient-to-r from-red-200 via-red-300 to-red-400">
                <h1 class="text-xl mb-3 text-white">Você não selecionou nenhum item!!</h1>
                <p class="text-white">Por favor, vá até o menu lateral esquerdo e selecione um item para prosseguir com
                    seu pedido!</p>
            </div>
        </Transition>
        <Transition name="slide-fade">
            <div v-if="sendSusses" class="p-10 rounded-lg  relative
        bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
                <div class="shake absolute top-3">
                    <img class="w-32" src="../assets/send.png" alt="">
                </div>
                <div>
                    <h1 class="text-2xl text-white">Pedido enviado com sucesso</h1>
                    <p class="text-1xl text-white">Em breve, uma das equipes de manutenção<br>irá até a sua unidade</p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
const props = defineProps(['orderName', 'isValidOrder', 'sendSusses'])

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

.shake {
    transform: translateX(330px);
    animation: shake 2s ease-in-out;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(330px);
    }
}
</style>