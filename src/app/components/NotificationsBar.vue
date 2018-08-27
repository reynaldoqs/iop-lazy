<template>
    <div class="iop-notifications-bar">
        <notifications-header :cant="cant"/>
        <div class="noticias">    
            <notification-card v-on:cerrar="cerrar" :dato="noticia" v-for="(noticia, index) in noticias" :key="index"/>
        </div>
    </div>
</template>
<script>
import NotificationsHeader from "@/app/components/NotificationsHeader";
import NotificationCard from "@/app/components/NotificationCard";
export default {
  data: () => ({
    noticias: [
      {
        titulo: "Noticias uno",
        tipo: "notifica",
        descripcion:
          "Esta es la descripcion de la noticia uno, tendremos que cortar antes de alcanzar el tope.",
        fecha: new Date(),
        hasDetails: true
      },
      {
        titulo: "Noticias dos",
        tipo: "notifica",
        descripcion:
          "Esta es la tendremos que cortar antes de alcanzar el tope.",
        fecha: new Date(),
        hasDetails: false
      },
      {
        titulo: "Noticias tres",
        tipo: "notifica",
        descripcion: "Esta es la descripcion de la noticia uno, tendrem",
        fecha: new Date(),
        hasDetails: true
      },
      {
        titulo: "Noticias cuatro",
        tipo: "notifica",
        descripcion: "Esta es la descripcion de la noticia uno, tendrem",
        fecha: new Date(),
        hasDetails: true
      }
    ]
  }),
  methods: {
    cerrar(titulo) {
      let index = this.noticias.findIndex(noticia => noticia.titulo === titulo);
      this.noticias.splice(index, 1);
    }
  },
  computed: {
    cant() {
      return this.noticias.length;
    }
  },
  components: {
    NotificationsHeader,
    NotificationCard
  }
};
</script>

<style scoped>
.iop-notifications-bar {
  min-width: 280px;
  max-width: 280px;
  min-height: 400px;
  padding: 16px;
}
.noticias {
  padding: 20px 0;
}
</style>
