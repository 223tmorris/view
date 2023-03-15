const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        // changeTitle(title){
        //     // this.title = 'Words of Radiance'
        //     this.title = title
        // }

        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e, e.type)
        }
    }
})

app.mount('#app')

// video 3 timestamp 5:13