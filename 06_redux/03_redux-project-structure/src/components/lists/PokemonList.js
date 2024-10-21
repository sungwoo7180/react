import { useSelector, useDispatch } from "react-redux";
import PokemonCard from "../items/PokemonCard";
import { useEffect } from "react";
import { callGetPokemonsAPI } from "../../apis/PokemonAPICalls";

function PokemonList() {

    const { count, next, previous, results } = useSelector(state => state.pokemonReducer);
    // console.log('[PokemonList component] result: ', result);

    const pokemons = results;

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetPokemonsAPI());
        }, []
    );

    return (
        pokemons && (
            <div>
                <h3>Total: {count}</h3>
                <button onClick={() => dispatch(callGetPokemonsAPI(previous))}>PREV</button>
                <button onClick={() => dispatch(callGetPokemonsAPI(next))}>NEXT</button>
                {pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemon={pokemon} />)}
            </div>
        )
    );
}

export default PokemonList;
