import { SET_MOVE, CHANGE_TURN, HAS_WON } from "./actions";

const initialState = {
  ticTacToe: [[null, null, null], [null, null, null], [null, null, null]],
  turn: true,
  hasWon: false
};

const set_move_helper = (state, pos, player) => {
  const newTicTacToe = state.slice();
  newTicTacToe[pos[0]][pos[1]] = player;
  return newTicTacToe;
};

const ticTacToeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVE:
      return {
        ...state,
        ticTacToe: set_move_helper(state.ticTacToe, action.pos, actions.player)
      };
    case CHANGE_TURN:
      return {
        ...state,
        turn: !state.turn
      };
    case HAS_WON:
      return {
        ...state,
        hasWon: !state.hasWon
      };
    default:
      return state;
  }
};

export default ticTacToeReducer;