const app = Vue.createApp({
  data() {
    return {
      name: "Bob",
      age: 23,
      iceLink:
        "https://www.saveur.com/resizer/r_NsZM-0Vmk8Ii6APBzUEfsIANY=/400x500/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/6U5RCBTPHKMZNVG5L3FKKSCIOU.jpg",
    };
  },
  methods: {
    yourAgePlus5() {
      return this.age + 5;
    },
    ranNum() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
