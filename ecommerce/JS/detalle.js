const app = Vue.createApp({
    data() {
        return {
            // Contador del carrito
            unidadesEnCarrito: 0,
            
            // Modelo que el usuario elige en el <select>
            modeloSeleccionado: 'Classic Black',

            // Imagen que se muestra en grande al inicio
            imagenSeleccionada: 'zapato-grande.jpg', 

            // Datos del producto actual basados en tu wireframe
            producto: {
                titulo: 'Product title',
                precio: 123.00,
                reviews: 4,
                descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
                // Tus fotos guardadas en la carpeta assets/
                imagenes: ['zapato-grande.jpg', 'zapato-lado.jpg', 'zapato-suela.jpg'],
                modelos: ['Classic Black', 'Sport White', 'Retro Blue']
            },

            // Arreglo para la sección de "Similar Products" abajo
            productosSimilares: [
                { nombre: 'Running Shoe', precio: 95.00, foto: 'similar1.jpg' },
                { nombre: 'Leather Boot', precio: 140.00, foto: 'similar2.jpg' },
                { nombre: 'Casual Sneaker', precio: 80.00, foto: 'similar3.jpg' },
                { nombre: 'Urban Skate', precio: 110.00, foto: 'similar4.jpg' }
            ]
        };
    },
    methods: {
        // Al dar clic en una miniatura, la foto grande cambia inmediatamente
        cambiarImagen(nombreFoto) {
            this.imagenSeleccionada = nombreFoto;
        },
        // Suma un elemento al contador del carrito
        agregarProducto() {
            this.unidadesEnCarrito++;
            alert('¡Producto añadido en el modelo: ' + this.modeloSeleccionado + '!');
        }
    }
});

app.mount('#app');