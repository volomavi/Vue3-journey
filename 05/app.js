const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


//vue's reactivity is based on wrapping everything in proxies

//can create lots of hooks to catch vue in all of its
//beforeCreate, created, beforeMount, mounted, beforeUpdate, updated etc.