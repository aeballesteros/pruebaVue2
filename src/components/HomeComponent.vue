<template>
        <div class="row justify-content-center">
            <div class="col-xl-10">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block">
                            </div>
                
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">LABORATORIOS REMOTOS UNT</h1>
                                    </div>
                                    
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="usuario" aria-describedby="emailHelp"
                                                placeholder="Correo electronico">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="contrasena" placeholder="Contraseña">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Recuerdame</label>
                                            </div>
                                        </div>
                                        <a v-on:click="LogIn" class="btn btn-primary btn-user btn-block">
                                            Iniciar Sesion
                                        </a>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small">¿Olvidaste tu contraseña?</a>
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RouterView></RouterView>

</template>
  
<script>


    export default {
        name: "HomeComponent",
        data() {
            return {
                token: null,
                urlHome: "/home",
                urlValidacionDatos:"/datos",
                redirect: false,
                Error: {
                    esError:0
                }
            };
        },
        methods:{
            LogIn(){
                
            },
            Redirigir(Ruta){
                console.log(Ruta);
                // this.$router.push({
                //     name: Ruta,
                //     params:{
                //         parametro1: 'C'
                //     }
                // });
            }
        }
    }
  </script>