<template>
  <h2>Name: {{ name }}</h2>
  <h3>Age: {{ age }}</h3>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
      },
      age: {
        type: String,
      },
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
