<template>
  <div id="servicios-card">
     <el-card shadow="hover" :body-style="estilos">
       <div class="card-header" slot="header">
         <div class="servicios-avatar">
           <img src="https://png.icons8.com/ios/70/ffffff/pulse-filled.png">
         </div>
         <div class="servicios-information">
           <h3>Serviciode fundempresa apa</h3>
           <h4>Esta puede ser la url o algo</h4>
           <p>Este puede ser una descripcion</p>
         </div>
       </div>
      <div class="card-description">
        <div class="consumos">
          <h4>Consumos</h4>
          <p>04</p>
        </div>
        <div class="caidas">
          <h4>Caidas</h4>
          <p>0</p>
        </div>
      </div>
      <div class="card-actions">
        <servicios-estadistica/>
      </div>
    </el-card>
  </div>
</template>
<script>
import ServiciosEstadistica from "@/app/components/ServiciosEstadistica";
export default {
  data: () => ({
    estilos: {
      padding: "5px",
      maxWidth: "100%",
      position: "relative"
    }
  }),
  components: {
    ServiciosEstadistica
  }
};
</script>

<style scoped>
.el-card {
  border: none;
  border-radius: var(--el-card-border-radius);
}
.card-header {
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.card-header .servicios-information {
  padding-left: 16px;
  text-align: left;
}
.servicios-information h3 {
  font-size: var(--ds-txt-md);
  font-weight: 700;
  line-height: 20px;
  color: var(--ds-txt-1);
  margin: 3px 0;
}
.servicios-information h4 {
  color: var(--ds-txt-3);
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  margin: 3px 0;
}
.servicios-information p {
  color: var(--ds-txt-2);
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin: 0;
}
.card-description {
  width: 100%;
  display: inline-flex;
}
.card-description h4,
.card-description p {
  font-size: 14px;
  line-height: 18px;
  margin: 5px 0;
  color: var(--ds-txt-1);
  font-weight: 300;
}
.consumos {
  width: 50%;
}
.consumos > p {
  font-weight: 700;
  color: var(--ds-txt-3);
  letter-spacing: 2px;
  font-size: 22px;
  margin: 10px 0;
}
.caidas {
  width: 50%;
}
.caidas > p {
  font-weight: 700;
  color: var(--ds-txt-3);
  letter-spacing: 2px;
  font-size: 22px;
  margin: 10px 0;
}
.card-header .servicios-avatar {
  width: 75px;
  height: 75px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.card-header .servicios-avatar::after {
  content: "";
  width: 15px;
  height: 15px;
  background-color: var(--ds-txt-5);
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 2px;
}
</style>
