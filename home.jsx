/*import Carousel from "./carousel.jsx"*/

let Home = () => {

    let { useEffect, useState, useContext } = React;


    let [load, setLoad] = useState(true)
    let [windowH, setWindowH] = useState(window.innerHeight > 800 ? window.innerHeight:800)
     let [windowW, setWindowW] = useState(window.innerWidth)
    let imgLoad = new Image(); 

    let resize = () => {


        let h = window.innerHeight;
        let w = window.innerWidth;

        // console.log(w)
        
        if(h > 800) setWindowH(h);
        else setWindowH(800);

        setWindowW(w)
    }

    
    useEffect( () => {

        imgLoad.onload = e => {
            setLoad(false)
        }
        imgLoad.src = "img/snow_mountain.jpg";

        window.addEventListener("resize", resize)

        return () => window.removeEventListener("resize", resize)
    }, [])


    return (

        <div style={{ height: `${windowH - (windowW < 760 ? 0 : 123)}px`, transition: "all 1s", opacity: load ? "0": "1"}} 
        id="home" className={"pt-5 parallax" } >

            <div className="container-fluid py-4 h-100">
                <div className="d-flex justify-content-between flex-column h-100 ">
                    <div className="row d-flex align-items-center mt-md-4 ">
                        <div className="col-12 col-sm-12 col-md-6 from-left hides">
                            <div className="d-flex justify-content-md-end justify-content-center">
                                <img src="img/resume.jpg" className=" circular_image m-3 shadow-lg " />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 ">
                            <div className="">

                                <h1 className="outline d-flex justify-content-md-start justify-content-center text-center fw-bold from-down hides">
                                    Hello, I'm Julven
                                </h1>
                                <div className="from-down" style={{transitionDelay: ".5s"}}>
                                    <h3 className="outline d-flex justify-content-md-start justify-content-center text-center ">
                                        Web Developer
                                    </h3>
                                    <p className="outline d-flex justify-content-md-start justify-content-center text-center mb-0 ">
                                        Bachelor Science in Information Technology
                                    </p>

                                    <div className="d-flex justify-content-md-start justify-content-center ">
                                        <i style={{cursor: "pointer"}} className="outline bi bi-facebook m-2 fs-2 " title="https://www.facebook.com/julyseven1990/" onClick={() => window.open("https://www.facebook.com/julyseven1990/", "_blank").focus()}></i>
                                        <i style={{cursor: "pointer"}} className="outline bi bi-skype m-2 fs-2"></i>
                                        <i style={{cursor: "pointer"}} className="outline bi bi-github m-2 fs-2" title="https://github.com/julven" onClick={() => window.open("https://github.com/julven", "_blank").focus()}></i>
                                        <i style={{cursor: "pointer"}} className="outline bi bi-linkedin m-2 fs-2"></i>
                                    </div>
                                </div>  
                            </div>

                        </div>
                    </div>
                     <div >
                        <Carousel />
                    </div>
                </div>

               
            </div>

          

            <style jsx="true">{`
                .circular_image {  
                    object-fit: cover;
                    width: ${windowW/3 > 210? 220: windowW/3 <170 ?  170: windowW/3 }px;
                    height: ${windowW/3 > 210? 220: windowW/3 <170 ?  170: windowW/3 }px;
                    border-radius: 50%;    
                }
                .parallax {
                     background-image: url('img/snow_mountain.jpg');
                    
                     background-attachment: fixed;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                }
                .outline {
                    color: white;
                    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
                }
            
            `}</style>
        </div>
    )
}

/*export default Home;*/