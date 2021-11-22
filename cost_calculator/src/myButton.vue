<template>
    <div>
      <button @click="onClick">Clicked {{ counter }}</button>
    </div>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
    onMouseOver(){
      console.log("hovered Button")
    }
  },
  // Эпоха создания
  beforeCreate() {
    console.log('beforeCreate')
  },
  created(){
  console.log('created')
  },
  // Эпоха монтирования
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
    const btn = this.$el.querySelector('button')
    if (!btn) return
    btn.addEventListener('mouseover', this.onMouseOver)
  },
  beforeUpdate(){
      console.log('beforeUpdate', this.counter)
  },
  updated(){
      console.log('beforeUpdate', this.counter)
  },
  beforeDestroy(){
    console.log('beforeDestroy')
    const btn = this.$el.querySelector('button')
    if (!btn) return
    btn.removeEventListener('mouseover', this.onMouseOver)
  },
  destroyed(){
    console.log('destroyed')
    console.log('destroyed', this.counter)
  }
};
</script>