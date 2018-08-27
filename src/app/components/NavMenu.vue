<template>
    <div class="iop-nav-menu">
        <ul>
        <router-link tag="li" active-class="active" to="/cliente">Inicio</router-link>
        <router-link tag="li" active-class="active" to="servicios">Servicios</router-link>
        <router-link tag="li" active-class="active" to="rutas">Rutas</router-link>
        <el-button @click="emitir" type="primary" size="medium" round>Ingresar</el-button>
        </ul>
    </div>
</template>
<script>
export default {
  methods: {
    emitir() {
      this.$hub.$emit("transmition");
    }
  }
};
</script>

<style scoped>
.iop-nav-menu {
  --main-text: #f1f1f1;
  --second-text: #a4a4a4;
}
.iop-nav-menu > ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
}
.iop-nav-menu > ul > li {
  color: var(--second-text);
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
}
.iop-nav-menu > ul > li:not(:last-child) {
  margin-right: 20px;
}
.el-button {
  font-size: 14px;
  font-weight: 700;
  background-color: #382b6f;
  border: none;
}
.active {
  color: red;
}
</style>
