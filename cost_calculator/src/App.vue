<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal costs
      <!-- <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/404">404</router-link> -->
    </header>
    <main>
      <transition name='fade'>
        <Modal />
      </transition>
      <router-view />
    </main>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import Modal from './components/modalwindows/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions ([
      'fetchData'
    ]),
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style module>
.header {
  font: 1em sans-serif;
  font-size: 36px;
  margin-bottom: 16px;
}
:global(.fade-enter) {
  opacity: 0;
}
:global(.fade-enter-active) {
  transition: opacity 1s;
}
:global(.fade-leave) {
  opacity: 0;
}

</style>