<template>
  <div>
       <div v-if="usuario" class="iop-usuario-information">
          <header>
            <div class="iop-full-avatar">
            </div>
            <h2>{{usuario.nombres}}<span> {{usuario.primerApellido?usuario.primerApellido:usuario.segundoApellido}}</span></h2>
            <h3>{{usuario.usuario}}</h3>
          </header>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facere aliquam ut commodi praesentium error.
            </p>
            <div class="iop-user-icons">
              <el-tooltip placement="top">
              <div slot="content">{{usuario.correoElectronico}}</div>
              <img :src="`https://png.icons8.com/material/22/${imagesColor}/email.png`">
              </el-tooltip>
              <el-tooltip placement="top">
              <div slot="content"><span v-for="num in usuario.telefonoCelular" :key="num"> {{num}} </span></div>
              <img :src="`https://png.icons8.com/material/22/${imagesColor}/phone.png`">
              </el-tooltip>
              <el-tooltip placement="top">
              <div slot="content">{{usuario.datosEntidad.siglaEntidad}}</div>
                <img :src="`https://png.icons8.com/material/22/${imagesColor}/checked-user-male.png`">
              </el-tooltip>
            </div>
          </section>
          <footer>
            <div class="logout">
              <img src="https://png.icons8.com/material/26/382b6f/shutdown.png">
              <span style="margin-left:15px">Cerrar sessión</span>
            </div>
          </footer>
        </div>
  </div>
</template>
<script>
import usuariosApi from "@/services/usuarios";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    imagesColor: "03A9F4",
    usuario: null
  }),
  methods: {
    async loadUser(idUser) {
      let resp = await usuariosApi.getUsuario(idUser);
      if (this.$check(resp)) {
        this.usuario = resp.data;
        //tiempo para que carge la imagen
        setTimeout(() => {
          this.$emit("is-loaded-user");
        }, 300);
      }
    }
  },
  mounted() {
    if (this.isAuthenticated) {
      this.loadUser(this.currentUser.id);
    } else {
      this.$notify.error({
        title: "Store error",
        message: "El usuario no se encuentra autenticado"
      });
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "currentUser"])
  }
};
</script>

<style scoped>
.iop-usuario-information header {
  width: 100%;
  text-align: center;
  padding: 16px 16px 5px 16px;
}
.iop-usuario-information > header > .iop-full-avatar {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #515151;
  background-image: url(../../assets/user.jpg);
  background-size: cover;
  text-align: center;
  margin: 0 auto;
}
.iop-usuario-information > header > h2 {
  color: var(--ds-txt-2);
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  margin: 15px 0 5px 0;
  text-transform: lowercase;
}
.iop-usuario-information > header > h2::first-letter {
  text-transform: capitalize;
}
.iop-usuario-information > header > h3 {
  color: var(--color-3);
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  margin: 5px 0 0 0;
  text-transform: lowercase;
}
section > .iop-user-icons {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
}
section > .iop-user-icons img {
  margin: 0 10px;
  cursor: pointer;
}
section > p {
  margin: 5px 10px;
  color: var(--ds-txt-3);
}
.iop-usuario-information > footer {
  width: 100%;
  border-top: solid 1px rgba(90, 90, 90, 0.16);
  margin-top: 10px;
  padding: 15px;
  padding-bottom: 5px;
}
.iop-usuario-information > footer > .logout {
  display: flex;
  align-items: center;
  font-weight: 700;
  color: var(--ds-txt-3);
  cursor: pointer;
}
</style>
