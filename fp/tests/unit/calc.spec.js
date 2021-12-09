// import 'regenerator-runtime/runtime'
import Calculator from '@/components/Calculator.vue'
import { mount } from '@vue/test-utils'

describe('Calculator test', () => {
  it('Test operation +', () => {
    const wrapper = mount(Calculator)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('7')
    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const operationBtn = wrapper.find('button[name="+"]')
    operationBtn.trigger('click')

    expect(wrapper.vm.result).toBe(9)
  }),

    it('Test operation -', () => {
      const wrapper = mount(Calculator)

      const operand1 = wrapper.find('input[name=operand1]')
      operand1.setValue('7')
      const operand2 = wrapper.find('input[name=operand2]')
      operand2.setValue('2')

      const operationBtn = wrapper.find('button[name="-"]')
      operationBtn.trigger('click')

      expect(wrapper.vm.result).toBe(5)
    })

  it('Test operation *', () => {
    const wrapper = mount(Calculator)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('7')
    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const operationBtn = wrapper.find('button[name="*"]')
    operationBtn.trigger('click')

    expect(wrapper.vm.result).toBe(14)
  })

  it('Test operation /', () => {
    const wrapper = mount(Calculator)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('8')
    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const operationBtn = wrapper.find('button[name="/"]')
    operationBtn.trigger('click')

    expect(wrapper.vm.result).toBe(4)
  })

  it('Test operation **', () => {
    const wrapper = mount(Calculator)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('7')
    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const operationBtn = wrapper.find('button[name="**"]')
    operationBtn.trigger('click')

    expect(wrapper.vm.result).toBe(49)
  })

  it('Test operation %', () => {
    const wrapper = mount(Calculator)

    const operand1 = wrapper.find('input[name=operand1]')
    operand1.setValue('7')
    const operand2 = wrapper.find('input[name=operand2]')
    operand2.setValue('2')

    const operationBtn = wrapper.find('button[name="%"]')
    operationBtn.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  it('Test vKey operand2', () => {
    const wrapper = mount(Calculator)
    const oper1 = wrapper.find('input[name="oper1"]')
    const oper2 = wrapper.find('input[name="oper2"]')
    oper2.trigger('click')
    const vkey0 = wrapper.find('button[name="0"]')
    vkey0.trigger('click')
    const vkeyE = wrapper.find('button[name="E"]')
    vkeyE.trigger('click')
    vkeyE.trigger('click')
    vkey0.trigger('click')
    const vkey1 = wrapper.find('button[name="1"]')
    vkey1.trigger('click')
    const vkey2 = wrapper.find('button[name="2"]')
    vkey2.trigger('click')
    const vkey3 = wrapper.find('button[name="3"]')
    vkey3.trigger('click')
    const vkey4 = wrapper.find('button[name="4"]')
    vkey4.trigger('click')
    const vkey5 = wrapper.find('button[name="5"]')
    vkey5.trigger('click')
    const vkey6 = wrapper.find('button[name="6"]')
    vkey6.trigger('click')
    const vkey7 = wrapper.find('button[name="7"]')
    vkey7.trigger('click')
    const vkey8 = wrapper.find('button[name="8"]')
    vkey8.trigger('click')
    const vkey9 = wrapper.find('button[name="9"]')
    vkey9.trigger('click')
    vkeyE.trigger('click')
    expect(wrapper.vm.operand2).toBe('012345678')
  })

  it('Test vKey operand1', () => {
    const wrapper = mount(Calculator)
    const oper1 = wrapper.find('input[name="oper1"]')
    oper1.trigger('click')
    const vkey0 = wrapper.find('button[name="0"]')
    vkey0.trigger('click')
    const vkeyE = wrapper.find('button[name="E"]')
    vkeyE.trigger('click')
    vkeyE.trigger('click')
    vkey0.trigger('click')
    const vkey1 = wrapper.find('button[name="1"]')
    vkey1.trigger('click')
    const vkey2 = wrapper.find('button[name="2"]')
    vkey2.trigger('click')
    const vkey3 = wrapper.find('button[name="3"]')
    vkey3.trigger('click')
    const vkey4 = wrapper.find('button[name="4"]')
    vkey4.trigger('click')
    const vkey5 = wrapper.find('button[name="5"]')
    vkey5.trigger('click')
    const vkey6 = wrapper.find('button[name="6"]')
    vkey6.trigger('click')
    const vkey7 = wrapper.find('button[name="7"]')
    vkey7.trigger('click')
    const vkey8 = wrapper.find('button[name="8"]')
    vkey8.trigger('click')
    const vkey9 = wrapper.find('button[name="9"]')
    vkey9.trigger('click')
    vkeyE.trigger('click')

    expect(wrapper.vm.operand1).toBe('012345678')
  })

})