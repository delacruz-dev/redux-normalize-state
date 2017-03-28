export function getTitle(state, id) {
  return state.fields[id].title
}

export function getDescription(state, id) {
  return state.fields[id].description
}

export function getFields(state, id) {
  return state.fieldRefs
}
