import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
  products: 0,
  currency: "usd",
  language: "en"
}

export const actionTypes = {
  INCREMENT_PRODUCT: 'INCREMENT_PRODUCT',
  SET_CURRENCY: 'SET_CURRENCY',
  SET_LANGUAGE: 'SET_LANGUAGE'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_PRODUCT:
      return Object.assign({}, state, {
        products: state.products + 1,
      })
    case actionTypes.SET_CURRENCY:
      return Object.assign({}, state, {
        currency: action.currency
      })
    case actionTypes.SET_LANGUAGE:
      return Object.assign({}, state, {
        currency: action.language
      })
    default:
      return state
  }
}

// ACTIONS
export const incrementProduct = () => {
  return { type: actionTypes.INCREMENT_PRODUCT }
}

export const setCurrency = ({currency}) => {
  return { type: actionTypes.SET_CURRENCY, currency }
}

export const setLanguage = ({language}) => {
  return { type: actionTypes.SET_LANGUAGE, language }
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
