<template>
  <div>
  <el-menu  id="servicios-bar" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <img src="https://png.icons8.com/nolan/35/FF9800/cloud.png">
        <span slot="title" class="iop-aside-title">Servicios iop</span>
      </template>

      <el-menu-item-group class="list-of-services">
        <span slot="title" class="iop-aside-title">Servicios de la plataforma</span>
        <el-submenu  v-for="(servicio, mainIndex) in servicios" :key="mainIndex" :index="`1-${mainIndex}`">
            <span class="max-letters" slot="title">{{servicio.nombre}}</span>
            <el-menu-item @click="selectItem(ruta)" v-if="servicio.rutas.length > 0" v-for="(ruta,index) in servicio.rutas" :key="ruta.id" :index="`1-${mainIndex}-${index}`"><span class="max-letters" style="margin-right:0">{{ruta.nombre}}</span></el-menu-item>
        </el-submenu>
      </el-menu-item-group>
    </el-submenu>
    
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
      hasLoadedOnce: false,
      servicios: null
    };
  },
  props: {
    isCollapse: Boolean
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
      if (key === "1" && !this.hasLoadedOnce) {
        let loadingInstance = Loading.service({
          target: ".list-of-services"
        });
        //updateAMD: poner un mensaje de error cuando existar errores al cargar los datos
        this.loadServicesDates().then(() => {
          this.hasLoadedOnce = true;
          loadingInstance.close();
        });
      }
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    async loadServicesDates() {
      let respuesta = await serviciosApi.getServicios();

      if (!this.$check(respuesta)) {
        this.$notify.error({
          title: "Error",
          message: "Error al cargar los servicios iop"
        });
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
    }
  }
};
</script>
<style>
.el-menu-vertical-demo {
  max-height: 100%;
}
.el-menu-vertical-demo img {
  margin-right: 5px;
  position: relative;
  left: -5px;
  top: -2px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 260px;
  min-height: 500px;
  overflow-x: hidden;
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