<template>
  <div>
    <div>
      <input type="number" v-model.number="operand1" name="operand1" />
      <input type="number" v-model.number="operand2" name="operand2"/>
      = {{ result }}
    </div>

    <div class="keyboard">
      <button
        v-for="operation in operations"
        :key="operation"
        :disabled="operand1 === '' || operand2 === ''"
        :name="operation"
        @click="calculate(operation)"
      >
        {{ operation }}
      </button>
    </div>

    <div v-if="error" :class="{ error: !!error }">
      Ошибка!
      {{ error }}
    </div>

    <div class="vir_keyboard">
      <label
        ><input type="checkbox" v-model="checked" />
        Отобразить экранную клавиатуру
      </label>
      <br />
      <br />
      <div v-show="checked">
        <button v-for="btn in 10" :key="btn" @click="enterNum(btn - 1)" :name="btn-1">
          {{ btn - 1 }}
        </button>
        <button @click="backspace" name="E">←</button>
        <div>
          <br />
          <label>
            <input type="radio" id="one" value="operand1" v-model="picked" name="oper1"/>
            Операнд 1
          </label>
          <label>
            <input type="radio" id="two" value="operand2" v-model="picked" name="oper2"/>
            Операнд 2
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      error: "",
      operations: ["+", "-", "*", "/", "**", "%"],
      checked: false,
      picked: "operand1"
    };
  },
  methods: {
    add() {
      this.result = +this.operand1 + +this.operand2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      const { operand1, operand2 } = this;
      if (+operand2 === 0) {
        this.error = "Делить на 0 нельзя!";
      } else {
        this.result = operand1 / operand2;
      }
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    exp() {
      this.result = this.operand1 ** this.operand2;
    },
    intDiv() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "**":
          this.exp();
          break;
        case "%":
          this.intDiv();
          break;
      }
    },
    enterNum(btn) {
      if (this.picked === "operand1") {
        this.operand1 += String(btn);
        console.log(this.operand1)
      } else {
        this.operand2 += String(btn);
      }
    },
    backspace() {
      if (this.picked === "operand1") {
        this.operand1 = this.operand1.slice(0, this.operand1.length - 1);
      } else {
        this.operand2 = this.operand2.slice(0, this.operand2.length - 1);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
.vir_keyboard {
  margin-top: 30px;
}
</style>