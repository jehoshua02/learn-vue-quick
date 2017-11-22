<template>
  <div>
    <question v-for="item in items" :item="item" :key="item.id"></question>
  </div>
</template>

<script>
import QuestionComponent from './QuestionComponent'
export default {
  name: 'QuestionComponent',
  props: ['items'],
  components: {
    question: QuestionComponent
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
