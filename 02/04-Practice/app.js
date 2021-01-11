const app = Vue.createApp({
  data() {
    return {
      output: "",
      output2: "",
    };
  },
  methods: {
    alert() {
      alert("ice cream!");
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    confirmOutput(event) {
      this.output2 = event.target.value;
    },
  },
});

app.mount("#assignment");
