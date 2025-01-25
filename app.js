const app = Vue.createApp({
  data() {
    return {
      name: "Daniel",
      age: 20,
      ageIn5Years: null,
      randNum: null,
    };
  },
  methods: {
    outputNum() {
      const randomNumber = Math.random();
      return randomNumber;
    },
    getAgeIn5Years() {
      const newAge = this.age + 5;

      console.log(this.age);

      return newAge;
    },
  },
  created() {
    this.ageIn5Years = this.getAgeIn5Years();
    this.randNum = this.outputNum();
  },
});

app.mount("#assignment");
