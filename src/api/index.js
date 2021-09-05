let apiUrl =process.env.VUE_APP_URL_API;
export default apiUrl;


export function getPokemon(){
   return fetch(`${apiUrl}/pokemon`,{
        method:'GET',
        mode:'cors',
        headers: {
            "Content-Type": "application/json",
        }
    }).then(resp => resp.json())

}
export function getDataPokemon(apiPokemon){
    return fetch(`${apiPokemon}`,{
         method:'GET',
         mode:'cors',
         headers: {
             "Content-Type": "application/json",
         }
     }).then(resp => resp.json())
 
 }