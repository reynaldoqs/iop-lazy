<template>
  <div>
    <div id="iop-user" class="iop-avatar">
      <el-popover
        @after-enter="afterEnter"
        placement="bottom"
        width="300"
        popper-class="iop-usuario-information-container"
        trigger="hover">
        <div id="user-detail" class="iop-user-detail-container">
          <user-card v-if="isLoaded" @is-loaded-user="isLoadedUser"/>
        </div>
 
        <div class="iop-avatar-container" slot="reference">
            <img src="https://png.icons8.com/metro/40/424343/administrator-male.png">
        </div>
      </el-popover>
    </div>
  </div>
</template>
<script>
import { Loading } from "element-ui";
import UserCard from "@/shared/components/UserCard";
export default {
  data: () => ({
    isLoaded: false,
    loadingInstance: null
  }),
  components: {
    UserCard
  },
  methods: {
    afterEnter() {
      this.isLoaded = true;
      console.log("entramos");
    },
    isLoadedUser() {
      console.log("recibimos");
      this.loadingInstance.close();
    }
  },
  mounted() {
    this.loadingInstance = Loading.service({
      target: "#user-detail"
    });
  }
};
</script>

<style>
.iop-usuario-information-container {
  border: none;
}
.iop-user-detail-container {
  min-height: 330px;
  transition: 0.1 height ease;
}
.iop-avatar img {
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 50%;
  background-color: var(--ds-bg-1);
  cursor: pointer;
}
.iop-avatar {
  margin: 0 10px;
}
</style>

