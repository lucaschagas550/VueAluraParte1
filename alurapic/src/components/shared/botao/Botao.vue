<template>
    <button @click="disparaAcao" class="botao" v-bind:class="estiloDoBotao" v-bind:type="tipo" >{{ rotulo }}</button>
</template>

<script>
export default {
/* Validar as propriedades */

    props: {
        tipo: {
            type: String, 
            required: true
        },

        rotulo: {
            type: String, 
            required: true
        },

        confirmacao: Boolean,
        estilo: String
    },

        methods: {

            disparaAcao(){
                if(this.confirmacao){
                    if(confirm('Confirma operação?')){
                        this.$emit('botaoAtivado', new Date());/* chama o evento botaoAtivado na tela principal(no caso a Home.vue, do componente botão)*/
                    }
                    return;
                }
                this.$emit('botaoAtivado', new Date());/* chama o evento botaoAtivado na tela principal(no caso a Home.vue, do componente botão)*/
            }
        },

        computed:{
            estiloDoBotao(){
                if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';
                if(this.estilo == 'perigo') return 'botao-perigo';
            }
        }
}
</script>

<style scoped>
.botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

.botao-perigo {
        background: firebrick;
        color: white;
    }

.botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>