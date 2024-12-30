import { UserAttributes } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUserSlice {
	profile: UserAttributes | null;
	token: string | null;
	fromClosedSession: boolean;
}

const initialState: IUserSlice = {
	profile: null,
	token: "",
	fromClosedSession: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		onSetToken: (state, action: PayloadAction<string>) => {
			const { payload } = action;

			return { ...state, token: payload, fromClosedSession: false };
		},

		onSetUserData: (state, action: PayloadAction<UserAttributes>) => {
			const { payload } = action;

			return { ...state, profile: payload, fromClosedSession: false };
		},

		onCloseSession: () => {
			return { ...initialState, fromClosedSession: true };
		},
	},
});

// Action creators are generated for each case reducer function
export const { onSetToken, onSetUserData, onCloseSession } = userSlice.actions;

export default userSlice.reducer;
