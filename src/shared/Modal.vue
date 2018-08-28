<template>
  <div>
    <el-dialog
      :width="width"
      :visible.sync="dialogVisible"
      custom-class="iop-modal"
      :before-close="handleClose">
      <span slot="title">{{title}}</span>
      <component :is="currentComponent" :data="data"/>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" round>Cancelar</el-button>
        <el-button type="primary" @click="dialogVisible = false" round>Confirmar</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
import RespuestasSelector from "@/moduloCliente/modals/RespuestasSelector";
export default {
  data() {
    return {
      dialogVisible: false,
      width: "",
      title: "modal",
      data: {},
      currentComponent: ""
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    open() {
      this.dialogVisible = true;
    },
    set(data, title, width = 600) {
      this.data = data;
      this.title = title;
      this.width = `${width}px`;
      this.currentComponent = title
        .split(" ")
        .join("-")
        .toLowerCase();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$hub.$on("set-modal-data", this.set);
      this.$hub.$on("open-modal", this.open);
    });
  },
  destroyed() {
    this.$hub.$off("set-modal-data", this.set);
    this.$hub.$off("open-modal", this.open);
  },
  components: {
    Respuestas: RespuestasSelector
  }
};
</script>
<style scoped>
.el-button {
  border: none;
  font-weight: 700;
}
.iop-modal {
  border: none;
  border-radius: 10px;
}
</style>
