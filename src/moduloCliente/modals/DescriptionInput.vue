<template>
<div class="autocomplete-container">
  <el-input
  placeholder="Justifique su respuesta"
  autofocus
  @blur="sendIt"
  @keyup.enter.native="sendIt"
  v-model="input"></el-input>
</div>
</template>
<style scoped>
.autocomplete-container {
  width: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      input: "",
      autoFocus: false
    };
  },
  methods: {
    sendIt() {
      this.$emit("onCompleted");
    }
  },
  watch: {
    input() {
      this.$emit("update", this.input);
    }
  }
};
</script>