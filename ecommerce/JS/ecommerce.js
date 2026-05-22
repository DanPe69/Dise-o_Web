const app = Vue.createApp({
    data() {
        return {
            // Inventario de zapatos basado en la sección "Buy Best Quality Shoes"
            productos: [
                { 
                    nombre: "Women's Top Sneakers", 
                    precio: 85.00, 
                    imagenLocal: "zapato1.jpg" // Nombre del archivo en tu PC
                },
                { 
                    nombre: "Men's Converse Shoe", 
                    precio: 55.00, 
                    imagenLocal: "zapato2.jpg" 
                },
                { 
                    nombre: "Kids Summer Converse", 
                    precio: 65.00, 
                    imagenLocal: "zapato3.jpg" 
                },
                { 
                    nombre: "Children Sport Shoes", 
                    precio: 70.00, 
                    imagenLocal: "zapato4.jpg" 
                }
            ],
            // Productos agregados por el comprador
            carrito: []
        };
    },
    computed: {
        // Una propiedad computada calcula el total automáticamente cuando cambia el carrito
        totalCarrito() {
            let acumulado = 0;
            for(let i = 0; i < this.carrito.length; i++) {
                acumulado += this.carrito[i].precio;
            }
            return acumulado;
        }
    },
    methods: {
        agregarAlCarrito(productoClonado) {
            this.carrito.push({
                nombre: productoClonado.nombre,
                precio: productoClonado.precio
            });
        },
        quitarDelCarrito(index) {
            this.carrito.splice(index, 1);
        }
    }
});

app.mount('#app');