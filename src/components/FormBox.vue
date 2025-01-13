<template>
  <div class="m-4 w-2/5">
    <div class="p-10">
      <h1 class="text-gray-700 text-3xl font-bold dark:text-gray-200">
        Prepare seu pedido!
        <span class="text-indigo-600">{{ orderName }}</span>
      </h1>
      <p class="font-light text-gray-700 dark:text-gray-200">
        Cada campo é importante para uma melhor<br />resposta das equipes de
        manutenção.
      </p>
    </div>
    <form @submit.prevent="sendEmail" class="p-10 h-4/5 relative">
      <div class="flex flex-col">
        <label class="dark:text-gray-200" for="unity">Nome da unidade</label>
        <input
          @click="validOrder"
          name="unidade"
          type="text"
          v-model="formData.unidade"
          class="w-auto border-b-1 border-t-0 border-l-0 border-r-0 border-gray-800 dark:bg-gray-900 dark:border-gray-100 dark:text-white"
          required
        />
      </div>
      <div class="flex gap-1 w-auto mt-10">
        <div class="flex flex-col">
          <label class="dark:text-gray-200" for="local">Endereço</label>
          <input
            @click="validOrder"
            name="endereco"
            type="text"
            v-model="formData.endereco"
            class="w-96 border-b-1 border-t-0 border-l-0 border-r-0 border-gray-800 dark:bg-gray-900 dark:border-gray-100 dark:text-white"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="dark:text-gray-200" for="phone">Telefone</label>
          <input
            @click="validOrder"
            name="telefone"
            type="text"
            v-model="formData.telefone"
            class="w-full border-b-1 border-t-0 border-l-0 border-r-0 border-gray-800 dark:bg-gray-900 dark:border-gray-100 dark:text-white"
            required
          />
        </div>
      </div>
      <div class="mt-10">
        <input type="hidden" name="categoria" v-model="formData.orderName" />
        <label class="dark:text-gray-200" for="">Lista de pedidos</label>
        <textarea
          @click="validOrder"
          name="sevicos"
          v-model="formData.servicos"
          class="w-full min-h-52 max-h-52 border border-gray-300 p-2 dark:bg-gray-900 dark:border-gray-100 dark:text-white"
          placeholder="Pule para linha abaixo ao fim de cada item!!!"
          required
        ></textarea>
      </div>
      <button
        @click="validSend"
        type="submit"
        class="bg-indigo-500 w-96 p-4 text-white absolute bottom-5 right-0 -translate-x-2/4 hover:bg-pink-500 transition duration-200"
      >
        Enviar pedido
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  props: {
    orderName: {
      type: String,
      default: "",
    },
    sendSusses: false,
  },
  data() {
    return {
      formData: {
        unidade: "",
        endereco: "",
        telefone: "",
        servicos: "",
        orderName: this.orderName,
      },
    };
  },
  // created() {
  //     // Carregar o valor do localStorage ao iniciar
  //     const saveData = true
  //     const savedUnidade = localStorage.getItem("unidade");
  //     const savedEndereco = localStorage.getItem("endereco");
  //     const savedTelefone = localStorage.getItem("telefone");
  //     if (saveData) {
  //         this.formData.unidade = savedUnidade;
  //         this.formData.endereco = savedEndereco;
  //         this.formData.telefone = savedTelefone;
  //     }
  // },
  watch: {
    // Sincronizar `orderName` com `formData.orderName`
    orderName(newVal) {
      this.formData.orderName = newVal;
    },
  },

  computed: {
    isFormValid() {
      // Verifica se todos os campos estão preenchidos
      return (
        this.formData.servicos &&
        this.formData.unidade &&
        this.formData.endereco &&
        this.formData.orderName &&
        this.formData.telefone
      );
    },
  },

  methods: {
    validOrder(item) {
      this.$emit("valid-order", item);
    },

    // validSend(send) {
    //   if (
    //     this.formData.servicos !== "" &&
    //     this.formData.unidade !== "" &&
    //     this.formData.endereco !== "" &&
    //     this.formData.orderName !== "" &&
    //     this.formData.telefone !== ""
    //   ) {
    //     this.$emit("send-susses", send);
    //   } else {
    //     alert("Nada");
    //   }
    // },

    validSend(send) {
      if (this.isFormValid) {
        this.$emit("send-susses", send);
      } else {
        alert("Preencha todos os campos antes de enviar.");
      }
    },

    // saveToLocalStorage() {
    //     // Salvar o valor no localStorage
    //     localStorage.setItem("unidade", this.formData.unidade);
    //     localStorage.setItem("endereco", this.formData.endereco);
    //     localStorage.setItem("telefone", this.formData.telefone);
    // },
    sendEmail() {
      if (this.orderName === "") {
        this.formData.unidade = "";
        this.formData.endereco = "";
        this.formData.telefone = "";
        this.formData.servicos = "";
        return;
      }

      const serviceID = "service_xi26o83"; // Substitua pelo seu Service ID
      const templateID = "template_4gyqkkj"; // Substitua pelo seu Template ID
      const userID = "2hKcOoKCHUYuViiaO"; // Substitua pelo seu Public Key

      emailjs
        .send(
          serviceID,
          templateID,
          {
            unidade: this.formData.unidade,
            endereco: this.formData.endereco,
            telefone: this.formData.telefone,
            categoria: this.formData.orderName,
            servicos: this.formData.servicos,
          },
          userID
        )
        .then((response) => {
          //alert("Email enviado com sucesso!");
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((error) => {
          alert("Ocorreu um erro ao enviar o email.");
          // console.error("FAILED...", error);
        });
    },
  },
};
</script>
