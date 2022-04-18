import { REQUEST_GIFS , REQUEST_TENDING_GIFS } from '../actions';

const initialState =  {
    data: [],
    trendingData:[]
};

export default function gifs(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GIFS:
            return {
                ...state, data: action.payload.body.data
            };
            case REQUEST_TENDING_GIFS:
                return {
                    ...state, trendingData: action.payload.body.data
                };
        default:
            return state;
    }
  }