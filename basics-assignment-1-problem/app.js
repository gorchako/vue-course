const app = Vue.createApp({
    data() {
        return {
            name: 'Kirill',
            age: 24,
            imgLink: 'https://vuejs.org/images/logo.png'
        }
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    }
})

app.mount('#assignment');