<script setup lang="ts">
import AsideVue from "../components/Aside.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { reactive } from "vue";


const page = reactive({
  Position: 1,
});

const scrollEvent = (event: any) => {
  const main = event.target;
  const mainSize = main.clientHeight;

  if (main.scrollTop < mainSize) {
    page.Position = 1;
  }
  if (main.scrollTop >= mainSize && main.scrollTop < (mainSize * 2)) {
    page.Position = 2;
  }
  if (main.scrollTop >= (mainSize * 2) && main.scrollTop < (mainSize * 3 )) {
    page.Position = 3;
  }
  if (main.scrollTop >= (mainSize * 3 )) {
    page.Position = 4;
  }      

};
</script>

<template>
  <main>
    <section class="aboutUs" v-on:scroll.native="(event:any) => scrollEvent(event)">
      <div id="blog1">
        Bienvenidos a Lemon Lane, tu tienda de ropa vintage donde encontrarás
        los diseños más exclusivos de gorras, remeras, pantalones, buzos,
        camperas y medias para llevar tu estilo a otro nivel.

      </div>
      <div id="blog2">

        En Lemon Lane creemos en la moda como una forma de expresión personal y
        única, por eso seleccionamos cuidadosamente cada prenda para que puedas
        encontrar aquella que se adapte a tu estilo y personalidad. Nuestra ropa
        vintage te permitirá destacar en cualquier lugar, ya sea en una reunión
        casual o en un evento especial.

      </div>
      <div id="blog3">
        Nos enfocamos en brindarte una experiencia de compra fácil y cómoda
        desde cualquier dispositivo, tanto en la web como en dispositivos
        móviles. Además, podrás acceder a nuestros productos desde cualquier
        lugar de Argentina gracias a nuestros envíos a todo el país.
        
      </div>
      <div id="blog4">

        Te invitamos a explorar nuestro catálogo y descubrir los diseños únicos
        que tenemos para ti. En Lemon Lane, estamos comprometidos con la moda y
        la originalidad, y queremos ser tu marca de referencia.

      </div>
    </section>
  </main>
  <AsideVue>
    <template #Aside-panel>
      <a href="#blog1" :class="{ active: page.Position === 1 }"></a>
      <a href="#blog2" :class="{ active: page.Position === 2 }"></a>
      <a href="#blog3" :class="{ active: page.Position === 3 }"></a>
      <a href="#blog4" :class="{ active: page.Position === 4 }"></a>
    </template>
  </AsideVue>
</template>

<style scoped>
.aboutUs {
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  flex-direction: column;
  width: 81vw;
}

div {
  font-size: 24px;
}

.aboutUs div {
  display: flex;
  align-items: center;
  min-height: 100%;
  width: 100%;
  padding: 0px 10%;
  scroll-snap-align: center;
}

a {
  border-radius: 50%;
  margin: 10px 0px;
  padding: 0.3rem;
  display: block;
  background-color: grey;
}

a.active {
  background-color: #222;
}
</style>
