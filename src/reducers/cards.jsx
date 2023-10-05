const initialState = {
    cards: [],
    cardsLoadingStatus: 'idle',
};

const cards = (state = initialState, action) => {
    switch (action.type) {
        case 'CARDS_FETCHING':
            return {
                ...state,
                cardsLoadingStatus: 'loading',
            };
        case 'CARDS_FETCHED':
            return {
                ...state,
                cards: action.payload,
                cardsLoadingStatus: 'edle',
            };
        case 'CARDS_FETCHING_ERROR':
            return {
                ...state,
                cardsLoadingStatus: 'error',
            };
        default:
            return state;
    }
};

export default cards;
