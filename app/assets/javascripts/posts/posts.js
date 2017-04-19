
var app = new Vue({

    el: "#posts-index",

    data: {
        message: "new data",
        counter: 0,
        color1: "",
        color2: "",
        color3: ""
    },

    methods: {

        updateCount: function(num) {
            $.ajax({
                url: "/posts/count",
                method: "POST",
                data: {
                    count: num
                },
                success: (res) => {
                    console.log(`response: ${JSON.stringify(res)}`);
                    this.counter = parseInt(res.currentCount)
                },
                error: function(err){
                    console.log(`err with ${err}`);
                }
            })
        },

        helloWorld: function(){
            // this.counter += 1
            this.updateCount(this.counter + 1)
        },

        resetCounter: function(){
            // this.counter = 0
            this.updateCount(0)
        },

    },


    // view lifecycle hooks

    created: function(){

        console.log("getting run?");
        $.ajax({
            url: '/posts/get-count',
            method: 'GET',
            success: (res) => {
                console.log(`getting a response? ${res}`);

                this.counter = parseInt(res.currentCount)
            }
        })

    }

})
