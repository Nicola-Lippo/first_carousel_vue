'use strict'
console.log('collegato');
//vue
const { createApp } = Vue
const objApp = {
    data() {
        return {
            //array
            images: [
                { image: 'img/img_1.png', title: 'A Peaceful Walk' },
                { image: 'img/img_2.png', title: 'Waterfalls in Spring' },
                { image: 'img/img_3.png', title: 'The Pink Forest' },
                { image: 'img/img_4.png', title: 'Lake in Bloom' },
                { image: 'img/img_5.png', title: 'Magical Mushrooms' },
            ],
            //variabile current
            current: 0,
            //intervallo per autoplay...definire valore null no undefined
            myInterval: null,
            //variabile secondi per autoplay
            sec: 5
        }
    },
    methods: {
        prevImage() {
            console.log('immagine precedente');
            if (this.current > 0) {
                this.current--;
            } else {
                this.current = this.images.length - 1;
            };
            this.resetAutoplay();
        },
        nextImage() {
            console.log('immagine successiva');
            if (this.current < this.images.length - 1) {
                this.current++;
            } else {
                this.current = 0;
            };
            this.resetAutoplay();
        },
        //al click su una thumb, visualizzare in grande l'immagine corrispondente
        selectImage(i) {
            console.log('clck', i);
            this.current = i;
            this.resetAutoplay();
        },
        //function per autoplay
        resetAutoplay() {
            clearInterval(this.myInterval); // Interrompe il vecchio intervallo
            this.startAutoplay(); // Avvia un nuovo intervallo
        },
        startAutoplay() {
            this.myInterval = setInterval(() => {
                this.nextImage();
            }, this.sec * 1000);
            console.log('START autoplay');
        },
        stopAutoplay() {
            // Stoppo l'autoplay quando sono in hover col mouse
            clearInterval(this.myInterval);
            console.log('STOP autoplay');
        }
    },
    //applicare l'autoplay allo slider: ogni 5 secondi, cambia immagine automaticamente 
    mounted() {
        this.startAutoplay();
    },
    beforeUnmount() {
        // Pulisce l'intervallo quando il componente viene smontato
        clearInterval(this.myInterval);
        console.log('beforeUnmount');
    }
};
const app = createApp(objApp);
app.mount('#app');
