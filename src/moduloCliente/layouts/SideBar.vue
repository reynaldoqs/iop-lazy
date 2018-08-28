<template>
  <div id="iop-sidebar">
    <div @click="isCollapse = !isCollapse" class="iop-aside-header">
    
    </div>
    <div class="iop-aside-content">
      <div class="iop-servicios-list">
        <side-bar-servicios-list :isCollapse="isCollapse"/>
      </div>
    </div>
  </div>
</template>
<script>
import SideBarServiciosList from "@/moduloCliente/components/SideBarServiciosList";
export default {
  data: () => ({
    isCollapse: false
  }),
  components: {
    SideBarServiciosList
  }
};
</script>
<style scoped>
#iop-sidebar {
  width: auto;
  height: 100%;
}
.iop-aside-header {
  width: 100%;
  height: 65px;
  padding: 10px;
  text-align: right;
  background-color: gray;
  margin-bottom: 5px;
}
</style>