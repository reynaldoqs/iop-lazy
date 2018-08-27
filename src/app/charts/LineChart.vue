<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  data() {
    return {};
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
