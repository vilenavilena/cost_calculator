<template>
  <div :class="[$style.wrapper]" :style="foo()" v-if="shown">
    <div :class="[$style.content]">
      <transition name='fade'>
        <EditMenu 
          :index="index" 
          :even="even" 
          v-if="shown === 'EditMenu'" 
        />
      </transition>
      <transition name='fade'>
        <EditForm 
          :index="index" 
          v-if="shown === 'EditForm'"
        />
      </transition>

    </div>
  </div>
</template>

<script>
import EditMenu from '../EditMenu.vue'
import EditForm from '../EditForm.vue'

export default {
  components: {
    EditMenu,
    EditForm,
  },
  data () {
    return {
      shown: '',
      index: 0,
      even: {}
    }
  },
  props: {
    name: String
  },
  methods: {
    onClose () {
      this.shown = ''
    },
    onShow ({ name, event, index}) {
      this.index = index
      this.even = event
      this.shown = name
    },
    foo () {
      let l,t,w,h
      if (this.shown === 'EditMenu') {
        l = this.even.clientX - 83
        t = this.even.clientY + 12
        w = 130
        h = 70
      } else if (this.shown === 'EditForm') {
        l = 395, t = 255, w = 376, h = 229
      }
      return {
          'left': l + "px",
          'top': t + "px",
          'width': w + 'px',
          "height": h +'px'
      }

    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('close', this.onClose)
  }
}
</script>

<style module >
.wrapper {
  position: absolute;
  background-color: white;
  box-shadow: 0 0 25px rgb(0 0 0 / 62%);
  border-radius: 5px;
  z-index: 10;
  }
.content {
  position: relative;
  }
</style>