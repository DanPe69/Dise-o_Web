const app = Vue.createApp({
    data() {
        return {
            terminoBusqueda: '',
            carrito: [], 
            productos: [
                {
                    id: 1,
                    name: 'Hydrangea Rosa',
                    isNew: false,
                    variants: [{ price: 71508, image: './assets/flor1.png' }]
                },
                {
                    id: 2,
                    name: 'Hydrangea Azul',
                    isNew: true,
                    variants: [{ price: 67724, image: './assets/flor1.png' }]
                },
                {
                    id: 3,
                    name: 'Hydrangea Blanca',
                    isNew: false,
                    variants: [{ price: 71508, image: './assets/flor1.png' }]
                },
                {
                    id: 4,
                    name: 'Hydrangea Premium',
                    isNew: false,
                    variants: [{ price: 85000, image: './assets/flor1.png' }]
                },
                {
                    id: 5,
                    name: 'Hydrangea Violeta',
                    isNew: false,
                    variants: [{ price: 69900, image: './assets/flor1.png' }]
                },
                {
                    id: 6,
                    name: 'Hydrangea Especial',
                    isNew: false,
                    variants: [{ price: 92000, image: './assets/flor1.png' }]
                }
            ]
        };
    },
    methods: {
        formatPrice(value) {
            if (!value) return '';
            return new Intl.NumberFormat('es-CO').format(value);
        },
        buscarProducto() {
            console.log("Buscando el producto:", this.terminoBusqueda);
        }
    }
});

app.mount('#app');