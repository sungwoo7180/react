function PokemonCard({ pokemon }) {

    return (
        <div>
            <h3>포켓몬 이름: {pokemon.name}</h3>
            <p><a href={pokemon.url}>포켓몬 상세 정보</a></p>
        </div>
    );
}

export default PokemonCard;
