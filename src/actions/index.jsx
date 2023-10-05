export const fetchCards = (request) => (dispatch) => {
    dispatch(cardsFetching());
    request('http://localhost:3001/cards')
        .then((data) => dispatch(cardsFetched(data)))
        .catch(() => dispatch(cardsFetchingError()));
};

export const fetchImages = (request) => (dispatch) => {
    dispatch(imagesFetching());
    request('http://localhost:3001/images')
        .then((data) => dispatch(imagesFetched(data)))
        .catch(() => dispatch(imagesFetchingError()));
};

/* CARDS */
export const cardsFetching = () => {
    return {
        type: 'CARDS_FETCHING',
    };
};

export const cardsFetched = (cards) => {
    return {
        type: 'CARDS_FETCHED',
        payload: cards,
    };
};

export const cardsFetchingError = () => {
    return {
        type: 'CARDS_FETCHING_ERROR',
    };
};

/* IMAGES */

export const imagesFetching = () => {
    return {
        type: 'IMAGES_FETCHING',
    };
};

export const imagesFetched = (images) => {
    return {
        type: 'IMAGES_FETCHED',
        payload: images,
    };
};

export const imagesFetchingError = () => {
    return {
        type: 'IMAGES_FETCHING_ERROR',
    };
};
