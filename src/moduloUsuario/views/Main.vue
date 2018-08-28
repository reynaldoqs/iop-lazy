<template>
  <div class="main">
    <header-layout/>
    <div class="rest">
      resto de la pagina
    </div>
  </div>
</template>
<script>
import HeaderLayout from "@/moduloUsuario/layouts/HeaderLayout";
export default {
  components: {
    HeaderLayout
  }
};
</script>

<style scoped>
.main {
  background-color: #fff;
}
.rest {
  width: 100%;
  height: 500px;
}
</style>