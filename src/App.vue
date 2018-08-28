<template>
  <div id="app">
    <router-view/>
    <modal/>
  </div>
</template>
<script>
import Modal from "@/shared/Modal";
export default {
  name: "app",
  components: {
    Modal
  }
};
</script>
