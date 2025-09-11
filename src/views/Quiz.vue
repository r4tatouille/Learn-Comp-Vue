<script setup>
import QuizContent from "@/components/QuizContent.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import { useRoute } from "vue-router";
import quisez from "../data/quizes.json";
import { ref, watch } from "vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quisez.find((q) => q.id === quizId);

const currenQuestionsindex = ref(0);
const questionPage = ref(
  `${currenQuestionsindex.value + 1} / ${quiz.questions.length}`
);

watch(
  () => currenQuestionsindex.value,
  () => {}
);
</script>
<template>
  <QuizHeader></QuizHeader>
  <QuizContent :question="quiz.questions[currenQuestionsindex]"></QuizContent>
  <button @click="currenQuestionsindex++">Soal Selanjutnya</button>
</template>

<style scoped></style>
