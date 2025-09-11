<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { quiz } = defineProps(["quiz"]);

function goToQuiz() {
  router.push({ name: "quiz", params: { id: quiz.id } });
}
</script>

<template>
  <div class="card" @click="goToQuiz">
    <img :src="quiz.img" alt="quiz.title" />
    <div class="card-text">
      <h2>{{ quiz.title }}</h2>
      <p>{{ quiz.questions.length }} Questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 270px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}

.card-text {
  padding: 0 15px;
  font-weight: bold;
}
</style>
