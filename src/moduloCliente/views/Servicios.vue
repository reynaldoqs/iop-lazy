<template>
  <div class="iop-servicios-default">
    <ambietes-selector/>
  </div>
</template>
<script>
import AmbietesSelector from "@/moduloCliente/components/AmbientesSelector";
export default {
  components: {
    AmbietesSelector
  }
};
</script>

<style scoped>
.iop-servicios-default {
  width: 100%;
  clear: both;
  text-align: left;
}
</style>
