<template>
  <div>
    <AmbientesSelector/>
    <ConsumosView/>
    <stadistics-view/>
    <ServiciosList/>
  </div>
</template>
<script>
import ConsumosView from "@/moduloCliente/components/ConsumosView";
import AmbientesSelector from "@/moduloCliente/components/AmbientesSelector";
import ServiciosList from "@/moduloCliente/layouts/ServiciosList";
import StadisticsView from "@/moduloCliente/components/StadisticsView";
export default {
  components: {
    AmbientesSelector,
    ConsumosView,
    ServiciosList,
    StadisticsView
  }
};
</script>
