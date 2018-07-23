import {ADD_TEXT} from "../constants/action_types"

const initialState = {
	text: []
}

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_TEXT:
			console.log("received an add text button press")
			var newText = Array.from(state.text)
		  newText.push(action.payload)
			return Object.assign({}, state, {text: newText})
		default:
			return state
	}
}

export default rootReducer