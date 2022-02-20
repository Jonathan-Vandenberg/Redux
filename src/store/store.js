import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
})

export default store

// export const ACTIONS = {
//   INCREMENT: 'INCREMENT',
//   DECREMENT: 'DECREMENT',
//   INCREASEBY5: 'INCREASEBY5',
//   TOGGLECOUNTER: 'TOGGLECOUNTER'
// }

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { counter: state.counter + 1, showCounter: state.showCounter }
//     case ACTIONS.DECREMENT:
//       return { counter: state.counter - 1, showCounter: state.showCounter }
//     case ACTIONS.INCREASEBY5:
//       return {
//         counter: state.counter + action.payload.amount,
//         showCounter: state.showCounter
//       }
//     case ACTIONS.TOGGLECOUNTER:
//       return { counter: state.counter, showCounter: !state.showCounter }
//     default:
//       return state
//   }
// }
