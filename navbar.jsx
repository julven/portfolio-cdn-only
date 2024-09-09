/*import {useState, useRef, useEffect}  from "./react"*/


let Navbar = () => {

    let [pos, setPos] = useState(0)


    let scrollTo = (to, e) => {
        document.getElementById(to).scrollIntoView();
        clearActive();
        e.target.className += " active"

        if (document.getElementById("navBttn").ariaExpanded == "true") document.getElementById("navBttn").click();
    }

    let clearActive = () => {
        let classes = document.getElementsByClassName("nav-link")
        for (var i = 0; i < classes.length; i++) {
            // console.log(classes[i].className)
            classes[i].className = "nav-link"
        }
    }

    let scrollOne = () => {
        window.scrollBy(0,1)
    }

    

    useEffect(() => {
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY)
            setPos(window.scrollY)
        })

        return () => {}
    }, [])

    useEffect(() => {

        let iconShow = document.querySelector("#navbarSupportedContent")
        let navButton = document.querySelector("#navBttn")

        // console.log(iconShow.classList.value.includes("show"))

        if(pos == 0 && iconShow.classList.value.includes("show")) {
            navButton.click();
        }
        
    }, [pos])

    return (
        <div className="" >
            <nav className={`navbar navbar-expand-sm navbar-dark fixed-top ${pos == 0 ? "fade-dark" : "darked"}`} onClick={e => e.preventDefault()}>
                <div className="container-xl">
                    <a className="navbar-brand outline" href="#">Julven Condor</a>
                    <button id="navBttn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" onClick={() => scrollOne()}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active " href="#" onClick={(e) => scrollTo('home', e)}>Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#" onClick={(e) => scrollTo('about', e)}>About</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#" onClick={(e) => scrollTo('skills', e)}>Skills</a>
                            </li>
                            {/*<li className="nav-item">
                                <a className="nav-link" href="#" onClick={(e) => scrollTo('services', e)}>Service</a>
                            </li>*/}
                           <li className="nav-item">
                                <a className="nav-link" href="#" onClick={(e) => scrollTo('example', e)}>Example</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="#" onClick={(e) => scrollTo('contact', e)}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <style jsx="true">
            {`
                a.nav-link {
                    color: ${pos==0 ? "rgba(0,0,0,.7)":"white"} !important;
                  
                }   
                 a.nav-link.active {
                    font-weight: bold;
                 }
            `}
            </style>
        </div>
    )
}

/*export default Navbar*/