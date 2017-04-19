Vue.component('counter-button', {

    template: "#counter-button",

    props: ['color'],

    data: function() {

        return {
            counter: 0
        }

    },

    methods: {
        incrementCounter: function(){
            console.log(this.color);
            this.counter += 1
            this.$emit('increment')

        }
    },

    computed: {

        colorStyle: function(){
            console.log('when is this called?');
            return `background-color: ${this.color}`
        }

    }

})
