/*import Example from "./example.jsx"
import Card from "./card.jsx"
import {DataContext } from "./context.jsx"*/

let Carousel = () => {

	let { useContext, useEffect, useState, useRef } = React;
	// let { DataContext } = context
    let { datas } = useContext(DataContext)
    let [chunks, setChunks] = useState([])
    let [showNum, setShowNum] = useState(1)
    let [active, setActive] = useState(0)

    let showing = useRef(null)
    let next = useRef(null)
    let [ww, setWw] = useState(window.innerWidth)

    let chunker = (num) => {
    	let newChunk = [];
    	let chunk = [];
    		
		for(var i = 0; i < datas.length; i ++) {
			
			if(chunk.length < num) {
				chunk.push(datas[i])
			}
			else {
				newChunk.push(chunk)
				chunk = []
				chunk.push(datas[i])
			}
		}
		if(chunk.length > 0) newChunk.push(chunk)

		setChunks(newChunk)
	}

    let resize = () => {

    	let w = window.innerWidth;
    	let showW = showing.current.offsetWidth; 	

    	if(showW < 800) {
    		setShowNum(1)
    	}
    	else if (showW  < 1200 && showW >= 800) {
    		
    		setShowNum(2)
    	}
    	else {
    		setShowNum(3)
    	}
    	setWw(w)

    }

    useEffect(() => {
    	resize()
    	let count = 3;
    	let autoClick = setInterval( () => {
    		next.current.click();
    		count --;
    		if(count <= 0) clearInterval(autoClick);
    	}, 20000)
    	
    	 window.addEventListener("resize", resize)
        return () => window.removeEventListener("resize", resize)
    }, [])

    useEffect(() => {

    	// console.log("chunker "+Math.ceil(datas.length/showNum))
    	chunker(showNum)

    }, [showNum])

    // useEffect(() => console.log(chunks), [chunks])

    let ShowCase = () => {


    	return (
    		<div className="">
    		
			{
				chunks.map( (x, i) => {
					// console.log(x)
					return (
						<div  className={`carousel-item   ${i == 0 ? "active" : ""}`}  key={i}>
							<div className="d-flex justify-content-center">
							{
								x.map( (xx, ii) => <Example data={xx} index={ii} key={ii}/>)
							}
							</div>
						</div>
					)
				})
			}
				
    		</div>
    	)
    }



	return(
		<div className="container grad pb-2  mb-md-3 from-down" ref={showing} >
			<p ref={next} className="my-0 text-white text-center outline fs-4" data-bs-target="#carouselExampleControls" data-bs-slide="next">Featured Demo</p>

			<div id="carouselExampleControls" className="carousel slide pb-0" style={{height: "auto" } } data-bs-ride="carousel">
				<div className="carousel-inner" >
					<ShowCase />
				</div>
				
			</div>

			<div className="d-flex gap-3  justify-content-center">
				
		  
			{ chunks.map( (x, i) => {
				return (
				
					<a key={i} href="#/" data-bs-target="#carouselExampleControls" data-bs-slide-to={i} onClick={e => e.preventDefault()}>
						<div 
						className={`bg-white rounded-circle`} 
						style={{width: 10, height: 10, cursor: "pointer"}} 
						> </div>
					</a>
				
				)
			})
			
			}
			
			</div>
		</div>
	)

}


// export default Carousel