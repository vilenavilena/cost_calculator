export default {
    install (Vue) {
      if (this.installed) {
        return
      }
      this.installed = true
  
      Vue.prototype.$modal = {
        EventBus: new Vue(),
  
        show (name, event, index) {
          this.EventBus.$emit('show', { name, event, index })
        },
        close () {
          this.EventBus.$emit('close')
        }
      }
    }
  }