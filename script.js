new Vue({
    el: '#app',
    // Data (Déclaration de données) :
    data: {
        txt: 'Hello World',
        name: 'Matteo',
        age: 21,
        url: 'https://matteo.courqu.in/',

        compteur: 0,
        compteurA: 0,
        compteurB: 0,

        x: 0,
        y: 0,

        creditCard: "",

        html: '<p>Mon html s\'insere !</p>',

        // CSS
        toggleColor : false,
        box : true,
        color : 'lightblue',
        width : 200,
    },
    // Functions (On a accès a tout ce qu'on a mis dans data depuis méthode en utilisant 'this')
    methods: {
        presentation: function(name) {
            return `Bonjour, je suis ${name} ! J'ai ${this.age} ans.`
        },
        up: function() {
            this.compteur++
        },
        down: function() {
            this.compteur--
        },
        coords: function(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        clickMe: function() {
            console.log('click');
        },
        keyUp: function() {
            console.log('Touche pressée !');
        },
        creditCardFunc: function(e) {
            this.creditCard = e.target.value
            console.log(this.creditCard);
        },
    },
    // Survielle des propriétés et lance des actions a leurs changements.
    watch :{
        compteurA: function() {
            var ctx = this
            setTimeout(function() {
                ctx.compteurA = 0
            }, 1500)
        }
    },
    // Des functions qui sont appellé seulement si une valeur qu'elle contien est changé.
    computed : {
        checkValue: function() {
            return this.compteurA > 10 ? 'Superieur a 10' : 'Inferieur a 10'
        },

        // CSS
        objCSS: function() {
            return{
                red: this.toggleColor,
                box: true,
                border: false,
            }
        },
        style: function() {
            return{
                // Les propriétés this font référence a celles qui ont été déclarés dans data
                backgroundColor : this.color,
                width: this.width + 'px'
            }
        },
    }
})