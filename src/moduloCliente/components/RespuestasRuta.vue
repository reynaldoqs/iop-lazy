<template>
  <div>
     <respuesta-item v-for="respuesta in respuestas" :key="respuesta.id" :statusCode="respuesta.codigoHttp" :description="respuesta.descripcion"/>
  </div>
</template>
<script>
import RespuestaItem from "@/moduloCliente/components/RespuestaItem";
import respuestasApi from "@/services/respuestas";
export default {
  name: "respuestas-ruta",
  data: () => ({
    respuestas: []
  }),
  methods: {
    async loadRespuestas() {
      let resp = await respuestasApi.getRespuestas(this.$route.params.idRuta);
      if (this.$check(resp)) {
        this.respuestas = resp.data.respuestas;
      }
    }
  },
  components: {
    RespuestaItem
  },
  mounted() {
    this.loadRespuestas();
  }
};
</script>
