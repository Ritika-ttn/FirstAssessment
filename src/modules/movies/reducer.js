import ApiTypes from './types';
const initialState = {
  list: [],
  gen: [],
};
export default function ApiReducer(state = initialState, action) {
  console.log('Action ', action);
  console.log('State', state);
  switch (action.type) {
    case ApiTypes.List_Api:
      return {
        ...state,
        list: [...state.list, ...action.payload],
      };
    case ApiTypes.GENRE:
      return {
        ...state,
        gen: action.payload,
      };
    case ApiTypes.RELEASE:
      return {
        list: action.payload,
      };
    case ApiTypes.OLD:
      return {
        list: action.payload,
      };
    case ApiTypes.MOSTPOPULAR:
      return {
        list: action.payload,
      };
    case ApiTypes.LESSPOPULAR:
      return {
        list: action.payload,
      };
    case ApiTypes.HIGHREVENUE:
      return {
        list: action.payload,
      };
    case ApiTypes.LESSREVENUE:
      return {
        list: action.payload,
      };

    default:
      return state;
  }
}
