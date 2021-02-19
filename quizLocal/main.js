const app = Vue.createApp({
  data() {
    return {
      userName: '',
      quizStarted: false
    };
  },

  methods: {
    startQuiz() {
      this.quizStarted = true
    }
  },
});
