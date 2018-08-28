<template>
    <div>
        <particlesBG >
          <div style="width:100%;" slot="header">
            <div class="items-container">
              <img src="../../assets/logo agetic blanco.png" width="140px" alt="">
                <el-select v-model="value" placeholder="Select">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
            </div>
          </div>
          <div class="main-content">
            <transition name="component-fade" mode="out-in">
               <component :is="currentComponent"></component>
            </transition>
          </div>
          <div slot="footer">
            <div class="btn-scroll">
              <i class="el-icon-arrow-down" />
            </div>
          </div>
        </particlesBG> 
    </div>
</template>
<script>
import particlesBG from "@/shared/components/ParticlesBG";
import MainView from "@/moduloUsuario/components/MainInformation";
import Login from "@/moduloUsuario/components/Login";
import Register from "@/moduloUsuario/components/Register";
export default {
  data: () => ({
    activeName: "ingreso",
    currentComponent: "",
    options: [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ],
    value: ""
  }),
  components: {
    particlesBG,
    "main-view": MainView,
    login: Login,
    register: Register
  },
  watch: {
    "$route.query"(val) {
      if (val.action) {
        this.currentComponent = val.action;
      } else {
        this.currentComponent = "main-view";
      }
    }
  },
  mounted() {
    this.currentComponent = this.$route.query.action || "main-view";
  }
};
</script>
<style scoped>
.items-container {
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-scroll {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: solid 1px #f1f1f1;
  margin: 0 auto;
  animation: float 3s ease-in-out infinite;
  cursor: pointer;
  padding: 10px 7px;
  transition: 0.3s background-color ease;
}
.btn-scroll:hover {
  background-color: #f1f1f1;
}
.btn-scroll:hover > i {
  color: #6039aa;
}
.btn-scroll > i {
  color: #f1f1f1;
  font-size: 22px;
  font-weight: 900;
}
.main-content {
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.4s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>