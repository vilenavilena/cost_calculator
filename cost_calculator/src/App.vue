<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal costs
      <!-- <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/404">404</router-link> -->
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
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
</style>