const app = Vue.createApp({
    data() {
        return {
            nuevaTarea: '',
            // Cambiamos strings por objetos para manejar más metadata como la imagen
            tareas: [
                { 
                    titulo: 'Project retrospective', 
                    hora: '4:50 PM', 
                    completada: false,
                    subtareas: [] 
                },
                { 
                    titulo: 'Evening team meeting', 
                    hora: '4:50 PM', 
                    completada: false,
                    subtareas: [] 
                },
                { 
                    titulo: 'Create monthly deck', 
                    hora: '5:30 PM', 
                    completada: true,
                    subtareas: [] 
                },
                { 
                    titulo: 'Shop for groceries', 
                    hora: '6:00 PM', 
                    completada: false,
                    subtareas: [
                        { texto: 'Pick up bag', completada: false },
                        { texto: 'Rice', completada: true }
                    ] 
                }
            ]
        };
    },
    computed: {
        // Propiedad computada opcional para contar solo las tareas que expiran hoy
        tareasHoy() {
            return this.tareas.filter(t => !t.completada);
        }
    },
    methods: {
        agregarTarea() {
            if (this.nuevaTarea.trim() === '') return;

            // Formatear hora actual de manera sencilla (HH:MM)
            const ahora = new Date();
            const horaFormateada = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            this.tareas.push({
                titulo: this.nuevaTarea,
                hora: horaFormateada,
                completada: false,
                subtareas: []
            });

            this.nuevaTarea = ''; // Limpiar el input
        },
        toggleTarea(tarea) {
            tarea.completada = !tarea.completada;
        },
        eliminarTarea(index) {
            this.tareas.splice(index, 1);
        }
    }
});

app.mount('#app');