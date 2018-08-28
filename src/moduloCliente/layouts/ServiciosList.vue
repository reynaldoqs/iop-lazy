<template>
  <div>
    <el-row :gutter="30" type="flex" justify="flex-start">
      <el-col :xs="24" :sm="12" :md="8">
        <servicios-card/>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <servicios-card/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import serviciosApi from "@/services/servicios";
import ServiciosCard from "@/shared/components/ServiciosCard";
export default {
  components: {
    ServiciosCard
  }
};
</script>
