<template>
  <el-row :gutter="30" type="flex" class="row-bg" justify="flex-start">
    <el-col :xs="12" :md="5">
      <ConsumosCard color="#f44336"/>
    </el-col>
    <el-col :xs="12" :md="5">
      <ConsumosCard/>
    </el-col>
  </el-row>
</template>
<script>
import ConsumosCard from "@/moduloCliente/components/ConsumosCard";
export default {
  components: {
    ConsumosCard
  }
};
</script>
