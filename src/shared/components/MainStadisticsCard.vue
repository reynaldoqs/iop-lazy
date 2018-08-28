<template>
  <div>
     <el-card shadow="hover" :body-style="estilos">
       <div class="card-header" slot="header">
          <span>Podsumowanie</span>
       </div>
      <div class="card-description">
        <small>
          titulo
        </small>
        <span>10 346,78</span>PLN
      </div>
      <div class="card-content">
        <main-stadistics/>
      </div>
      <div class="card-actions">
      <el-button round>WIEJ SZCZGELOW</el-button>
      </div>
     </el-card>
  </div>
</template>
<script>
import MainStadistics from "@/shared/components/MainStadistics";
export default {
  data: () => ({
    estilos: {
      padding: "10px 16px",
      maxWidth: "100%",
      position: "relative"
    }
  }),
  components: {
    MainStadistics
  }
};
</script>
<style scoped>
.el-card {
  border: none;
  border-radius: var(--el-card-border-radius);
}
.el-button {
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  color: var(--ds-txt-3);
  font-weight: 500;
}
.card-header {
  text-align: left;
}
.card-header > span {
  font-size: var(--ds-txt-md);
  color: var(--ds-txt-2);
  font-weight: 500;
}
.card-description {
  text-align: left;
  color: var(--ds-txt-2);
}
.card-description > small {
  display: block;
  font-weight: 300;
  color: var(--ds-txt-3);
}
.card-description > span {
  font-weight: 400;
  display: inline-block;
  font-size: 24px;
  color: var(--ds-txt-2);
  margin: 5px 10px 5px 25px;
  position: relative;
}
.card-description > span::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-1);
  position: absolute;
  left: -20px;
  top: 10px;
}
.card-actions {
  padding: 16px 5px 5px 5px;
  text-align: right;
}
</style>
