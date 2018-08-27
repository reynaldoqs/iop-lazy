<template>
  <div class="iop-chart-container">
    <line-chart style="max-height:150px;" :chart-data="servicios" :chart-labels="labels" :options="options" />
  </div>
</template>
<script>
import LineChart from "@/app/charts/LineChart";
import _c from "@/utils/colors";
export default {
  data: () => ({
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              display: true,
              fontColor: "white",
              beginAtZero: true
            },
            gridLines: {
              display: false
            }
          }
        ],
        xAxes: [
          {
            display: true,
            ticks: {
              display: true,
              fontColor: "white"
            },
            gridLines: {
              display: false
            }
          }
        ]
      },
      legend: {
        display: false,
        labels: {
          fontColor: "#515151",
          usePointStyle: true
        },
        position: "bottom"
      },
      responsive: true,
      maintainAspectRatio: false
    },
    labels: [
      "lunes",
      "martes",
      "miercoles",
      "jueves",
      "viernes",
      "sábado",
      "domingo"
    ],
    servicio: [
      {
        nombre: "Prueba",
        recurencia: [1, 4, 1, 3, 5, 6, 7],
        active: true
      }
    ]
  }),
  components: {
    LineChart
  },
  computed: {
    servicios() {
      return {
        labels: this.labels,
        datasets: this.servicio
          .map(servicio => {
            let elemento = {
              label: servicio.nombre,
              borderColor: "#87197d",
              pointBackgroundColor: "#e1e1e1",
              borderDash: [0],
              borderDashOffset: 4,
              borderJoinStyle: "miter",
              borderWidth: 3.5,
              pointBorderColor: "#87197d",
              pointBorderWidth: 1.5,
              pointRadius: 6,
              steppedLine: false,
              backgroundColor: _c.getRgba(servicio.nombre, 0.09),
              fill: true,
              data: servicio.recurencia,
              active: servicio.active
            };
            return elemento;
          })
          .filter(servicio => servicio.active)
      };
    }
  }
};
</script>
<style scoped>
.iop-chart-container {
  padding-left: 5px;
}
</style>
