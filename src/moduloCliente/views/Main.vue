<template>
<div id="cliente-app">
<el-container>
  <el-aside width="auto"><side-bar/></el-aside>
  <el-container>
    <el-header height="auto">
      <tool-bar/>
    </el-header>
    <el-main>
      <section class="main-container">
        <router-view name="cliente"></router-view>
      </section>
      <notifications-bar/>
    </el-main>
    <el-footer>Pie de página</el-footer>
  </el-container>
</el-container>
</div>
</template>
<script>
import ToolBar from "@/shared/components/ToolBar";
import SideBar from "@/moduloCliente/layouts/SideBar";
import NotificationsBar from "@/shared/components/NotificationsBar";
import { mapGetters } from "vuex";

export default {
  components: {
    ToolBar,
    SideBar,
    NotificationsBar
  },
  methods: {
    notificar() {
      this.$notify.error({
        title: "Notificacion",
        message: "Error message",
        type: "error",
        offset: 60,
        timeout: 0
      });
    }
  },
  computed: {
    ...mapGetters([
      "isAuthenticated"
      // ...
    ])
  },
  mounted() {
    this.$hub.$on("transmition", () => {
      console.log("estamos reciviendo");
    });
  }
};
</script>
<style>
/* Temporalmente aqui, si el usuario no logeado necesita modales, moverlo a la raiz principal */

#cliente-app .el-container {
  height: 100vh;
}
#cliente-app .main-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
#cliente-app .el-header,
#cliente-app .el-footer {
  background-color: var(--toolbar-bg);
  width: 100%;
}

#cliente-app .el-aside {
  text-align: center;
  line-height: 200px;
  overflow-y: auto;
  text-align: left;
}

#cliente-app .el-main {
  background-color: #f0f0f3;
  text-align: center;
  display: inline-flex;
  justify-content: flex-end;
}
</style>

