const initialState = {
    images: [],
    imagesLoadingStatus: 'idle',
};

const images = (state = initialState, action) => {
    switch (action.type) {
        case 'IMAGES_FETCHING':
            return {
                ...state,
                imagesLoadingStatus: 'loading',
            };
        case 'IMAGES_FETCHED':
            return {
                ...state,
                images: action.payload,
                imagesLoadingStatus: 'edle',
            };
        case 'IMAGES_FETCHING_ERROR':
            return {
                ...state,
                imagesLoadingStatus: 'error',
            };
        default:
            return state;
    }
};

export default images;
