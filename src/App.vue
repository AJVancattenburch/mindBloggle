<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    
  </main>
   <footer class="bg-dark text-light">
    <marquee style="width: 100dvw;">
      💻 Made with code. AJ + Chantha = making computers go "beep-boop-beep" 💻
       💻 Made with code. AJ + Chantha = making computers go "beep-boop-beep" 💻
       💻 Made with code. AJ + Chantha = making computers go "beep-boop-beep" 💻
    </marquee>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
