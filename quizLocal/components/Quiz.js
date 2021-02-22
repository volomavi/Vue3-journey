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

<div v-if="quizOver">
  <div class="title">
    <h2>Wow {{username}}, you are...</h2>
    <h1></h1>
    <img class="image" src="" alt="">
  </div>
</div>

  `,
  data() {
    return {
      questions: [
        "What sort of personality do you have?",
        "The bus is late by more than 30 minutes, how do you react?",
        "If you were ruler for a day, what do you do?",
        "What is your idea of a perfect vacation?",
        // add more questions separated by strings
      ],
      answers: [
        ["I'm pretty calm and collected", "I get annoyed by dumdums", "I try to get along with everyone", "I think I'm funny", "I'm pretty outgoing"],
        ["I feel angry and frustrated", "I'd cry", "sit and wait, what else is there to do?", "I'd call a friend", "Try to uber"],
        ["Reven in opulence", "Not really my style", "Reform everything", "Demand just and retribution for those who wronged you"],
        ["A mountain resort", "Stroll through a historic city park", "Check out a lush green paradise", "Visit a famous world site", 'Somewhere with history and culture'],
        // add more arrays for more answers, each array corresponds to a question
      ],
      quizOver: false,
    };
  },
  methods: {
    selectAnswer() {
      this.questions.shift();
      this.answers.shift();
      if (this.questions.length === 0) {
        this.quizOver = true;
      }
    },
  },
  watch: {
    quizOver: function () {
      console.log("QUIZ OVER");
    },
  },
  props: ['username']
});
