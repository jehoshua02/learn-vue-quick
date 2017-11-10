<template>
  <div>
    <div class="question"><strong>Question:</strong> {{ item.question }}</div>
    <div class="answer" v-if="showAnswer"><strong>Answer:</strong> {{ item.answer }}</div>
    <button v-if="!showAnswer" @click="showAnswer = true">Show Answer</button>
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
.question {
  margin-top: 10px;
}
.answer {
  margin-left: 5px;
}
</style>
