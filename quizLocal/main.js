const app = Vue.createApp({
  data() {
    return {
      username: '',
      quizStarted: false
    };
  },

  methods: {
    startQuiz() {
      this.quizStarted = true
    }
  },
  provide() {
    return {
    }
  }
});
