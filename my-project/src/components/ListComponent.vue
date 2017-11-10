<template>
  <div>
    <h1>List Rendering</h1>
    <a href="https://vuejs.org/v2/guide/list.html">Docs</a>

    <h2>Quiz</h2>
    <question v-for="item in quiz" :item="item" :key="item.id"></question>

    <h2>Example 1</h2>
    <p>A basic list.</p>
    <ul>
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>

    <h2>Exmaple 2</h2>
    <p>Parent scope and index.</p>
    <ul>
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>

    <h2>Exmaple 3</h2>
    <p>Using `of` instead of `in` (stupid).</p>
    <ul>
      <li v-for="item of items">
        {{ item.message }}
      </li>
    </ul>

    <h2>Exmaple 3</h2>
    <p>Iterate through object properties.</p>
    <ul>
      <li v-for="value in object">
        {{ value }}
      </li>
    </ul>

    <h2>Exmaple 4</h2>
    <p>Iterate through object properties, with keys.</p>
    <ul>
      <li v-for="(value, key) in object">
        {{ key }}: {{ value }}
      </li>
    </ul>

    <h2>Exmaple 5</h2>
    <p>Iterate through object properties, with keys and index.</p>
    <ul>
      <li v-for="(value, key, index) in object">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>

    <h2>Example 6</h2>
    <p>Using key.</p>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.message }}
      </li>
    </ul>

  </div>
</template>

<script>
import QuestionComponent from './QuestionComponent'
let id = 0
export default {
  name: 'MyComponent',
  components: {
    question: QuestionComponent
  },
  data () {
    return {
      parentMessage: 'Parent',
      items: [
        { id: 1, message: 'One Item' },
        { id: 2, message: 'Two Items' },
        { id: 3, message: 'Three Items' }
      ],
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      quiz: [
        {
          id: id++,
          question: 'What is the basic syntax for a list?',
          answer: 'v-for="item in items"'
        },
        {
          id: id++,
          question: 'Can parent scope be accessed from inside a list iteration?',
          answer: 'Yes.'
        },
        {
          id: id++,
          question: 'What is the syntax for using list index?',
          answer: 'v-for="(item, index) in items"'
        },
        {
          id: id++,
          question: 'What is the syntax for iterating over object properites?',
          answer: 'v-for="value in object"'
        },
        {
          id: id++,
          question: 'What is the syntax for iterating over object properites, with keys?',
          answer: 'v-for="(value, key) in object"'
        },
        {
          id: id++,
          question: 'What is the syntax for iterating over object properites, with keys and index?',
          answer: 'v-for="(value, key, index) in object"'
        },
        {
          id: id++,
          question: 'What is the syntax for list key?',
          answer: ':key="item.id"'
        },
        {
          id: id++,
          question: 'What is the default rendering strategy vue uses for lists?',
          answer: '"in-place patch"'
        },
        {
          id: id++,
          question: 'How does vue change it\'s rendering strategy when a key is specified?',
          answer: '"reuse and reorder existing elements"'
        },
        {
          id: id++,
          question: 'When is it okay to rely on the default list render strategy?',
          answer: '"... when your list render output does not rely on child component state or temporary DOM state (e.g. form input values)." and when "you are intentionally relying on the default behavior for performance gains."'
        },
        {
          id: id++,
          question: 'When should we use key?',
          answer: '"It is recommended to provide a key with v-for whenever possible, unless the iterated DOM content is simple, or you are intentionally relying on the default behavior for performance gains."'
        },
        {
          id: id++,
          question: 'What array methods does vue wrap and why?',
          answer: 'Any method that mutates the array (push, pop, shift, unshift, splice, sort, and reverse), for change detection.'
        },
        {
          id: id++,
          question: 'How do we trigger change detection for non-mutating methods (filter, concat, slice)?',
          answer: 'Replace the array.'
        },
        {
          id: id++,
          question: 'Isn\'t that inefficient?',
          answer: 'No. Vue is smart about DOM updates.'
        },
        {
          id: id++,
          question: 'What kind of array changes can vue not detect?',
          answer: 'Setting item with index: this.items[key] = value. Modifying length: this.items.length = wat (who would even???)'
        },
        {
          id: id++,
          question: 'So how do I update an item by index?',
          answer: 'Vue.set(this.items, index, value) or this.items.splice(index, 1, value)'
        },
        {
          id: id++,
          question: 'What kind of object changes can vue not detect?',
          answer: 'Adding or deleting properties.'
        },
        {
          id: id++,
          question: 'So how do I set an object property then?',
          answer: 'Vue.set(this.object, key, value), or this.$set(this.object, key, value), or Object.assign({}, this.object, newProps)'
        },
        {
          id: id++,
          question: 'How can I filter items in the list?',
          answer: 'computed property (preferred) or methods (when in nested loops for example)'
        },
        {
          id: id++,
          question: 'Can v-for do ranges?',
          answer: 'v-for="n in 100"'
        },
        {
          id: id++,
          question: 'Can v-for be used with <template>?',
          answer: 'Yes.'
        },
        {
          id: id++,
          question: 'What happens when you use v-if and v-for on the same element?',
          answer: 'v-for has higher priority, so it evaluates v-if for each item. Move v-if to a wrapping element if that\'s not what you want.'
        },
        {
          id: id++,
          question: 'How do we use v-for with custom components?',
          answer: 'Same. Use props to pass loop variables to component.'
        },
        {
          id: id++,
          question: 'When do we need to use is="my-component"?',
          answer: 'When using a custom component inside another element would cause a browser parsing error (example: only <li> is valid inside <ul>).'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
