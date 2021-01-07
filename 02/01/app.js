const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Eat vanilla ice cream",
      courseGoalB: "Eat chocolate ice cream",

      vueLink: "https://v3.vuejs.org/guide/installation.html#cdn",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
