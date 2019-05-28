function Pokemon(nombre)
{
    this.nombre=nombre;
    this.ataque=50;
    this.vida=100;
    this.atacar=function(pokemonObjetivo)
        {
            if (pokemonObjetivo.vida<=0)
            {
                alert("Pokemon "+pokemonObjetivo.nombre+" Murio");
            }
            else{
                pokemonObjetivo.vida -=50;
                this.vida +=50;
                this.mostrarInfo(pokemonObjetivo);
            }
        }
        this.mostrarInfo=function(pokemonObjetivo)
        {
            console.log(pokemonObjetivo);
            console.log(this);
        
        }
}
var pikachu = new Pokemon();
var charmander = new Pokemon();
var pokemon1="";
var pokemon2="";
function crearPokemons(){
    pokemon1 = document.getElementById("pokemon").value;
    pokemon2 = document.getElementById("pokemon1").value;

    pikachu = new Pokemon(pokemon1);
    charmander = new Pokemon(pokemon2);
}
function atacarPok(){
    pikachu.atacar(charmander);

    document.formulario.nomPokemon1.value=pikachu.nombre;
    document.formulario.nomPokemon2.value=charmander.nombre;

    document.formulario.vidaPokemon1.value=pikachu.vida;
    document.formulario.vidaPokemon2.value=charmander.vida;    
}
