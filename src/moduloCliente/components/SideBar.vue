<template>
  <div>
  <div @click="isCollapse = !isCollapse" class="iop-aside-header">
  
  </div>
  <el-menu  id="servicios-bar" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-upload"></i>
        <span slot="title" class="iop-aside-title">Servicios</span>
      </template>

      <el-menu-item-group>
        <span slot="title" class="iop-aside-title">Servicios de la plataforma</span>
        <el-submenu  v-for="(servicio, mainIndex) in servicios" :key="mainIndex" :index="`1-${mainIndex}`">
            <span class="max-letters" slot="title">{{servicio.nombre}}</span>
            <el-menu-item @click="selectItem(ruta)" v-if="servicio.rutas.length > 0" v-for="(ruta,index) in servicio.rutas" :key="ruta.id" :index="`1-${mainIndex}-${index}`"><span class="max-letters" style="margin-right:0">{{ruta.nombre}}</span></el-menu-item>
        </el-submenu>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">Navigator Two</span>
    </el-menu-item>

    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">Navigator Three</span>
    </el-menu-item>

    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">Navigator Four</span>
    </el-menu-item>
    
  </el-menu>
  </div>
</template>
<script>
import usuariosApi from "@/services/usuarios";
import serviciosApi from "@/services/servicios";
import rutasApi from "@/services/rutasService";

import { Loading } from "element-ui";
export default {
  data() {
    return {
      isCollapse: true,
      servicios: null
    };
  },
  methods: {
    selectItem(item) {
      this.$router.push({
        name: "detalles-ruta",
        params: { idRuta: item.id },
        query: { idServicio: item.idServicio }
      });
      console.log(item);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    switchColapse() {
      this.isCollapse = !this.isCollapse;
    },
    async loadServicesDates() {
      let loadingInstance = Loading.service({
        target: "#servicios-bar"
      });

      let respuesta = await serviciosApi.getServicios();

      if (!this.$check(respuesta)) {
        this.showError("Error al cargar los servicios");
        return;
      }

      let servicios = respuesta.data.servicios;

      let promesasRutas = servicios.map(servicio => {
        return serviciosApi.getRutas(servicio.id);
      });

      let arrayRespuestas = [];
      await Promise.all(promesasRutas).then(responses => {
        arrayRespuestas = responses.map(response => response.data.rutas);
      });

      Object.keys(servicios).map(key => {
        Object.assign(servicios[key], { rutas: arrayRespuestas[key] });
      });

      this.servicios = servicios;
      loadingInstance.close();
    },
    showError(err) {
      this.$notify.error({
        title: "Error en el servicio",
        message: err
      });
    }
  },
  mounted() {
    this.loadServicesDates();
  }
};
</script>
<style>
.iop-aside-header {
  width: 100%;
  height: 65px;
  padding: 10px;
  text-align: right;
  background-color: gray;
  margin-bottom: 5px;
}
.el-menu-vertical-demo {
  max-height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 500px;
}
.iop-aside-title {
  font-weight: 700;
}
.max-letters {
  margin-right: 15px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: gray;
}
</style>