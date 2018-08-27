<template>
  <el-row type="flex" class="row-bg" justify="space-between">
    <el-col :xs="12" :md="6">
      <div class="iop-ambientes-selector">
        <h2>Selección</h2>
      <el-select size="midium"  v-model="idAmbiente" placeholder="Ambiente">
          <el-option-group
            v-for="group in ambientes"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.ambiente.idAmbiente"
              :label="item.ambiente.nombre"
              :value="item.ambiente.idAmbiente">
            </el-option>
          </el-option-group>
        </el-select>
    </div>
    </el-col>
    <el-col :xs="12" :md="8">
      <div class="views-style">
        <el-button size="small" :type="cardView?'primary':''" :plain="!cardView" icon="el-icon-menu">Cards</el-button>
        <el-button size="small" :type="cardView?'':'primary'" :plain="cardView" icon="el-icon-tickets">Table</el-button>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import usuariosApi from "@/services/usuarios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isLoaded: false,
      cardView: true,
      ambientes: [
        {
          label: "Desarrollo",
          options: []
        }
      ],
      idAmbiente: null
    };
  },
  methods: {
    async loadAmbientes() {
      if (this.currentUser) {
        let resp = await usuariosApi.getAmbientes(this.currentUser.id);
        if (this.$check(resp)) {
          this.ambientes[0].options = resp.data.ambientes.map(data => {
            return Object.assign(data, { tipo: "desarrollo" });
          });
        }
      }
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  mounted() {
    this.loadAmbientes();
  }
};
</script>
<style scoped>
.iop-ambientes-selector {
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: flex-start;
  padding: 15px 5px;
}
.views-style {
  padding: 15px 5px;
  float: right;
}
.views-style .el-button {
  border: none;
}
.iop-ambientes-selector > h2 {
  color: var(--ds-txt-2);
  margin: 0;
  font-size: var(--ds-txt-lg);
  margin-right: 20px;
}
.iop-ambientes-selector .el-select {
  width: 170px;
  position: relative;
  top: -5px;
}
</style>
