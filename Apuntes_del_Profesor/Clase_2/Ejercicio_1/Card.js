export default {
  name: "Card",
  props: {
    title: String,
    description: {
      type: String,
      default: "Sin descripción"
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/300x150"
    }
  },
  template: `
    <div class="card">
      <img :src="image" alt="Card image" class="card-img" />
      <div class="card-content">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button @click="$emit('onAction')">Ver más</button>
      </div>
    </div>
  `,
};
