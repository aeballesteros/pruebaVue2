<!-- Componente que sirve solamente para creacion o modificacion de objetos  -->

<template>
    <div class="p-5">
        <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">{{ Titulo }}</h1>
        </div>
        <form class="user" @submit="handleSubmit">
            <div v-for="Input in DatosFormulario" :key="Input.Nombre" class="form-group">
                <div class="col-lg-12">
                    <label class="col-lg-8" :for="Input.Nombre">{{ Input.Etiqueta }}</label>
                    <input class="form-control form-control-user" placeholder="Ingrese texto..." :v-model="DatosFormulario[Input.Nombre]" :id="Input.Nombre" :type="Input.Tipo" :value="Input.Valor">
                </div>
            </div>
            <hr>
            <a class="btn btn-primary btn-user btn-block" @click="Aceptar">
                Aceptar
            </a>
        </form>
    </div>
</template>
  
<script>

    import { appsettings } from '../../../appsettings';
    import Axios from 'axios'

    export default {
        props: {
            TipoProps: {
                type: String,
                required: false
            },
            ClaseProps: {
                type: String,
                required: false
            },
            InputsProps: {
                type: String,
                required: false,
            },
            DatosProps: {
                type: String,
                required: false,
            },
            UrlProps: {
                type: String,
                required: false,
            }
        },
        data() {
            return {
                Props: {},
                Tipo: '',
                Clase: '',
                Inputs: '',
                Datos: '',
                Url: '',
                Titulo: '',
                Error: 0,
                DatosFormulario: []
            };
        },
        created() {
            // Se traen propiedades del state en caso de ser redireccion del componente
            this.Props = this.$store.state.FormComponent;
            
            // Si se trata de una instancia las variables toman el valor de props que brinda el padre, caso contrario toma el de redireccion
            this.Tipo = this.TipoProps? this.TipoProps : ( this.Props? this.Props.Tipo : null);
            this.Clase = this.ClaseProps? this.ClaseProps : ( this.Props? this.Props.Clase : null);
            this.Inputs = this.InputsProps? this.InputsProps : ( this.Props? this.Props.Inputs : null);
            this.Datos = this.DatosProps? this.DatosProps : ( this.Props? this.Props.Datos : null);
            this.Url = this.UrlProps? this.UrlProps : ( this.Props? this.Props.Url : null);

            // Si aluguno de los parametros necesarios para construir el componente son nulos, no se lo renderiza
            if(!this.Tipo || !this.Clase || !this.Inputs || !this.Url){
                const payload = {
                    name: 'PageErrorComponent',
                    props: {
                        Codigo: '600',
                        Mensaje: 'FRONT_ERROR_REDIRECT',
                        Descripcion: 'Error de redireccion'
                    }
                }
                this.$store.commit('setPropertiesRoute',payload);
                this.$router.push({name:'error'})
            }
            // Segun el valor de los parametros se cargan datos para el formulario
            this.Titulo = this.Tipo == "C" ? ("Nuevo/a " + this.Clase) : (this.Tipo == "M" ? ("Modificar " + this.Clase) : null);
            this.DatosFormulario = this.Inputs? JSON.parse(this.Inputs) : null;

            if (this.Datos && this.DatosFormulario) {
                const datosDeserializados = JSON.parse(this.Datos);
                if (Array.isArray(datosDeserializados) && datosDeserializados.length > 0) {
                    this.DatosFormulario.forEach(input => {
                        datosDeserializados.forEach(dato => {
                            if (input.Nombre == dato.Nombre) {
                                input["Valor"] = dato.Valor;
                            }
                            else {
                                input["Valor"] = "";
                            }
                        });
                    });
                }
            }
        },
        methods: {
            // Metodo que se encarga de enviar la peticion post del formulario al backend
            async Aceptar() {
                // Se arma payload para solicitud HTTP al backend
                let payload = {};
                this.DatosFormulario.forEach(dato => {
                    payload[dato.Nombre] = document.getElementById(dato.Nombre).value;
                });

                let url;
                console.log(appsettings)
                // Se busca la url del backend donde se envian los datos del formulario
                appsettings.urlsBackend.forEach(modulo => {
                    if(this.Clase in modulo){
                        if(this.Tipo=='C'){
                            url = modulo[this.Clase].Crear;
                        }
                        else{
                            url = modulo[this.Clase].Modificar;
                        }
                        
                    }
                });

                try{
                    const respuesta = await Axios.post(appsettings.Backend+url,payload);

                    if (respuesta.data.ErrorOperacion == 0) {
                            if (respuesta.data.ErrorInesperado == 0) {
                                // Mostrar pop up con respuesta
                            }
                            else{
                                // Mostrar pop up con error de backend
                            }
                    }
                    else {
                        // Mostrar popup con error de operacion
                    }
                    
                }
                catch(error){
                    console.log(error);
                }
                
    
            }
        }
    };
</script>