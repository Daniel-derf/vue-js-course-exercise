const app = Vue.createApp({
  data() {
    return {
      name: "Daniel",
      age: 20,
      ageIn5Years: null,
      randNum: null,
      imageUrl: null,
      isLoading: true,
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
    async fetchImage() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        this.imageUrl = data.message;
      } catch (error) {
        console.error(error);
        alert("erro ao fazer o fetch da img");
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.ageIn5Years = this.getAgeIn5Years();
    this.randNum = this.outputNum();
    this.imageUrl = this.fetchImage();
  },
});

app.mount("#assignment");
