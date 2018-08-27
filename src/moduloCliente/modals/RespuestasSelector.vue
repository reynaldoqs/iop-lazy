<template>
  <div>
    <el-alert
    title="Información"
    type="info"
    description="This an informations nad it helps u to make a good selections of parameters"
    show-icon>
  </el-alert>
<div class="respuestas-modal-container">
<div class="left-container" :style="{'pointer-events':blockLeft}">
    <draggable v-model="parametrosRuta" class="dragArea" :options="{group:'respuestas'}">
      <transition-group type="transition" :name="'flip-list'">
          <ParametroItem
          
          v-on:showCode="()=>{parametro.isCode = !parametro.isCode}"
          v-for="parametro in parametrosRuta"
          :key="parametro.id"
          :codigo="parametro.codigoHttp"
          :nombre="parametro.nombre"
          :descripcion="parametro.descripcion"
          :tipo="parametro.tipo"
          :ejemplo="parametro.valorEjemplo"
          :formato="parametro.formato"
          :isUsed="parametro.isUsed"
          :isCode="parametro.isCode"
          :idParametro="parametro.id" >
          </ParametroItem>
      </transition-group>
    </draggable>      
</div>

<div class="right-container">
    <draggable 
    v-on:add="addicionar"
    v-on:change="changeArea"
    v-model="parametrosUser"
    class="dragArea"
    :options="{group:'respuestas'}">
    
      <ParametroItem
          v-on:showCode="()=>{parametro.isCode = !parametro.isCode}"
          v-on:sendData="reciveData"
          v-for="parametro in parametrosUser"
          :key="parametro.id"
          :codigo="parametro.codigoHttp"
          :nombre="parametro.nombre"
          :descripcion="parametro.descripcion"
          :tipo="parametro.tipo"
          :ejemplo="parametro.valorEjemplo"
          :formato="parametro.formato"
          :isUsed="parametro.isUsed"
          :isCode="parametro.isCode" 
          :idParametro="parametro.id"
          >      
      </ParametroItem>
    </draggable> 
</div>
  </div>
  </div>
</template>
<script>
import ParametroItem from "@/moduloCliente/modals/ParametroItem";
import draggable from "vuedraggable";
import respuestasApi from "@/services/respuestas";
export default {
  data() {
    return {
      visible2: false,
      idRuta: null,
      idServicio: null,
      parametrosRuta: [],
      parametrosUser: []
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    addicionar(val) {
      console.log(val);
    },
    changeArea(added, removed, moved) {
      this.openMiniModal(this.parametrosUser, added.added.element.id);
    },
    openMiniModal(array = [], id) {
      let index = array.findIndex(data => data.id === id);
      array[index].isUsed = true;
    },
    reciveData(data, id) {
      let index = this.parametrosUser.findIndex(data => data.id === id);
      this.parametrosUser[index].descripcionUso = data;
      this.parametrosUser[index].isUsed = false;
      setTimeout(() => {
        this.parametrosUser[index].isCode = true;
      }, 200);
    },
    saveData() {
      console.log(this.parametrosUser);
    },
    async loadRespuestas() {
      try {
        let resp = await respuestasApi.getRespuestas(this.idRuta);
        if (this.$check(resp)) {
          let promises = resp.data.respuestas.map(data => {
            return respuestasApi.getRespuestaParametros(this.idRuta, data.id);
          });
          let responses = await Promise.all(promises);
          let unique = [...responses];
          let itemsRespuesta = unique.map(data => {
            return {
              respuesta: data.data
            };
          });
          //Volviendo todo un solo array y herreando los datos del padre
          let arrayFormated = itemsRespuesta.map(data => {
            return {
              idRespuesta: data.respuesta.id,
              codigoHttp: data.respuesta.codigoHttp,
              parametros: data.respuesta.parametros.map(parametro => {
                return Object.assign(parametro, {
                  idRespuesta: data.respuesta.id,
                  codigoHttp: data.respuesta.codigoHttp,
                  isCode: false,
                  isUsed: false,
                  descripcionUso: null
                });
              })
            };
          });
          let fullList = arrayFormated
            .map(data => data.parametros)
            .reduce((coll, item) => {
              item.map(data => coll.push(data));
              return coll;
            });
          this.parametrosRuta = fullList;
        }
      } catch (err) {
        console.error(err);
        this.$notify.error({
          title: "Error al cargar datos:",
          message: err.response
        });
      }
    }
  },
  computed: {
    blockLeft() {
      return this.parametrosUser.some(data => data.isUsed) ? "none" : "auto";
    }
  },
  mounted() {
    this.idRuta = this.data.idRuta;
    this.idServicio = this.data.idServicio;
    this.loadRespuestas();
  },
  components: {
    draggable,
    ParametroItem
  }
};
</script>
<style scoped>
.el-button {
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-weight: 700;
}
.dragArea {
  max-height: 300px;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
}

.respuestas-modal-container {
  width: 100%;
  display: inline-flex;
}
.respuestas-modal-container > .left-container {
  width: 50%;
  padding: 10px 30px 10px 10px;
}
.respuestas-modal-container > .right-container {
  width: 50%;
  padding: 10px 30px 10px 10px;
}
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
.flip-list-move {
  transition: transform 0.3s;
}
</style>
