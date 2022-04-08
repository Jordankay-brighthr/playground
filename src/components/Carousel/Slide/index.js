import React from "react";

const Slide = ({text, emoji = "❓"}) => {

	return (
		<div className="text-center font-bold">
			<p>{text} {emoji}</p>
		</div>
	)
}

export default Slide