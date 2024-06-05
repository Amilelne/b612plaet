<script setup lang="ts">
import ScrollPicker from '../components/ScrollPicker.vue';
import type { Option } from '../components/ScrollPicker.vue';
import { ref } from 'vue';
import numberRange from '../utils/numberRange';

const options: Array<Array<Option>> = [];
const weightBigNums = numberRange(40, 100);
const weightBigOptions: Array<Option> = [];
weightBigNums.forEach(value => {
  weightBigOptions.push({
    label: value,
    value: value
  });
})
const weightSmallOptions: Array<Option> = [];
const weightSmallNums = numberRange(0, 9);
weightSmallNums.forEach(value => {
  weightSmallOptions.push({
    label: value,
    value: value
  })
})

options.push(weightBigOptions);
options.push(weightSmallOptions);

let weightBig = 55;
let weightSmall = 2;
const selectedOption = ref([weightBig, weightSmall]);
</script>

<template>
  <main>
    <div>
      <h1>记录今日体重</h1>
      <div>
        <span>joy</span>
        <h1>
          <span>{{ selectedOption[0] }}</span>
          <span>.</span>
          <span>{{ selectedOption[1] }}</span>
        </h1>
        <ScrollPicker :options="options" v-model="selectedOption" />
      </div>
      <!-- <div>
        <span>汪汪队长</span>
        <input type="number" name="weight" id="dog">
      </div> -->
    </div>
  </main>
</template>

<style scoped>
.weight-input {
  background-color: pink;
  border: none;
  height: 50px;
}
</style>
