/*import Index from "./index.jsx"
import {DataContextProvider} from "./context.jsx"*/

let App = () => {

	let {useEffect} = React;
	// let { DataContextProvider } = context;



	useEffect(() => {
	
		document.querySelector("#loading").remove();
	}, [])

	return (
		<DataContextProvider>
			<Index />
		</DataContextProvider>

	)
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />)