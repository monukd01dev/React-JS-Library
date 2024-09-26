import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		// Action : reducer function
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		removeItem: (state) => {
			state.items.pop();
			// state.items = state.items.filter((item) => item.id !== item.);
		},
		clearCart: (state) => {
			state.items.length = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice;
export default cartSlice.reducer;
