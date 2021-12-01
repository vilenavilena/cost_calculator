<template>
  <div :class="[$style.wrp]" >
    <button :class="[$style.btn]" @click="formVisible">
      BACK 
    </button>

    <div :class="[$style.addForm]" v-if="addForm">
      <input :class="[$style.inp]" placeholder="Payment date" v-model="date" />
      <select :class="[$style.inp]" v-model="category">
        <option disabled value="">Payment category</option>
        <option v-for="(cat, id) in getCategoryList" :key="id">
          {{cat}}
        </option>
      </select>

      <input :class="[$style.inp]" type="number" placeholder="Payment amount" v-model.number.lazy="price" />
      <button :class="[$style.addbtn]" @click="save">
        ADD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +
      </button>

      <button :class="[$style.btnCat]" @click="formCategory">
        NEW CATEGORY +
      </button>
    </div>

    <div :class="[$style.addCategory]" v-if="addCategoriesForm">
      <input :class="[$style.inp]" placeholder="New category" v-model="newCategory" />
      <button :class="[$style.addbtn]" @click="saveCategory">
        ADD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +
      </button>
    </div>

  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      date: '',
      category: '',
      price: '',
      addForm: true,
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
    save () {
      const data = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        price: +this.price
      }
      if ( !this.addCategoriesForm && this.category && this.price) {
      this.addPaymentListData(data)
      this.price = ''
      this.date = ''
      this.category = ''
      this.$router.replace({ name: 'dashboard'})
      this.$modal.close()
      }
      // const {date, category, price} = this
      // this.addPaymentListData({date, category, price})

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
      console.log('formVisible')
      this.$router.replace({ name: 'dashboard'})
      this.$modal.close()

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
    this.date =this.date || this.getCurrentDate
    this.category = this.$route.params.category
    this.price = this.$route.query.value
    if ( !this.addCategoriesForm && this.category && this.price) {
      this.save()
    }
  },
}
</script>

<style module>
.wrp {
  position: relative;
}
.addForm {
  position: absolute;
  display: flex;
  flex-direction: column;
}
.addCategory {
  position: absolute;
  top: 92px;
  box-sizing: border-box;
}
.inp {
  margin-bottom: 5px;
  height: 36px;
  width: 200px;
  box-sizing: border-box;
  color: rgb(128, 128, 128);
}
.btn {
  border: 2px solid black ;
  text-decoration: none;
  width: 150px;
  padding: 8px;
  background: rgb(93, 180, 164);
  color: #fff;
  margin-bottom: 16px;
  margin-right: 16px;
  cursor: pointer;

}

.btnCat {
  position: absolute;
  top: 42px;
  left: 206px;
  width: 150px;
  padding: 8px;
  background: rgb(93, 180, 164);
  color: #fff;
  text-align: end;
  cursor: pointer;

}
.addbtn {
  width: 150px;
  padding: 8px;
  align-self: end;
  background: rgb(93, 180, 164);
  color: #fff;
  text-align: end;
  margin-left: 6px;
  cursor: pointer;
}
.link {
  display: flex;
}
</style>