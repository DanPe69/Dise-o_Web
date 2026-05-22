const app = Vue.createApp({
    data() {
        return {
            unidadesEnCarrito: 0,
            modeloSeleccionado: 'Classic Black',
            imagenSeleccionada: 'zapato-grande.jpg', // Foto inicial arriba
            
            // EJERCICIO 1: Variable para controlar la cantidad que digite el usuario
            cantidadA_Agregar: 1, 

            // Datos del producto que se muestra arriba
            producto: {
                titulo: 'Product title',
                precio: 123.00,
                reviews: 4,
                descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                imagenes: ['zapato-grande.jpg', 'zapato-lado.jpg', 'zapato-suela.jpg'],
                modelos: ['Classic Black', 'Sport White', 'Retro Blue']
            },

            // Datos de los productos de abajo
            productosSimilares: [
                { nombre: 'Running Shoe', precio: 95.00, foto: 'similar1.jpg' },
                { nombre: 'Leather Boot', precio: 140.00, foto: 'similar2.jpg' },
                { nombre: 'Casual Sneaker', precio: 80.00, foto: 'similar3.jpg' },
                { nombre: 'Urban Skate', precio: 110.00, foto: 'similar4.jpg' }
            ]
        };
    },
    methods: {
        // Cambia la foto principal al hacer clic en las miniaturas
        cambiarImagen(nombreFoto) {
            this.imagenSeleccionada = nombreFoto;
        },

        // EJERCICIO 1 CORREGIDO: Suma la cantidad exacta elegida por el usuario
        agregarProducto() {
            if (this.cantidadA_Agregar < 1) {
                alert('La cantidad debe ser mínimo 1');
                return;
            }
            this.unidadesEnCarrito += this.cantidadA_Agregar;
            alert('¡Añadido! Modelo: ' + this.modeloSeleccionado + ' | Cantidad: ' + this.cantidadA_Agregar);
        },

        // EJERCICIO 2: Cambia el producto de arriba por el que clickeamos abajo
        cargarProductoSimilar(zapatoElegido) {
            this.producto.titulo = zapatoElegido.nombre;
            this.producto.precio = zapatoElegido.precio;
            this.imagenSeleccionada = zapatoElegido.foto;
            // Opcional: Reiniciamos la cantidad a 1 al cambiar de producto
            this.cantidadA_Agregar = 1; 
        }
    }
});

app.mount('#app');