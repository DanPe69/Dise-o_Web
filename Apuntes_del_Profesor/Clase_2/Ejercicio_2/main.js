// Componente Padre (muestra nav + imagen dinámica)
const Parent = {
  template: `
    <div style="text-align:center;">
      <h2>Ejemplo con Route Parent</h2>
      <nav style="margin-bottom:20px;">
        <router-link to="/images/img1" style="margin:0 10px;">Imagen 1</router-link>
        <router-link to="/images/img2" style="margin:0 10px;">Imagen 2</router-link>
        <router-link to="/images/img3" style="margin:0 10px;">Imagen 3</router-link>
      </nav>
      <router-view />
    </div>
  `
};

// Hijos: cada uno renderiza una imagen distinta
const Img1 = { template: `<img src="https://picsum.photos/id/1015/400/200" alt="Imagen 1">` };
const Img2 = { template: `<img src="https://picsum.photos/id/1025/400/200" alt="Imagen 2">` };
const Img3 = { template: `<img src="https://picsum.photos/id/1035/400/200" alt="Imagen 3">` };

// Configuración de rutas
const routes = [
  {
    path: "/images",
    component: Parent,
    children: [
      { path: "img1", component: Img1 },
      { path: "img2", component: Img2 },
      { path: "img3", component: Img3 }
    ]
  }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = Vue.createApp({});
app.use(router);
app.mount("#app");
