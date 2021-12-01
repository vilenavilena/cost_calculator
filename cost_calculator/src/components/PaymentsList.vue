<template>
  <div>
    <div>
      <router-link :class="[$style.btn]" to="/add/payment">ADD NEW COST &nbsp;&nbsp;+</router-link>
    </div>

    <div >
      <router-link :class="[$style.btn]" to="/add/payment/Food?value=1000">Food - 1000</router-link>
      <router-link :class="[$style.btn]" to="/add/payment/Transport?value=50">Transport - 50</router-link>
      <router-link :class="[$style.btn]" to="/add/payment/Entertaiment?value=2000">Entertaiment - 2000</router-link>
    </div>
    <div >
      <router-link :class="[$style.btn]" to="/add/payment/Food">Food</router-link>
      <router-link :class="[$style.btn]" to="/add/payment/Transport">Transport</router-link>
      <router-link :class="[$style.btn]" to="/add/payment/Entertaiment">Entertaiment</router-link>
    </div>

    <table :class="[$style.table]">
      <tbody>
        <tr :class="[$style.tr]">
          <td><b>#&nbsp;</b></td>
          <td><b>Date</b></td>
          <td><b>Category</b></td>
          <td><b>Value</b></td>
        </tr>
        <tr :class="[$style.tr]"
          v-for="(item, index) in curentPage" 
          :key="index"
        >
          <td>{{ index + (page-1)*perPage + 1}}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.price }}</td>
          <td> <button :class="[$style.dot]" @click="showEditMenu($event,index)">⠇</button> </td>
        </tr>
      </tbody>
    </table>

    <Pagination :length='getPaymentsList.length' 
      :perPage='perPage' 
      :curPage='page'
      @paginate='onPaginate'
    />
  </div>
</template>

<script>

import { mapGetters, mapActions} from 'vuex'
import Pagination from './Pagination'

export default {
  components: {
    Pagination
  },
  data () {
    return {
    page: 1,
    perPage: 10,
    addForm: false,

    }
  },
  computed: {
    ...mapGetters(['getPaymentsList', 'getCategoryList']),
    curentPage () {
      const { page, perPage } = this
      return this.getPaymentsList.slice(perPage*(page-1), perPage*(page-1)+perPage )
    }
  },
  methods: {
    ...mapActions (['loadCategories']),
    onPaginate (p){
      this.page = p
    },
    showPaymentsForm () {
    this.$modal.show('PaymentForm')
    },
    closePaymentsForm () {
    this.$modal.close()
    },
    showEditMenu (event, index) {
      index = index + (this.page-1)*this.perPage
      this.$modal.show('EditMenu', event, index)
    }
  },
  mounted () {
    this.page = Math.ceil(this.getPaymentsList.length/this.perPage)
    if (this.page === 0) {this.page = 1}
    if (!this.getCategoryList.length) {
      this.loadCategories()
    }
  },
  beforeUpdate () {
      if (this.curentPage.length === 0 && this.page > 1) {
        this.page--
        console.log('page--')
      }
  },
  beforeDestroy () {
    this.$modal.close()
  }
}
</script>

<style module>
.table {
  width: 350px;
  border-collapse: collapse;
}
.tr {
  height: 36px;
  border-bottom: 1px solid rgba(138, 138, 138, 0.5);
}
.btn {
  font: 13px sans-serif;
  border: 2px solid black ;
  text-decoration: none;
  box-sizing: border-box;
  display:inline-block;
  width: 150px;
  padding: 8px;
  background: rgb(93, 180, 164);
  color: #fff;
  text-align: center;
  margin-bottom: 16px;
  margin-right: 16px;
}
.dot {
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>