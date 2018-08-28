  <template>
    <div class="login-table">
      <el-card>
        <div slot="header">Datos del login</div>
        <div>
          <input v-model="creds.usuario" type="text">
          <input @keyup.enter="login" v-model="creds.clave" type="text">
        </div>
      </el-card>
    </div>
  </template>
  <script>
export default {
  data: () => ({
    creds: {
      usuario: "gcespedes",
      clave: "123456"
    }
  }),
  methods: {
    login() {
      this.$store
        .dispatch("login", this.creds)
        .then(data => {
          this.$notify.success({
            title: "Login extiso",
            message: data
          });
          this.$router.push({ path: "cliente" });
        })
        .catch(err => {
          this.$notify.error({
            title: "Error en el login",
            message: err
          });
        });
    }
  }
};
</script>
  
  <style scoped>
</style>
  
  