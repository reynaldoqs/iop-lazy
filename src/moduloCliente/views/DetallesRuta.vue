<template>
  <div>
    <h1>Detalles de la ruta</h1>
    <cont-rutas-detalles/>
    <pre style="text-align:left">
      Ruta:{{idRuta}}
      Servicio:{{idServicio}}
      {{
        parametros
      }}
    </pre>
  </div>
</template>
<script>
import paramatrosApi from "@/services/parametrosService";
import ContRutasDetalles from "@/moduloCliente/components/ContRutasDetalles";
export default {
  data() {
    return {
      parametros: null
    };
  },
  watch: {
    idRuta() {
      paramatrosApi.getParametros(this.idRuta).then(data => {
        this.parametros = data.data.parametros;
      });
    }
  },
  mounted() {
    paramatrosApi.getParametros(this.idRuta).then(data => {
      this.parametros = data.data.parametros;
    });
  },
  computed: {
    idRuta() {
      return this.$route.params.idRuta;
    },
    idServicio() {
      return this.$route.query.idServicio;
    }
  },
  components: {
    ContRutasDetalles
  }
};
</script>
