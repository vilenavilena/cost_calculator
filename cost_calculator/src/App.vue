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
  export default {
    name: 'App',
    components: {
      PaymentsList,
      PaymentForm,
    },
    data() {
      return {
        paymentsList: [
          {
            date: '21.09.2021',
            category: 'Food',
            price: 123,
          },
          {
            date: '20.09.2021',
            category: 'Food',
            price: 456,
          },
          {
            date: '19.09.2021',
            category: 'Food',
            price: 789,
          },
          {
            date: '18.09.2021',
            category: 'Food',
            price: 0,
          },
        ],
      }
    },
    methods: {
      DataAddet(data) {
        this.paymentsList.push(data)
      },
    },
  }
</script>

<style module>
  .header {
    font: 1em sans-serif;
    font-size: 36px;
    margin-bottom: 16px;
  }
</style>