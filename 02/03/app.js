const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    //   name(value) {
    //     if (value === "") {
    //       this.fullname = "";
    //     } else {
    //       this.fullname = value + " " + this.lastName;
    //     }
    //   },
    //   lastName(value) {
    //     if (value === "") {
    //       this.fullname = "";
    //     } else {
    //       this.fullname = this.name + " " + value;
    //     }
    //   },
  },
  computed: {
    fullname() {
      console.log("hello");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullname() {},
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
