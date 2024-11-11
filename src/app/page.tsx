"use client";

import { useState } from "react";

export default function Home() {
	const [panel, setPanel] = useState(false);
	const open = () => setPanel(true);
	const close = () => setPanel(false);

	return (
		<>
			<div className="h-screen grid grid-rows-[4rem_1fr]">
				<nav className="flex  justify-between items-center">
					<div className="flex">
						<button onClick={open}>icon button</button>
						<div>nombre tab</div>
					</div>
					<div>
						<button>A</button>
						<button>A</button>
						<button>A</button>
					</div>
				</nav>

				<div className="overflow-y-auto">
					<h1 className="text-2xl">resumen general</h1>

					<div>
						<h2 className="text-lg">filtros</h2>

						<div>
							<label htmlFor="">a</label>
							<input type="text" />
						</div>

						<div>
							<label htmlFor="">a</label>
							<input type="text" />
						</div>

						<div>
							<label htmlFor="">a</label>
							<input type="text" />
						</div>

						<div>
							<label htmlFor="">a</label>
							<input type="text" />
						</div>
					</div>

					<div>
						<h2 className="text-lg">lista</h2>

						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>

						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>

						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>

						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>

						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
						<div>item</div>
					</div>
				</div>
			</div>

			{panel && (
				<div className="absolute top-0 left-0 bottom-0 right-0 bg-blue-600">
					<div>
						<button onClick={close}>icon button</button>
					</div>
					<div className="flex items-center h-14 bg-gray-500">
						<div>logo</div>

						<div>empresa</div>
					</div>

					<div>opciones del panel</div>
				</div>
			)}
		</>
	);
}
