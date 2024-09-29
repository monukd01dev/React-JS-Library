import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		// Action : reducer function
		addItem: (state, action) => {
			const { id } = action.payload;
			const targetItem = state.items.find((item) => item.id === id);
			if (targetItem) {
				targetItem.quantity = Math.min(targetItem.quantity + 1, 5);
			} else {
				state.items.push(action.payload);
			}
		},
		removeItem: (state, action) => {
			const { id, quantity } = action.payload;
			if (quantity > 1) {
				const item = state.items.find((item) => item.id === id);
				if (item) {
					item.quantity = Math.max(item.quantity - 1, 1); // Ensure quantity doesn't go below 1
				}
			} else {
				state.items = state.items.filter((item) => item.id !== id);
			}
		},
		clearCart: (state) => {
			state.items.length = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice;
export default cartSlice.reducer;
