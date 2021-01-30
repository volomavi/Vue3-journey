<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input v-model="name" />
    </div>
    <div>
      <label>Age</label>
      <input v-model="age" />
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
  export default {
    emits: ['add-info'],
    data() {
      return {
        name: "",
        age: "",
      };
    },
    methods: {
      submitData(){
        console.log('boom! data'),

        this.$emit(
          'add-info',
          this.name,
          this.age,
        )
      }
    },
  };
</script>
