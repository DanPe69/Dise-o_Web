const app = Vue.createApp({
    data() {
        return {
            nuevaTarea: '',
            // Tu arreglo ahora tiene más información por cada posición
            tareas: [
                { materia: 'Cálculo / Física', titulo: 'Resolver taller de Electromagnetismo' },
                { materia: 'Programación', titulo: 'Corregir el v-for de la app' },
                { materia: 'Diseño / Multimedia', titulo: 'Subir renders del personaje 3D' }
            ]
        };
    },
    methods: {
        agregarTarea() {
            if (this.nuevaTarea.trim() === '') return;

            // Agregamos el objeto al arreglo con una materia por defecto
            this.tareas.push({
                materia: 'General',
                titulo: this.nuevaTarea
            });

            this.nuevaTarea = ''; // Limpiamos el input
        },
        eliminarTarea(index) {
            // Eliminamos usando el índice que nos da el v-for
            this.tareas.splice(index, 1);
        }
    }
});

app.mount('#app');