import React, { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import NewsItem from "./Components/NewsItem"

const App = () => {
	const [category, setCategory] = useState("");
	return (
		<div>
			<Navbar category={category} setCategory={setCategory} /> 
			<NewsBoard category={category} />
		</div>
	)
}

export default App