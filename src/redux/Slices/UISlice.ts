// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import UI_Settings from "@/config/UI_Settings";

// export const UISlice = createSlice({
// 	name: "UI_Settings",
// 	initialState: UI_Settings,
// 	reducers: {
// 		onToggleLeftPanel: (state) => {
// 			const { leftPanelOpen } = state;

// 			return { ...state, leftPanelOpen: !leftPanelOpen };
// 		},

// 		onOpenLeftPanel: (state) => ({ ...state, leftPanelOpen: true }),
// 		onCloseLeftPanel: (state) => ({ ...state, leftPanelOpen: false }),
// 		onSelectedLeftItem: (state, action: PayloadAction<string>) => ({
// 			...state,
// 			leftItemSelected: action.payload,
// 			lastLeftItemSelected: state.leftItemSelected,
// 		}),

// 		onOpenRightPanel: (state) => ({ ...state, rightPanelOpen: true }),
// 		onCloseRightPanel: (state) => ({ ...state, rightPanelOpen: false }),
// 	},
// });

// // Action creators are generated for each case reducer function
// export const {
// 	onToggleLeftPanel,
// 	onOpenLeftPanel,
// 	onCloseLeftPanel,
// 	onSelectedLeftItem,
// 	onOpenRightPanel,
// 	onCloseRightPanel,
// } = UISlice.actions;

// export default UISlice.reducer;
