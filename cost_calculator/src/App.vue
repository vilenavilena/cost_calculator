<template>
  <div id="app">
    <header :class="[$style.header]">
      My personal costs
    </header>
    <main>
      <PaymentForm @add="DataAddet" />
      <PaymentsList :items="paymentsList" />
    </main>
  </div>
</template>

<script>
  import PaymentsList from './components/PaymentsList'
  import PaymentForm from './components/PaymentForm'

  import { mapActions } from 'vuex'

  export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm,
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
</style>