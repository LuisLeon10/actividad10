Vue.component("sustancia",{
    template: '<div class="productoBebida"><div class="productoInd" v-for="bebida in bebidas"><div class="cabecera-diseno">{{bebida.nombre}}</div><div class="imagen-diseno"><img :src="bebida.imagen"></div><div class="info-diseno"><ul class="list-unstyled text-center text-primary"><li class="ingredientes">Ingredientes: {{bebida.ingredientes}}</li><li>Precio: {{bebida.precio}}</li><li>Tamaño: {{bebida.tamanio}}</li><li>Existencia: {{bebida.vigencia}}</li></ul></div></div></div>',
    props: ["bebidas"],
});
const app = new Vue({
    el:'#cuerpo',
    data: {
        bebidasArray: [
            {indice: 0, nombre:"Café expresso", imagen: "./img/expresso.jpg", ingredientes:"Café negro, azucar, agua", tamanio: 120, precio: 55, vigencia: true},
            {indice: 1, nombre:"Café Americano", imagen: "./img/americano.jpg", ingredientes:"Café molido medio en polvo, azucar, agua", tamanio: 130, precio: 60, vigencia: true},
            {indice: 2, nombre:"Café Capuccino", imagen: "./img/capuccino.jpg", ingredientes:"Leche, chocolate, azucar, canela, nata, café expresso", tamanio: 150, precio: 44, vigencia: false},
            {indice: 3, nombre:"Café Latte", imagen: "./img/latte.jpg", ingredientes:"Café, leche", tamanio: 120, precio: 69, vigencia: true},
            {indice: 4, nombre:"Café Moka", imagen: "./img/moka.jpg", ingredientes:"Leche, cacao, canela, azucar, cafe colado", tamanio: 135, precio: 58, vigencia: true},
            {indice: 5, nombre:"Café Caramel Macchiato", imagen: "./img/caramel.jpg", ingredientes:"Café, leche, azucar", tamanio: 150, precio: 81, vigencia: true},
            {indice: 6, nombre:"Limonada", imagen: "./img/limonada.jpg", ingredientes:"Agua, azucar, limón", tamanio: 300, precio: 35, vigencia: true},
            {indice: 7, nombre:"Naranjada", imagen: "./img/naranjada.jpg", ingredientes:"Naranja, agua, azucar", tamanio: 300, precio: 35, vigencia: false},
            {indice: 8, nombre:"Chocolate", imagen: "./img/chocolate.jpg", ingredientes:"Chocolate, leche", tamanio: 200, precio: 45, vigencia: true},
            {indice: 9, nombre:"Coca Cola", imagen: "./img/coca.jpg", ingredientes:"Agua carbonatada, azúcares, colorante de caramelo, ácido fosfórico, una mezcla especial de saborizantes naturales, y cafeína", tamanio: 350, precio: 30, vigencia: false}
        ],
        busqueda: 0,
        textBusqueda: "",
        numBusqueda: 0,
        agregarProducto: "",
        listWish: [],
        mostrarLista: false
    },
    methods: {
        cambiar(){
            if(this.numBusqueda == 0 && this.textBusqueda == ""){
                this.busqueda = 0;
            }else if(this.numBusqueda > 0 && this.textBusqueda == ""){
                this.busqueda = 2;
            }else{
                this.busqueda = 1;
            }
        },
        agregar(){
            for(let i=0; i<this.bebidasArray.length;i++){
                if(this.bebidasArray[i].nombre==this.agregarProducto){
                    this.listWish.push(this.bebidasArray[i]);
                }
            }
        },
        mostrar(){
            this.mostrarLista = true;
        }
    },
    computed: {
        buscarBebida(){
            return this.bebidasArray.filter((bebida)=>bebida.nombre.includes(this.textBusqueda));
        },
        numBebida(){
            return this.bebidasArray.filter((bebida)=>bebida.precio<=this.numBusqueda);
        },
    }
});