import { createActions, handleActions } from 'redux-actions';

/* 초기 state 값 */
const initialState = [
    {
        id: 0,
        name: ''
    }
];

/* action */
/* type */
export const GET_POKEMONS = 'pokemons/GET_POKEMONS';

/* action function */
const actions = createActions({
    [GET_POKEMONS]: () => { }
});

/* reducer */
const pokemonReducer = handleActions(
    {
        [GET_POKEMONS]: (state, { payload }) => {
            console.log('[reducer] payload: ', payload);

            return payload;
        }
    }, initialState
);

export default pokemonReducer;
