<template>
  <div class="respuestas-card">
     <el-card shadow="hover" :body-style="estilos">
       <div class="card-header" slot="header">
         <span>Respuestas de la ruta</span>
         <div class="options">
          <span @click="currentTab = 1" :class="{active:currentTab===1?true:false}">Todas</span>
          <span @click="currentTab = 2" :class="{active:currentTab===2?true:false}">Registradas</span>
         </div>
       </div>
      <div class="card-content">
        <div class="respuestas-container">
          <transition name="slide-fade" mode="out-in">
            <respuestas-ruta v-if="currentTab === 1"/>
            <respuestas-user v-else/>
          </transition>
        </div>
      </div>
      <div class="card-actions">
        <el-button @click.stop="openModal" round size="midium">
          Adicionar
        </el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
import RespuestasRuta from "@/moduloCliente/components/RespuestasRuta";
import RespuestasUser from "@/moduloCliente/components/RespuestasUser";
export default {
  name: "respuestas-card",
  data: () => ({
    currentTab: 1,
    estilos: {
      padding: "20px 16px 10px 16px",
      maxWidth: "100%",
      position: "relative"
    },
    key: 1
  }),
  methods: {
    openModal() {
      this.$hub.$emit("open-modal");
      this.$hub.$emit(
        "set-modal-data",
        {
          idRuta: this.$route.params.idRuta,
          idServicio: this.$route.query.idServicio
        },
        "Respuestas",
        1000
      );
    }
  },
  components: {
    RespuestasRuta,
    RespuestasUser
  }
};
</script>
<style scoped>
.el-card {
  border: none;
  border-radius: var(--el-card-border-radius);
}
.el-button {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border: none;
  font-weight: 700;
  color: var(--ds-txt-2);
}
.options span {
  color: var(--ds-txt-3);
  margin: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s all ease;
}
span.active {
  color: var(--color-1);
  position: relative;
}
span.active::after {
  content: "";
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -20px;
  height: 2px;
  background-color: var(--color-1);
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.card-header > span {
  color: var(--ds-txt-1);
}
.respuestas-container {
  height: 350px;
  max-height: 350px;
  overflow-y: auto;
}
.card-actions {
  padding: 16px;
}
.slide-fade-enter-active {
  transition: all 0.3s linear;
}
.slide-fade-leave-active {
  transition: all 0.3s linear;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
