<template>
    <div v-if="showPopup" class="popup-overlay">
        <span class="close-button" @click="closePopup">x</span>

    <div class="popup-container">
        <div class="col-lg-12">
            
            <span class="close-button" @click="closePopup">x</span>
            
            <div class="p-5">
                <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">{{ Titulo }}</h1>
                </div>
                <hr v-if="Titulo">
                <div class="text-center">
                    <h1 class="h6 text-gray-900 mb-4">{{ Mensaje }}</h1>
                </div>
                <!-- Permite insertar otros componentes dentro del popup -->
                <slot></slot>

            </div>
        </div>
    </div>
    </div>
</template>
  
<script>

  export default {
    props:{
        Habilitado: {
            type: Boolean,
            required: true
        },
        Titulo:{
            type: String,
            required: false
        },
        Mensaje:{
            type: String,
            required: false
        }
    },
    data(){
        return{
            showPopup: false
        }
    },
    methods: {
        closePopup() {
            this.showPopup = false;
        }
    },
    created(){
        console.log('Valor recibido del padre: ' + this.Habilitado)
        this.showPopup = this.Habilitado;
    },
    watch: {
        Habilitado(nuevoValor) {
        console.log('Nuevo valor:', nuevoValor);
        this.showPopup = nuevoValor;
        console.log(this.showPopup);
        },
    },
  };

</script>
  
<style scoped>
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
  
    .popup-container {
        background-color: #fff;
        padding: 1px;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        font-size: 20px;
    }
</style>