"use client";

import { Provider } from "react-redux";
// import "moment/locale/es";

import { store } from "@/redux/store";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Provider store={store}>{children}</Provider>;
}
