<template>
  <div class="respuesta-item">
    <div class="avatar-content">
      <div class="avatar">
        {{statusCode}}
      </div>
    </div>
    <div class="content">
      <span class="title">
        Status : {{statusCode}}
      </span>
      <span class="sub-title hide-text">
        {{description}}
      </span>
      <span style="color:var(--ds-txt-1)">
        {{resType}}
      </span>
    </div>
    <div class="extra">
      {{time}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    statusCode: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    resType: {
      type: String,
      required: false,
      default: "Aplication/json"
    },
    time: {
      type: String,
      required: false,
      default: "10:72"
    }
  }
};
</script>

<style scoped>
.respuesta-item {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  cursor: pointer;
  transition: 0.3s all ease-in;
}
.respuesta-item:hover {
  background-color: #f9f9f9;
}
.avatar-content {
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar {
  width: 40px;
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 50%;
  border: solid 1px #8bc34a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  color: var(--ds-txt-2);
}
.content {
  width: calc(100% - 120px);
  text-align: left;
  padding: 3px;
}
.content span {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--ds-txt-3);
  margin: 2px 0;
}
.content .title {
  font-size: 15px;
  color: var(--ds-txt-1);
  font-weight: 500;
  text-transform: capitalize;
  padding-left: 20px;
  position: relative;
}
.content .title::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #8bc34a;
  position: absolute;
  left: -0px;
  top: 4px;
}

.extra {
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: var(--ds-txt-3);
}
@media (max-width: 700px) {
  .respuesta-item {
    height: 55px;
  }
}
</style>

