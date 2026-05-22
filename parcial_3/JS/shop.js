const app = Vue.createApp({
    data() {
        return {
            brand: 'Flor',
            productName: 'Flores',
            sizes: [
                '1.01 fl oz (paquete de 1)', 
                '3.71 Fl Oz (Pack of 1)'
            ],
            
            variants: [
                { 
                    id: 1, 
                    colorName: 'k', 
                    price: 71508, 
                    oldPrice: 82480, 
                    discount: 13, 
                    thumb: './assets/imagen1.jpg', 
                    image: './assets/imagen1.jpg' 
                },
                { 
                    id: 2, 
                    colorName: '5', 
                    price: 67724, 
                    oldPrice: 82480, 
                    discount: 18, 
                    thumb: './assets/imagen.jpg', // Miniatura variante 2
                    image: './assets/imagen.jpg'  // Imagen grande variante 2
                }
            ],
            selectedSize: '1.01 fl oz (paquete de 1)',
            selectedVariant: null 
        };
    },
    created() {
        
        this.selectedVariant = this.variants[1];
    },
    methods: {
        cambiarTamano(size) {
            this.selectedSize = size;
        },
        seleccionarVariante(variant) {
            this.selectedVariant = variant;
        },
        formatPrice(value) {
            if (!value) return '';
            return new Intl.NumberFormat('es-CO').format(value);
        }
    }
});


app.mount('#app');