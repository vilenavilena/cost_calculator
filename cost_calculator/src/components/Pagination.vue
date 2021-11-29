<template>
  <div :class="[$style.wrp]">
    <div :class="[$style.onhover]" @click="onClick(curPage-1)">&#10094;</div>
    <div 
      :class="{[$style.active]: curPage === i}" 
      v-for="i in amount" :key="i" 
      @click="onClick(i)">{{i}}
    </div>
    <div :class="[$style.onhover]" @click="onClick(curPage+1)"> &#10095; </div>

  </div>
</template>

<script>
export default {
  props: {
    length : Number,
    perPage: Number,
    curPage: Number
  },
  computed: {
    amount () {
      return Math.ceil(this.length / this.perPage)
    }
  },
  methods: {
    onClick (p) {
      if (p < 1 || p > this.amount) {
        return
      }
      this.$emit('paginate', p)
    }
  }
}
</script>

<style module>
.wrp {
  border: .5px solid rgba(138, 138, 138, 0.5);
  border-top: none;
  display: flex;
  justify-content: center;
  width: 348px;
  font-weight:bolder;
  line-height: 16px;
  cursor: pointer;
}
.wrp div {
  padding: 10px;
}
.active {
  color: rgb(93, 180, 164);
}
.onhover:hover {
  color: rgb(93, 180, 164);
}
</style>