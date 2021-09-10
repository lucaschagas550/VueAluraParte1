<template>
  <div class="corpo">
    <meu-menu v-bind:rotas="routes"/>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu';

export default {

components:{
  'meu-menu' : Menu
},

  data(){
    return{
      routes: routes
    }
  }
};

</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

/* transicao entre as paginas com efeito*/

.pagina-enter, .painel--leave-active { 
    opacity: 0
}

.pagina-enter-active, .painel-leave-active {
    transition: opacity .4s /*400 milisegundos */
}
</style>
