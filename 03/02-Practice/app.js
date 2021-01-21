const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: '',
      hidden: false,
    }
  },
  computed: {
    buttonText(){
      return this.hidden ? 'Show List' : 'Hide List'
    }
  },
  methods: {
    addTask(){
      this.tasks.push(this.enteredTask)
    },
    showHide(){
      this.hidden = !this.hidden
    }
  },
})

app.mount('#assignment')