<template>
  <user-data @add-info="addInfo"></user-data>
  <active-user 
  :name="name" 
  :age="age">
  </active-user>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        age: null
      };
    },
    methods: {
      addInfo(name, age) {
        this.name = name
        this.age = age
      },
    },
  };
</script>
