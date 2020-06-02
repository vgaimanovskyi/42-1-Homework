const app = new Vue({
    el: '#app',
    data: {
        newColor: "",
        palette: [],
    },
    methods: {
        colorAdd() {
            this.palette.push(this.newColor);
            console.log(this.palette)
        }
    }
})