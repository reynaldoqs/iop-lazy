<template>
  <div class="iop-gral-estadisticas">
    <el-row :gutter="30" type="flex" justify="flex-start">
      <el-col :xs="24" :sm="12">
        <main-stadistics-card/>
      </el-col>
      <el-col :xs="24" :sm="12">
        asdad
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MainStadisticsCard from "@/app/components/MainStadisticsCard";
export default {
  components: {
    MainStadisticsCard
  }
};
</script>
