<template>
    <div id="content" class="container">
        <div class="container-fluid">
            <div class="text-center">
                <div class="error mx-auto" :data-text="Codigo">{{ Codigo }}</div>
                <p class="lead text-gray-800 mb-1">{{ Mensaje }} </p>
                <p class="text-gray-800 mb-3">{{ Descripcion }}</p>
                <p class="text-gray-500 mb-0">Laboratorios Remotos UNT</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'PageErrorComponent',
    props:{
        CodigoProp: {
            type: String,
            required: false
        },
        MensajeProp: {
            type: String,
            required: false
        },
        DescripcionProp: {
            type: String,
            required: false
        }
    },
    data(){
        return{
            Props: {},
            Codigo: null,
            Mensaje: null,
            Descripcion: null
        }
    },
    created(){

        // Se traen propiedades del state en caso de ser redireccion del componente
        this.Props = this.$store.state.PageErrorComponent;

        // Si se trata de una instancia las variables toman el valor de props que brinda el padre, caso contrario toma el de redireccion
        this.Codigo = this.CodigoProp? this.CodigoProp : ( this.Props? this.Props.Codigo : null);
        this.Mensaje = this.MensajeProp? this.MensajeProp : ( this.Props? this.Props.Mensaje : null);
        this.Descripcion = this.DescripcionProp? this.DescripcionProp : ( this.Props? this.Props.Descripcion : null);
        
        // En caso de no recinir codigo de error por defalt se muestra un error de pagina no encontrada en frontend
        if(!this.Codigo){
            this.Codigo = '404',
            this.Mensaje = 'FRONT_EROR_NOT_FOUND',
            this.Descripcion = 'Pagina no encontrada'
        }
    }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
