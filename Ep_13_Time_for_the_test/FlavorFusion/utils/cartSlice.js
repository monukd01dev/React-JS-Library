import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalPrice: 0,
		discountedPrice: 0,
	},
	reducers: {
		// Action : reducer function
		addItem: (state, action) => {
			const { id } = action.payload;
			const targetItem = state.items.find((item) => item.id === id);
			if (targetItem) {
				targetItem.quantity = Math.min(targetItem.quantity + 1, 5); // Ensure quantity doesn't go abve 5
			} else {
				state.items.push(action.payload);
			}

			calculatePrice(state);
		},
		removeItem: (state, action) => {
			const { id, quantity } = action.payload;
			if (quantity > 1) {
				const targetItem = state.items.find((item) => item.id === id);
				if (targetItem) {
					targetItem.quantity = Math.max(targetItem.quantity - 1, 1); // Ensure quantity doesn't go below 1
				}
			} else {
				state.items = state.items.filter((item) => item.id !== id);
			}

			calculatePrice(state);
		},
		clearCart: (state) => {
			state.items.length = 0;
		},
	},
});

const calculatePrice = (state) => {
	state.discountedPrice = state.items.reduce(
		(totalPrice, item) =>
			totalPrice +
			((item.finalPrice || item.price || item.defaultPrice) / 100) *
				item.quantity,
		0,
	);
	state.totalPrice = state.items.reduce(
		(totalPrice, item) =>
			totalPrice +
			((item.price || item.defaultPrice || item.finalPrice) / 100) *
				item.quantity,
		0,
	);
};

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice;
export default cartSlice.reducer;
