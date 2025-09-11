<script setup>
import { defineProps } from "vue";

const { question } = defineProps(["question"]);
</script>
<template>
  <section id="question-container">
    <h1 class="question-title">{{ question.text }}</h1>
  </section>
  <section id="option-container">
    <div class="option" v-for="option in question.answers" :key="option.id">
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">{{ option.text }}</div>
    </div>
  </section>
</template>

<style scoped>
#question-container {
  margin-top: 30px;
}

.question-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
}

#option-container {
  margin: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.option {
  display: flex;
  align-items: center;
  margin: 20px;
  cursor: pointer;
}

.option-label {
  font-size: 20px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
  background-color: bisque;
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
}
</style>
