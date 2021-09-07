<template>
  <div class="card-expansion">
    <md-card v-for="poke in pokemones.slice(0, 5)" :key="poke">
        {{getDataPokemon(poke.url)}}
      <md-card-media>
        <img src= "" >
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{ poke.name }}</div>
        <div class="md-subhead">{{ pokemon.type}}</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <md-card-expand-trigger>
            <md-button>info</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
           
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>

import { getPokemon, getDataPokemon } from '@/api/index'

  export default {
    name: 'PokedexView',
     data(){
        return{
            pokemones: [],
            pokemon: {},
        }
    }, 
    methods: {
        getDataPokemon(url){
            getDataPokemon(url).then(
                (data)=>{
                    this.pokemon ={
                        'src': data.sprites.front_default,

                    }
                }
            )
        }
    },
       mounted() {
       getPokemon().then(
                (data)=>{
                    this.pokemones = data.results
                }
            )
   },
  }
</script>

<style lang="scss" scoped>
  .card-expansion {
    height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>