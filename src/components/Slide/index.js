import React from "react";

const Slide = ({text, emoji = "❓"}) => {

	return (
		<div className="text-center font-bold">
			<p>{text} {emoji}</p>
			{/* <p>banana &#129409;</p> */}
		</div>
	)
}

export default Slide