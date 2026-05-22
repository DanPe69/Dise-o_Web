import Card from "./Card.js";

const app = Vue.createApp({
  components: { Card },
  data() {
    return {};
  },
  methods: {
    handleCardClick() {
      alert("Hiciste clic en la tarjeta 🎉");
    }
  },
  template: `
    <div style="display:flex;flex-direction:column;align-items:center;padding:30px;">
      <h1>Página Principal</h1>
      <Card 
        title="Mi primera tarjeta"
        description="Esta es una tarjeta de ejemplo creada como componente."
        image="https://picsum.photos/400/200"
        @onAction="handleCardClick"
      />
      <Card 
        title="Mi primera tarjeta"
        description="Esta es una tarjeta de ejemplo creada como componente."
        image="./assets/img/Taberna_1.jpg"
        @onAction="handleCardClick"
      />
    </div>
  `
});

app.mount("#app");
