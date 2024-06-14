<script setup lang="ts">
import { ref } from 'vue';

const num1 = ref();
const num2 = ref();

const BaGuaMap = {
  0: {
    num: 0,
    name: '坤'
  },
  1: {
    num: 4,
    name: '震'
  },
  2: {
    num: 3,
    name: '离'
  },
  3: {
    num: 2,
    name: '兑'
  },
  4: {
    num: 7,
    name: '艮'
  },
  5: {
    num: 6,
    name: '坎'
  },
  6: {
    num: 5,
    name: '巽'
  },
  7: {
    num: 7,
    name: '乾'
  }
}

const BaGua = ['坤', '乾', '兑', '离', '震', '巽', '坎', '艮'];

function generatePlum() {
  console.log(num1.value, num2.value);
  if (validateNum()) {
    const ShangGua = num1.value % 8;
    const XiaGua = num2.value % 8;
    const BianYao = (num1.value + num2.value) % 6;
    console.log(ShangGua, XiaGua, BianYao);
    showGua(ShangGua, XiaGua)
    BianGua(ShangGua, XiaGua, BianYao);
  }
}

function validateNum() {
  if (num1.value > 0 && num2.value > 0) {
    return true;
  }
  window.alert('请输入大于0的数字');
  return false;
}

function showGua(ShangGua, XiaGua) {
  console.log(`上卦: ${BaGua[ShangGua]} 下卦：${BaGua[XiaGua]}`);
}

function BianGua(ShangGua, XiaGua, BianYao) {
  let guaByte;
  let bianGuaPartialByte;
  if (BianYao >= 1 && BianYao <= 3) {
    guaByte = getGuaByte(XiaGua);
    bianGuaPartialByte = guaByte ^ (1 << (BianYao - 1));
    const shangBianGua = BaGuaMap[bianGuaPartialByte].name;
    console.log(`上卦: ${shangBianGua} 下卦：${BaGua[XiaGua]}`);
  } else {
    guaByte = getGuaByte(ShangGua);
    if (BianYao === 0) {
      bianGuaPartialByte = guaByte ^ (1 << 2);
    } else {
      bianGuaPartialByte = guaByte ^ (1 << (BianYao - 4));
    }
    const xiaBianGua = BaGuaMap[bianGuaPartialByte].name;
    console.log(`上卦: ${BaGua[ShangGua]} 下卦：${xiaBianGua}`);
  }
}

function getGuaByte(guaNum) {
  let guaByte;
  for (const [key, value] of Object.entries(BaGuaMap)) {
    if (value.num === guaNum) {
      guaByte = key;
    }
  }
  console.log("xxx guaByte", guaByte);
  return guaByte;
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
