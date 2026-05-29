const app = Vue.createApp({
    data() {
        return {
            
            mostrar: false,
            
            
            nuevaPropuesta: '' 
        };
    },
    methods: {
        
        mostrarMensaje() {
            this.mostrar = !this.mostrar;
        },
        
        
        registrarPropuesta() {
            if (this.nuevaPropuesta !== '') {
                alert("¡Gracias por tu propuesta!: " + this.nuevaPropuesta);
                this.nuevaPropuesta = ''; 
            } else {
                alert("Por favor, escribe una propuesta primero.");
            }
        }
    }
});


app.mount('#app');