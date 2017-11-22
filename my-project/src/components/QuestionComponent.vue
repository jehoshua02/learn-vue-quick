<template>
  <div class="question-wrapper">
    <div class="question"><strong>Question:</strong> {{ item.question }}</div>
    <div class="answer" v-if="showAnswer"><strong>Answer:</strong> {{ item.answer }}</div>
    <button class="answer" type="button" v-if="!showAnswer" @click="showAnswer = true">Show Answer</button>
  </div>
</template>

<script>
export default {
  name: 'QuestionComponent',
  props: ['item'],
  data () {
    return {
      showAnswer: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question-wrapper {
  padding: 100px 0;
}
.answer {
  margin-top: 10px;
  margin-left: 15px;
}
button.answer {
  padding: 10px 20px;
  border-radius: 5px;
  border: 0 none;
  background: green;
  color: white;
  font-size: 1.1rem;

}
</style>
