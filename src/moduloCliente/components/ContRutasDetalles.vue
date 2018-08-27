<template>
  <div class="iop-gral-estadisticas">
    <el-row :gutter="30" type="flex" justify="flex-start">
      <el-col :xs="24" :sm="8">
        <respuestas-card/>
      </el-col>
      <el-col :xs="24" :sm="8">

      </el-col>
      <el-col :xs="24" :sm="8">
        <respuestas-card/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import RespuestasCard from "@/moduloCliente/components/RespuestasCard";
export default {
  components: {
    RespuestasCard
  }
};
</script>

