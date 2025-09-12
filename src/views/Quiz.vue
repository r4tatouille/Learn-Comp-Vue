<script setup>
import QuizContent from "@/components/QuizContent.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import { useRoute } from "vue-router";
import quisez from "../data/quizes.json";
import { computed, ref, watch } from "vue";
import QuizResult from "@/components/QuizResult.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quisez.find((q) => q.id === quizId);

const numberOfCorrectAnswer = ref(0);
const currenQuestionsindex = ref(0);
const showResult = ref(false);

const questionPage = computed(() => {
  return `${currenQuestionsindex.value + 1} / ${quiz.questions.length}`;
});

const barPercentage = computed(() => {
  return `${((currenQuestionsindex.value + 1) / quiz.questions.length) * 100}%`;
});

function onSelectOption(option) {
  if (option.correct) {
    numberOfCorrectAnswer.value++;
  }

  if (currenQuestionsindex.value === quiz.questions.length - 1) {
    showResult.value = true;
    return;
  }

  currenQuestionsindex.value++;
}
// const questionPage = ref(
//   `${currenQuestionsindex.value + 1} / ${quiz.questions.length}`
// );

// watch(
//   () => currenQuestionsindex.value,
//   () => {
//     questionPage.value = `${currenQuestionsindex.value + 1} / ${
//       quiz.questions.length
//     }
//     `;
//   }
// );
</script>
<template>
  <QuizHeader
    :questionPage="questionPage"
    :barPercentage="barPercentage"
  ></QuizHeader>
  <QuizContent
    v-if="!showResult"
    :question="quiz.questions[currenQuestionsindex]"
    @selectOption="onSelectOption"
  ></QuizContent>
  <QuizResult
    v-else
    :quizQuestionsLength="quiz.questions.length"
    :numberOfCorrectAnswer="numberOfCorrectAnswer"
  ></QuizResult>
  <div>
    <!-- Disable Button for testing page to next page view -->

    <!-- <button
      @click="currenQuestionsindex++"
      :disabled="currenQuestionsindex === quiz.questions.length - 1"
    >
      Next
    </button> -->
  </div>
</template>

<style scoped></style>

<button></button>
