<template>
  <div :class="[$style.wrapper]">
    <button :class="[$style.btn]" @click="onEdit($event,index)" >🖉 &nbsp; Редактировать</button>
    <i class="fa fa-pencil" aria-hidden="true"></i>
    <button :class="[$style.btn]" @click="onDelete">🗑 &nbsp;&nbsp; Удалить</button>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  props: {
    index: Number,
    even: PointerEvent
  },
  methods: {
    ...mapMutations (['dellPaymentListData']),

    onDelete () {
      this.dellPaymentListData(this.index)
      this.$modal.close()
    },
    onEdit (e, index) {
      this.$modal.show('EditForm', e, index)
    }
  },
}
</script>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  background:#fff;
  padding: 8px 0 8px;
}
.wrapper::before {
  content: '';
    position: absolute;
    top: -10px;
    right: 32px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;

}
.btn {
  background:#fff;
  border: none;
  padding: 6px;
  text-align: start;
  cursor: pointer;
}
.btn:hover {
  background: rgb(228, 228, 228);
  text-decoration-line: underline
}

</style>