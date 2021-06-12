<template>
    <div>
        <ul v-for="poke in pokemon" :key="poke">
            <li>{{ poke.name }}</li>
        </ul>
    </div>
</template>
<script>

import { getPokemon } from '@/api/index'
export default ({
    name: 'Pokemones',
    data(){
        return{
            pokemon: [],
        }
    },
    methods: {

    },
   mounted() {
       getPokemon().then(
                (data)=>{
                    console.log(data)
                    this.pokemon = data.results
                }
            )
   },
})
</script>
<style scoped>

</style>
