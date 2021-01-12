const app = Vue.createApp({
  data() {
    return {
      style1: "",
      // style2: "",
      flip: true,
      color: '',
    };
  },
  computed: {
    pClasses(){
      return {
        user1: this.style1 === 'user1',
        user2: this.style1 === 'user2',
        visible: this.flip,
        hidden: !this.flip
      }
    }
  },
  methods: {
    toggle() {
      this.flip = !this.flip;
      // if (this.flip) {
      //   this.style2 = 'visible'
      // } else {
      //   this.style2 = 'hidden'
      // }
    },
  },
});

app.mount("#assignment");
