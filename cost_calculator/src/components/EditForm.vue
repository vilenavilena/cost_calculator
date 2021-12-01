<template>
  <div :class="[$style.wrp]" >
    <button :class="[$style.btn]" @click="formVisible">
      CLOSE 
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
        SAVE 
      </button>

      <button :class="[$style.btnCat]" @click="formCategory">
        NEW CATEGORY +
      </button>
    </div>

    <div :class="[$style.addCategory]" v-if="addCategoriesForm">
      <input :class="[$style.inp]" placeholder="New category" v-model="newCategory" />
      <button :class="[$style.addbtn]" @click="saveCategory">
        ADD
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
    props: {
      index: Number,
    },
  computed: {
    ...mapGetters(['getCategoryList','getPaymentsList']),
    getCurrentDate () {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    ...mapMutations (['savePaymentListEl', 'addCategories']),

    save () {
      const data = {
        index: this.index,
        date: this.date || this.getCurrentDate,
        category: this.category,
        price: +this.price
      }
      if ( !this.addCategoriesForm && this.category && this.price) {
      this.savePaymentListEl(data)
      this.$modal.close()
      }
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
      this.$modal.close()
    },
    formCategory () {
      this.addCategoriesForm = !this.addCategoriesForm
    }
  },
  mounted () {
    let el = this.getPaymentsList[this.index]
    this.date = el.date
    this.category = el.category
    this.price = el.price
  },
}
</script>

<style module>
.wrp {
  margin: 10px;
}
.addForm {
  position: absolute;
  display: flex;
  flex-direction: column;
}
.addCategory {
  position: absolute;
  top: 92px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  color: black;
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
  width: 150px;
  padding: 8px;
  background: rgb(93, 180, 164);
  color: #fff;
  margin-bottom: 16px;
  cursor: pointer;
}

.btnCat {
  position: absolute;
  top: 42px;
  left: 206px;
  width: 150px;
  padding: 8px;
  align-self: end;
  background: rgb(93, 180, 164);
  color: #fff;
  text-align: end;
  margin-bottom: 16px;
    margin-right: 16px;
  cursor: pointer;
}
.addbtn {
  width: 150px;
  padding: 8px;
  align-self: end;
  background: rgb(93, 180, 164);
  color: #fff;
  margin-left: 6px;
  cursor: pointer;
}
</style>