const app = Vue.createApp({
  data() {
    return {
      name: "Daniel",
      age: 20,
      imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
