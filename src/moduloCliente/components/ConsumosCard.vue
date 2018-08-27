<template>
  <div class="consumos-card">
     <el-card shadow="hover" :body-style="estilos">
       <div class="card-header" slot="header">
        <span>{{title}}</span>
        <i style="font-size:30px;" class="el-icon-more-outline"></i>
       </div>
      <div class="card-description">
        <span :style="{color:color}" class="quantity">
          {{quantity}}
        </span>
        <span class="inf">
          Consumos este mes
        </span>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    estilos: {
      padding: "15px",
      maxWidth: "100%",
      position: "relative"
    }
  }),
  props: {
    title: {
      type: String,
      default: "Sin título"
    },
    quantity: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "#03A9F4"
    }
  }
};
</script>
<style scoped>
.el-card {
  border: none;
  border-radius: var(--el-card-border-radius);
}
.consumos-card {
  width: 100%;
  height: 100%;
  padding: 20px 0;
}
.consumos-card .card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.consumos-card .card-header > span {
  font-size: 17px;
  font-weight: 500;
  color: var(--ds-txt-1);
}
.consumos-card .card-header > i {
  cursor: pointer;
  color: var(--ds-txt-4);
}
.consumos-card .card-description {
  text-align: left;
  padding: 0 10px 10px 10px;
}
.card-description .quantity {
  font-size: 35px;
  line-height: 35px;
  font-weight: 700;
  color: var(--ds-txt-4);
}
.card-description .inf {
  font-weight: 300;
  font-size: 14px;
  color: #a1a1a1;
  position: relative;
  top: -5px;
}
</style>
