<script setup lang="ts">
import { ref } from 'vue';

const num1 = ref();
const num2 = ref();
function generatePlum() {
  console.log(num1.value, num2.value);
  if (validateNum()) {
    const ShangGua = num1.value % 8;
    const XiaGua = num2.value % 8;
    const BianYao = (num1.value + num2.value) % 6;
    console.log(ShangGua, XiaGua, BianYao);
    showGua(ShangGua, XiaGua, BianYao)
  }
}

function validateNum() {
  if (num1.value > 0 && num2.value > 0) {
    return true;
  }
  window.alert('请输入大于0的数字');
  return false;
}

function showGua(ShangGua, XiaGua, BianYao) {
  const BaGua = ['坤', '乾', '兑', '离', '震', '巽', '坎', '艮'];

  console.log(`上卦: ${BaGua[ShangGua]} 下卦：${BaGua[XiaGua]}`);
}
</script>


<template>
  <main>
    <div>
      <h1>梅花卦</h1>
      <div>
        <h2 class="inputTitle">请输入两个数字</h2>
        <div>
          <div class="inputWrap">
            <input type="number" class="number-input" v-model="num1" />
          </div>
          <div class="inputWrap">
            <input type="number" class="number-input" v-model="num2" />
          </div>
          <button class="generateButton" @click="generatePlum">生成卦象</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.number-input {
  background-color: pink;
  border: none;
  height: 50px;
  font-size: 24px;
  outline: none;
}

.inputWrap {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.inputTitle {
  text-align: center;
}

.generateButton {
  padding: 20px 16px;
  border: none;
  border-radius: 8px;
  width: 100%;
}
</style>
