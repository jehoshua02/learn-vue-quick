<template>
  <div>
    <h1>Components</h1>
    <quiz :items="quiz"></quiz>
  </div>
</template>

<script>
import QuizComponent from './QuizComponent'
import HelloWorld from './HelloWorld'
export default {
  name: 'QuestionComponent',
  components: {
    quiz: QuizComponent,
    HelloWorld: HelloWorld
  },
  props: ['item'],
  data () {
    let id = 0
    return {
      quiz: [
        {
          id: id++,
          question: 'What is the syntax for registering a global component?',
          answer: 'Vue.component, but let\'s not do that.'
        },
        {
          id: id++,
          question: 'What are the W3C rules for custom tag names?',
          answer: 'lowercase, contain hyphen, considered good practice even though vue does not enforce it.'
        },
        {
          id: id++,
          question: 'When should you register a component?',
          answer: 'Before instantiation of root vue instance.'
        },
        {
          id: id++,
          question: 'What is the syntax for registering a component within another component (ie Local Registration)?',
          answer: 'components: {\'my-component\': MyComponent}'
        },
        {
          id: id++,
          question: 'Why do we not need to worry about DOM Template Parsing Caveats (using custom components inside elements only allow certain child elements)?',
          answer: 'Because we are using SFCs (Single File Components or .vue files)'
        },
        {
          id: id++,
          question: 'When do we not need to worry about DOM Template Parsing Caveats (using custom components inside elements only allow certain child elements)?',
          answer: 'When using SFCs (Single File Components or .vue files), inline template strings, or text/x-template.'
        },
        {
          id: id++,
          question: 'Why must data be a function?',
          answer: 'So that components don\'t share state. A function returns a fresh object for every instance.'
        },
        {
          id: id++,
          question: 'What\'s the most basic way to establish communication between parent and child components?',
          answer: 'Props down, events up.'
        },
        {
          id: id++,
          question: 'What is the syntax for declaring props in the child component?',
          answer: 'props: [\'myMessage\']'
        },
        {
          id: id++,
          question: 'What is the syntax for accessing props?',
          answer: 'Easy: In javascript: this.propName, in html: {{ propName }}'
        },
        {
          id: id++,
          question: 'What is the syntax for passing a prop to a child component?',
          answer: 'Using kebab-case. `my-message="hello!"` (literal) or `:my-message="parentMessage"` (dynamic)'
        },
        {
          id: id++,
          question: 'What if I want to pass all properties in an object to a child?',
          answer: 'v-bind="object"'
        },
        {
          id: id++,
          question: 'What if I want to pass all properties in an object as child props?',
          answer: 'v-bind="object"'
        },
        {
          id: id++,
          question: 'What is the difference between literal and dynamic props?',
          answer: 'Dynamic props are evaluated as javascript expressions.'
        },
        {
          id: id++,
          question: 'What happens when a child mutates a prop?',
          answer: 'vue will warn you in the console.'
        },
        {
          id: id++,
          question: 'Can I access props inside data?',
          answer: 'Yes!'
        },
        {
          id: id++,
          question: 'Why will mutating an object or array affect the parent state?',
          answer: 'Because objects and arrays are passed by reference.'
        },
        {
          id: id++,
          question: 'What can I do with vue prop validation?',
          answer: 'Specify type (String, Number, Boolean, Function, Object, Array, Symbol, custom function), required props, and defaults'
        },
        {
          id: id++,
          question: 'When are validators run?',
          answer: 'Before the component is instantiated.'
        },
        {
          id: id++,
          question: 'What happens when validation fails?',
          answer: 'Console warning in dev build.'
        },
        {
          id: id++,
          question: 'What are non-prop attributes and why would we need them?',
          answer: 'These are attributes that do not correspond to a component prop. They are useful when you want to pass an attribute through to the root element of our component.'
        },
        {
          id: id++,
          question: 'How does vue handle class and style attributes different than other attributes?',
          answer: 'Merge instead of replace.'
        },
        {
          id: id++,
          question: 'What is the syntax for listening to and triggering an event?',
          answer: '$on(eventName) and $emit(eventName)'
        },
        {
          id: id++,
          question: 'What is the syntax for listening to and triggering an event within a single component?',
          answer: '$on(eventName) and $emit(eventName)'
        },
        {
          id: id++,
          question: 'What is the syntax for listening to events in a parent component?',
          answer: 'v-on:eventName="handleMethodName" or @eventName="handleMethodName"'
        },
        {
          id: id++,
          question: 'What does the `.native` modifier do and when would I use it?',
          answer: 'It ensures you are listening to the native event, use when a component has hijacked a native event. Syntax: v-on:click.native="handleMethodName"'
        },
        {
          id: id++,
          question: 'What does the `.sync` modifier do and when would I use it?',
          answer: 'This `<comp :foo.sync="bar"></comp>` is syntactic sugar for this `<comp :foo="bar" @update:foo="val => bar = val"></comp>`.'
        },
        {
          id: id++,
          question: 'For what is v-model syntactic sugar?',
          answer: '`v-model="something"` is syntactic sugar for `:value="something" @input="value => { something = value }"`'
        },
        {
          id: id++,
          question: 'For what is v-model syntactic sugar?',
          answer: '`v-model="something"` is syntactic sugar for `:value="something" @input="value => { something = value }"`'
        },
        {
          id: id++,
          question: 'Can I override the prop and event names in `v-model`?',
          answer: 'Yes. In component: `model: {prop: \'checked\', event: \'change\'}`. Then `v-model="foo" value="some value"` would be equivalent to `:checked="foo" @change="value => { foo = value }" value="some value"`.'
        },
        {
          id: id++,
          question: 'What if I need non parent-child communication?',
          answer: 'In simple cases, you can use an empty vue instance as an event bus. In more complex cases, vuex.'
        },
        {
          id: id++,
          question: 'How do I compose html content into a component?',
          answer: 'Slots. Single slots. Named slots. A slot can contain fallback content too.'
        },
        {
          id: id++,
          question: 'How does scope work with slots?',
          answer: '"Everything in the parent template is compiled in parent scope; everything in the child template is compiled in child scope."'
        },
        {
          id: id++,
          question: 'What if the child component needs to pass data into the slot populated by the parent component?',
          answer: 'Scoped slot.'
        },
        {
          id: id++,
          question: 'Dynamic components?',
          answer: '<component :is="componentName"></component>'
        },
        {
          id: id++,
          question: 'What does `keep-alive` do?',
          answer: 'Use it with dynamic components to preserve state and avoid re-rendering previously rendered components.'
        },
        {
          id: id++,
          question: 'What does `keep-alive` do?',
          answer: 'Use it with dynamic components to preserve state and avoid re-rendering previously rendered components.'
        },
        {
          id: id++,
          question: 'What is the syntax for loading a component definition only when it is needed (ie Async Components)?',
          answer: 'components: {\'my-component\': () => import(\'./my-async-component\')'
        },
        {
          id: id++,
          question: 'When would I use an Advanced Async Component?',
          answer: 'When you need to control the loading and error states, delay or timeout'
        },
        {
          id: id++,
          question: 'Component naming conventions?',
          answer: 'kebab, camel, or pascal in javascript. kebab only in html. Any in SFCs (what we use, .vue files) or string templates.'
        },
        {
          id: id++,
          question: 'Component naming conventions?',
          answer: 'kebab, camel, or pascal in javascript. kebab only in html. Whatever in SFCs (what we use, .vue files) or string templates.'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
