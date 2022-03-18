const fetchpokemon = () => {
    const pokename =document.getElementById("pokemon");
    let pokeinput = pokename.value.toLowerCase();
    console.log(pokeinput);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    


    fetch (url).then((res)=>{
        console.log(res);
    if (res.status != "200"){
        console.log(res.status);
        pokeid(".error.png");
    }
    else{
        return res.json();
    }
        return res.json();
    }).then((data)=>{
        console.log(data);
        let pokeimgen = data.sprites.front_default;
        //imagen o sprite pokemon
        console.log(pokeimgen);
        pokeid(pokeimgen);

        let pokemonidnombre = data.name;
        console.log(pokemonidnombre);

        let numeropokemon = data.id;
        console.log(numeropokemon)

        const {stats,types,abilities} =data;
        // tipo de pokemmon
        let tipo = types[0].type.name;
        console.log(tipo);
        // anilidades pokemon
        let pokeabilities= abilities[0].ability.name;
        console.log(pokeabilities);
        
        // stat hp//
        let nstats = stats[0].base_stat;
        console.log(nstats);
        let nnstats =stats[0].stat.name;
        console.log(nnstats);
        //atque//
        let nataque = stats[1].base_stat;
        console.log(nataque);
        let nnataque =stats[1].stat.name;
        console.log(nnataque);
        //defensa//
        let ndefensa = stats[2].base_stat;
        console.log(ndefensa);
        let nndefensa =stats[2].stat.name;
        console.log(nndefensa);
        // ataque especial//
        let natkespecial = stats[3].base_stat;
        console.log(natkespecial);
        let nnatkespecial =stats[3].stat.name;
        console.log(nnatkespecial);
        // defensa especial//
        let ndefenseespecial = stats[4].base_stat;
        console.log(ndefenseespecial);
        let nndefenseespecial =stats[4].stat.name;
        console.log(nndefenseespecial);
        // velociadad//
        let nspeed = stats[5].base_stat;
        console.log(nspeed);
        let nnspeed =stats[5].stat.name;
        console.log(nnspeed);
        // velociadad//
        //peso pokemon//
        let pokepeso =data.weight;
                     
        //valores impresiones en pagina

        var pokemonpeso=`${pokepeso}`;
        document.getElementById("peso").textContent=`${pokemonpeso}`.toUpperCase() + "kg";
        
        
         document.getElementById("tipo").textContent=`${tipo}`.toUpperCase();

        var idpokemon = `${numeropokemon}`;
        document.getElementById("numeropokemon").textContent= "#" +`${idpokemon}`;

        var nopokemon = `${pokemonidnombre}`;
        document.getElementById("pokenombre").textContent= `${nopokemon}`.toUpperCase();



        //imprecion  de las stats por id
        document.getElementById("hp").textContent=`${nnstats}`.toUpperCase() + ":   "+`${nstats}`;
        document.getElementById("speed").textContent=`${nnspeed}`.toUpperCase() + ":   "+`${nspeed}`;
        document.getElementById("attack").textContent=`${nnataque}`.toUpperCase() + ":   "+`${nataque}`;
        document.getElementById("special-attack").textContent=`${nnatkespecial}`.toUpperCase() + ":   "+`${natkespecial}`;
        document.getElementById("defense").textContent=`${nndefensa}`.toUpperCase() + ":   "+`${ndefensa}`;
        document.getElementById("special-defense").textContent=`${nndefenseespecial}`.toUpperCase() + ":   "+`${ndefenseespecial}`;
       

    })
}




//fetchpokemon();


const pokeid = (url) =>{
    const pokeimg =document.getElementById("pokeimg");
    pokeimg.src = url;
    console.log(pokeimg);
}
