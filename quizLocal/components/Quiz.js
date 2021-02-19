app.component("quiz", {
  props: {},

  template:
    /*html*/
    `
<div v-if="!quizOver">
    
<div class="title">
  <h2>{{questions[0]}}</h2>
</div>
<ul>
  <li class="answer" @click="selectAnswer" v-for="answer in answers[0]">{{answer}}</li>
</ul>
</div>

  `,
  data() {
    return {
      questions: ["q1", "q2", "q3", "q4"],
      answers: [
        ["a1", "a2", "a3", "a4"],
        ["a5", "a6", "a7", "a8"],
        ["a9", "a10", "a11", "a12"],
        ["a13", "a14", "a15", "a16"],
      ],
      quizOver: false
    };
  },
  methods: {
    selectAnswer() {
      this.questions.shift();
      this.answers.shift();
      if (this.questions.length === 0) {
        this.quizOver = true
      }
    },
  },
  watch: {
    quizOver: function(){
      console.log('QUIZ OVER')
    }
  }
});
