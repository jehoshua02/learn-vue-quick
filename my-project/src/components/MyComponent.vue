<template>
  <div>
    <div>{{ message }}</div>
    <div>{{ html }}</div>
    <div v-html="html"></div>
    <div :id="id">Element with some id</div>
    <div v-if="show">Show me</div>
    <div id="example">{{ reversedMessage }}</div>
    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    return {
      message: 'Hello World',
      html: '<h1>This is HTML</h1>',
      id: 'some-id',
      show: false,
      firstName: 'Josh',
      lastName: 'Stoutenburg',
      ok: false
    }
  },
  computed: {
    reversedMessage () {
      return this.message.split('').reverse().join('')
    },
    fullName: {
      // getter
      get () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
