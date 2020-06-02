const app = new Vue({
    el: '#app',
    data: {
        colors: [],
        selected: ""
    },
    methods: {
        colorAdd() {
            this.colors.push(document.getElementById("color").value);
            console.log(this.colors)
        }
    }
})