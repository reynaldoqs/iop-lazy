<template>
  <div class="notification-card">
    <div class="card-container">
      
     <el-card shadow="hover" :body-style="estilos">
       <div class="card-header" slot="header">
         {{dato.titulo}}
       </div>
      <div class="card-description">
        {{dato.descripcion}}
      </div>
      <div class="card-actions">
        <el-button v-show="dato.hasDetails" type="primary" size="small" round>Leer noticia</el-button>
        <span @click="cerrar(dato.titulo)"  class="card-close-link" v-text="dato.hasDetails?'No me interesa':'Descartar'" />
      </div>
    </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    estilos: {
      padding: "16px",
      maxWidth: "100%",
      position: "relative"
    }
  }),
  props: {
    dato: {
      type: Object,
      required: true
    }
  },
  methods: {
    cerrar(titulo) {
      this.$emit("cerrar", titulo);
    }
  }
};
</script>
<style scoped>
.el-card {
  border: none;
  border-radius: var(--el-card-border-radius);
}
.notification-card {
  padding: 5px;
  max-width: 100%;
}
.notification-card > .card-container {
  width: 100%;
}
.notification-card .card-header {
  font-weight: 700;
}
.notification-card .card-description {
  font-weight: 300;
  font-size: 13px;
  color: var(--ds-txt-2);
  text-align: left;
}
.notification-card .card-actions {
  padding: 20px 5px 5px 5px;
  flex-wrap: wrap;
}
.notification-card .card-close-link {
  font-size: 12px;
  display: block;
  margin: 13px 0 0 0;
  color: gray;
  text-decoration: underline;
  cursor: pointer;
}
</style>
