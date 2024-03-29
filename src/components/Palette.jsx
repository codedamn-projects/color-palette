import React from "react";

export default function Palette({ colorsArray, deletePalette }) {
	console.log({
		name: "palette component",
		colorsArray,
	});
	return (
		<div className="group rounded-md relative border-gray-200 border-2 flex gap-2 p-2 bg-gray-100">
			<span className=" flex items-center justify-center gap-3">
				{colorsArray.map(({ id, color: hexCode }) => {
					return (
						<div className="group-hover:opacity-10 flex flex-col gap-0.5 items-center">
							<div
								key={id}
								className={"w-20 h-24 rounded-md"}
								style={{ backgroundColor: `${hexCode}` }}
							>
								&nbsp;
							</div>
							<span className="group-hover:opacity-100 font-bold text-sm">
								{hexCode}
							</span>
						</div>
					);
				})}
			</span>
			<section className="group-hover:visible invisible absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3">
				<button
					className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
					onClick={() => deletePalette(colorsArray[0].id)}
				>
					Delete
				</button>
			</section>
		</div>
	);
}
