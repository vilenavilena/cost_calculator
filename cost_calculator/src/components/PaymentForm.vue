<template>
  <div>
    <button  @click="formVisible">
      ADD NEW COST &nbsp;&nbsp;+
    </button>
    <div  v-if="addForm">
      <input  placeholder="Payment date" v-model="date" />
      <input

              placeholder="Payment description"
              v-model="category"
      />
      <input

              type="number"
              placeholder="Payment amount"
              v-model="price"
      />
      <button @click="save">
        ADD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        date: '',
        category: '',
        price: '',
        addForm: false,
      }
    },
    methods: {
      save() {
        const {date, category, price} = this
        // price=Number(price)
        this.$emit('add', {date, category, price})
      },
      formVisible() {
        this.addForm = !this.addForm
        this.price = ''
        this.date = ''
        this.category = ''
      },
    },
  }
</script>
