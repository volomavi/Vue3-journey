const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    display() {
      setTimeout(() => {
        this.result = 0;
        console.log('refreshing')
      }, 5000);
    },
  },
  computed: {
    display() {
      if (this.result < 37) {
        return "Not there yet";
      }
      if (this.result > 37) {
        return "Too much!";
      }
    },
  },
  methods: {
    add(number) {
      this.result = this.result + number;
    },
  },
});

app.mount("#assignment");
