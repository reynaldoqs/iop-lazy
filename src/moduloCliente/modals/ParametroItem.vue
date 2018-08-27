<template>
  <div id="respuesta-item">
    <transition name="slide-fade" mode="out-in">
    <div key="info" v-if="!isCode" class="respuesta-item">
      <div class="avatar-content">
        <div class="avatar">
          {{codigo}}
        </div>
      </div>
      <div class="content">
        <span class="title">
          {{nombre}}
        </span>
        <span class="sub-title hide-text">
          {{descripcion}}
        </span>
     <!--    <span style="font-weight:500; color:var(--ds-txt-1);font-size:10px">
          {{formato}}
        </span> -->
      </div>
      <div class="extra">
        <div class="code" @click="showCode">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEISURBVDhPzZAxSwNBFIRHLARLsU0nSHpR0okg6dNYWAQs1NImYBVIcb1CzO0RRLS0s7XyB4h/4HoFKxEELdz1u5d3IpImXT4YuJk3+27vNL/EoC46djsbKeiRwz2300mFTikN3BpxpHWy73ihhvmg65hr34Y1hB30SXnHI6NalnI9uFV10HpBW5MgaIPwg+sdWvAHZuX/nG6GXu02FO7RU0pa8LlBYRN9xbFWPDLiuZbIn1GhONSabcrV97nBwjN05/YXsktU8o9WLeC7tgmqb9kzf6tFnl9qX4Pv0X3jyk2PJvCzDhie2HOuXfTO9mUbOmQZvbbb6bDkCt24nQ3ecMThltu5Q/oBzbuFlR9q8K4AAAAASUVORK5CYII=">
        </div>
      </div>
    </div>
    <div key="code" v-else class="code-item" @click="showCode">
<!--       <div class="extra-code">
        <div @click="showCode" class="code-back">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div> -->
      <div class="container-code">

       <span class="tipo">
         {{tipo}}
       </span>
       <span class="nombre">
        {{nombre}}
       </span>
       <span class="ejemplo">
         {{ejemplo}}
       </span>
      </div>
    </div>
    </transition>
        <el-popover
          placement="top-end"
          popper-class="iop-poper"
          width="300"
          v-model="isUsed">

          <description-input
          v-on:onCompleted="sendData"
          v-on:update="(data) => {input = data}"
          style="width:100%"/>
          <div style="text-align: right; margin: 0; padding:12px 0 0 0;">
            <el-button type="primary" size="mini" round @click="sendData">Aceptar</el-button>
          </div>
        </el-popover>
  </div>
</template>
<script>
import DescriptionInput from "@/moduloCliente/modals/DescriptionInput";
export default {
  data: () => ({
    input: null
  }),
  props: {
    codigo: {
      type: Number || String,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: false
    },
    ejemplo: {
      type: String || null,
      required: false
    },
    formato: {
      type: String,
      required: false
    },
    isUsed: {
      type: Boolean,
      required: false
    },
    isCode: {
      type: Boolean,
      default: false
    },
    idParametro: {
      type: String,
      required: true
    }
  },
  methods: {
    showCode() {
      this.$emit("showCode");
    },
    sendData() {
      this.$emit("sendData", this.input, this.idParametro);
    }
  },
  components: {
    DescriptionInput
  }
};
</script>

<style scoped>
#respuesta-item {
  --item-height: 55px;
}
.respuesta-item {
  width: 100%;
  height: var(--item-height);
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
  transition: 0.3s all ease-in;
  user-select: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
}
.code-item {
  width: 100%;
  height: var(--item-height);
  padding: 5px 0;
  display: flex;
  align-items: center;
  transition: 0.3s all ease-in;
  background-color: #181f22;
  border-bottom: solid 1px rgba(100, 100, 100, 0.1);
}
/* .extra-code {
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.code-back {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: solid 1px #90a4ae;
  justify-content: center;
  cursor: pointer;
} */
/* .code-back > i {
  color: #90a4ae;
} */
.container-code {
  width: 100%;
  height: 100%;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  padding: 0 0 0 16px;
}
.container-code > span {
  font-weight: 300;
  font-size: 12px;
}
span.tipo {
  color: #ff9800;
  margin-right: 5px;
}
span.tipo::before {
  content: "<";
  margin-right: -5px;
}
span.tipo::after {
  content: ">";
  margin-left: -5px;
}
span.nombre {
  color: #4caf50;
  margin-right: 5px;
  font-weight: 700;
}
span.nombre::before {
  content: '"';
  margin-right: -5px;
}
span.nombre::after {
  content: '":';
  margin-left: -5px;
}
span.ejemplo {
  color: #00acc1;
}
span.ejemplo::before {
  content: '"';
  margin-right: -5px;
}
span.ejemplo::after {
  content: '"';
  margin-left: -5px;
}
.respuesta-item:hover {
  background-color: #f6f6f6;
}
.avatar-content {
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar {
  width: 28px;
  height: 28px;
  background-color: var(--http-200);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 10px;
  color: white;
}
.content {
  width: calc(100% - 120px);
  text-align: left;
  padding: 3px;
}
.content span {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: var(--ds-txt-3);
  margin: 4px 0;
}
.content .title {
  font-size: 15px;
  color: var(--ds-txt-1);
  font-weight: 500;
  text-transform: capitalize;
  position: relative;
  padding-left: 18px;
}
.content .title::after {
  content: "{}";
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  color: #8bc34a;
  font-family: "Courier New", Courier, monospace;
  position: absolute;
  left: 0;
  top: 2px;
}

.extra {
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.extra > .code {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: solid 1px #ff9800;
  justify-content: center;
}
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s linear;
}
.slide-fade-enter {
  transform: translateX(30px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
@media (max-width: 700px) {
  .respuesta-item {
    height: 40px;
  }
}
</style>

