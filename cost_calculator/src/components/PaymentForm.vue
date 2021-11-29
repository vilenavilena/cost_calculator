<template>
  <div>
    <button  @click="formVisible">
      ADD NEW COST &nbsp;&nbsp;+
    </button>
    <div v-if="addForm">
      <input placeholder="Payment date" v-model="date" />
      <select  v-model="category">
        <option disabled value="">Payment category</option>
        <option v-for="cat in getCategoryList" :key="cat">
          {{cat}}
        </option>
      </select>
      <input type="number" placeholder="Payment amount" v-model.number="price"
      />
      <button  @click="save">
        ADD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +
      </button>
      <button  @click="formCategory">
        NEW CATEGORY +
      </button>

    </div>
    <div  v-if="addCategoriesForm">
      <input  placeholder="New category" v-model="newCategory" autofocus/>
      <button  @click="saveCategory">
        ADD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      date: '',
      category: '',
      price: '',
      addForm: false,
      newCategory: '',
      addCategoriesForm: false
    }
  },
  computed: {
    ...mapGetters(['getCategoryList']),
     getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    ...mapMutations (['addPaymentListData', 'addCategories']),
    ...mapActions (['loadCategories']),
    save () {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        price: +this.price
      }
      if ( this.addCategoriesForm || !this.category || !this.price){
        return
      }
      this.addPaymentListData(data)
      // const {date, category, price} = this
      // this.addPaymentListData({date, category, price})
      this.price = ''
      this.date = ''
      this.category = ''
    },
    saveCategory () {
      const { newCategory } = this
      if (newCategory) {
        this.addCategories(newCategory)
      }
        this.category = newCategory
        this.newCategory = ''
        this.addCategoriesForm = !this.addCategoriesForm
    },
    formVisible() {
      this.addForm = !this.addForm
      this.addCategoriesForm = false
      this.price = ''
      this.date = ''
      this.category = ''
      this.newCategory = ''
    },
    formCategory () {
      this.addCategoriesForm = !this.addCategoriesForm
    }
  },
  mounted () {
    if (!this.getCategoryList.length) {
      this.loadCategories()
    }
  }
}
</script>