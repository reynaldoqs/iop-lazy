<template>
  <div class="iop-chart-container">
    <line-chart style="max-height:270px" :chart-data="servicios" :chart-labels="labels" :options="options"/>
  </div>
</template>
<script>
import LineChart from "@/shared/charts/LineChart";
import _c from "@/utils/colors";
export default {
  data: () => ({
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              display: true,
              fontColor: "#a5a5a5",
              beginAtZero: true
            },
            gridLines: {
              display: true,
              color: "#f5f5f5"
            }
          }
        ],
        xAxes: [
          {
            display: true,
            ticks: {
              display: true,
              fontColor: "#a5a5a5"
            },
            gridLines: {
              display: true,
              color: "#f5f5f5"
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
        nombre: "Pruebxxxa8",
        recurencia: [3700, 1999, 5800, 7500, 5000, 6000, 7876],
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
              backgroundColor: _c.getRgba(servicio.nombre, 0.06),
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
  padding-top: 20px;
}
</style>
