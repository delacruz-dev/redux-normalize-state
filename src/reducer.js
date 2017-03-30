import getInitialState from './getInitialState'

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.id]: {
            ...state.fields[action.payload.id],
            title: action.payload.title
          }
        }
      }
    default:
      return state
  }
}
