<template>
    <div>
        <h1 class="centralizado">{{ titulo }}</h1>

        <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre por parte do titulo">
            <ul class="lista-fotos"> 
                <li class="lista-fotos-item" v-for="foto of fotosComFiltro" v-bind:key="foto.titulo">
                    
                    <meu-painel :titulo="foto.titulo">
                        <imagem-responsiva v-bind:url="foto.url" v-bind:titulo="foto.titulo"/>
                        <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove($event, foto)" v-bind:confirmacao="true" estilo="perigo"/>
                    </meu-painel>

                </li>
            </ul>
    </div>
</template>

<script>

/*Importa um componente e comeca a utiliza-lo */
import Painel from '../shared/painel/Painel';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva';
import Botao from '../shared/botao/Botao';

export default {

    components:{
        'meu-painel' : Painel,
        'imagem-responsiva' : ImagemResponsiva,
        'meu-botao' : Botao
    },

/*Retorna para view os seguintes dados */
    data() {
        return {
        titulo: "AluraPic",
        fotos: [],
        filtro: ''
        };
    },

    computed: {
        fotosComFiltro(){

            if(this.filtro){
                /*filtrar*/

                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.fotos.filter(foto => exp.test(foto.titulo));
            }
            else
            {
                return this.fotos;
            }
        }
    },

    methods: {
        remove($event, foto){
            alert($event);  /*Dado enviado do componente botao(pai(componente botao) para o filho(tela)) */
            alert('Remover a foto! ' + foto.titulo);
        }
    },

/*Requisição ao chamar a tela */
    created() {
        this.$http
        .get("http://localhost:3000/v1/fotos")
        .then(res => res.json())
        .then(fotos => (this.fotos = fotos), err => console.log(err));
    }
};
</script>

<style>

.centralizado {
    text-align: center;
}

.titulo {
    text-align: center;
}

.corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
}

.lista-fotos {
    list-style: none;
}

.lista-fotos .lista-fotos-item {
    display: inline-block;
}

.filtro {
    display: block;
    width: 100%;
}

</style>
