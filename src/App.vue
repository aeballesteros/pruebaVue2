<template>
  <RouterView></RouterView>
  <button @click="prueba()">Form</button>
  <!-- <FormComponent TipoProps="C" ClaseProps="Experiencia" InputsProps="[{Nombre:'nombre', Etiqueta: 'Nombre'}]" UrlProps="/"></FormComponent> -->
</template>

<!-- Se agregan refencias de Bootstarp al proyecto, archivos css y js -->

<script>

  // import FormComponent from './components/commons/FormComponent.vue'

  export default {
    name: 'App',
    components:{
},
    mounted() {
      this.loadCssExterno('https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i');
      this.loadCssLocal('../assets/vendor/fontawesome-free/css/all.min.css');
      this.loadCssLocal('../assets/css/sb-admin-2.min.css');
      this.loadCssLocal('../assets/vendor/datatables/dataTables.bootstrap4.min.css');
      this.loadCssLocal('../assets/css/sb-admin-2.min.css');
      this.loadCssLocal('../assets/vendor/datatables/dataTables.bootstrap4.min.css');
      
      this.loadScriptLocal('assets/vendor/jquery/jquery.min.js');
      this.loadScriptLocal('assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
      this.loadScriptLocal('assets/vendor/jquery-easing/jquery.easing.min.js');
      this.loadScriptLocal('assets/js/sb-admin-2.min.js');
      this.loadScriptLocal('assets/vendor/datatables/jquery.dataTables.min.js');
      this.loadScriptLocal('assets/vendor/datatables/dataTables.bootstrap4.min.js');
      this.loadScriptLocal('assets/js/demo/datatables-demo.js');
    },
    methods: {
      // Conjunto de metodos que insertan en el html las referencias
      loadCssExterno(url){
        const link = document.createElement('link');
        link.href = url;
        link.rel = 'stylesheet'
        link.type = 'text/css'
        document.head.appendChild(link);
      },
      loadCssLocal(url){
        const link = document.createElement('link');
        link.href = process.env.BASE_URL + url;
        link.rel = 'stylesheet'
        link.type = 'text/css'
        document.head.appendChild(link);
      },
      loadScriptLocal(url) {
        const script = document.createElement('script');
        script.src = process.env.BASE_URL + url;
        script.async = false;
        script.type ='text/javascript'
        document.body.appendChild(script);
      },
      loadScriptExterno(url) {
        const script = document.createElement('script');
        script.src = url;
        script.async = false;
        script.type ='text/javascript'
        document.body.appendChild(script);
      },
      prueba(){
        const payload ={
        name: 'FormComponent',
        props:{
          Tipo: "C",
          Clase: "Experiencia",
          Url: "/",
          Inputs: JSON.stringify([{Nombre:'nombre',Etiqueta:'Nombre',Tipo:'text',Valor:'Atilio'},{Nombre:'fecha',Etiqueta:'Fecha',Tipo:'time'}])
        }
      }
      this.$store.commit('setPropertiesRoute',payload)
      this.$router.push({ name: 'form'}); 
      }
    }
}
</script>


