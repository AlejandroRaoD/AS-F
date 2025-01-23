import React from "react";

const MusicIcon = () => {
	return (
		<svg
			className="h-5 w-5 text-slate-500"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			strokeWidth="2"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" /> <circle cx="6" cy="17" r="3" />
			<circle cx="16" cy="17" r="3" /> <polyline points="9 17 9 4 19 4 19 17" />
			<line x1="9" y1="8" x2="19" y2="8" />
		</svg>
	);
};

export default MusicIcon;
