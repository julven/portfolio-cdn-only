/*import Navbar from "./navbar.jsx"
import Home from "./home.jsx"
import Core from "./core.jsx"
import About from "./about.jsx"
import Skills from "./skills.jsx"
import Examples from "./examples.jsx"
import Contact from "./contact.jsx"
import Footer from "./footer.jsx"*/


let Index = () => {

    let { useEffect, useState } = React;
  

    let observer = new IntersectionObserver(entries => {
        // console.log(entries)
        entries.forEach(entry => {
            // entry.target.classList.toggle('shows', entry.isIntersecting);
            // entry.target.classList.toggle('hides', !entry.isIntersecting);
            if (entry.isIntersecting) {
                entry.target.classList.remove("hides")
                entry.target.classList.remove("from-left")
                entry.target.classList.remove("from-right")
                entry.target.classList.remove("from-down")
                entry.target.classList.add("shows")
            }
            // else {
            //  // console.log(entry.isIntersecting)
            //  entry.target.classList.remove("shows")
            //  entry.target.classList.add("hides")
            // }
        })
    })


    useEffect(() => {
        let hidden = document.querySelectorAll(".hides");
        let fromLeft = document.querySelectorAll(".from-left");
        let fromDown = document.querySelectorAll(".from-down");
        let fromRight = document.querySelectorAll(".from-right");
        hidden.forEach(element => observer.observe(element));
        fromLeft.forEach(element => observer.observe(element));
        fromDown.forEach(element => observer.observe(element));
        fromRight.forEach(element => observer.observe(element));
    }, [])

    return (
        <div>
            <Navbar />
            <Home />
            <Core />
            <About />
            <Skills />
 
            <Examples />
            <Contact />
            <Footer />

            <style jsx="true">{`
                
                .shows {  
                     opacity: 1;
                     filter: blur(0);
                     transform: translateX(0);
                     transform: translateY(0);
                    transition: all 1s;
                                    
                }
                .from-left {
                    
                    transform: translateX(-100%);
                }
                .from-right {
                    
                    transform: translateX(100%);
                }
                .from-down {
                    opacity: 0;
                    
                    transform: translateY(50%);
                }
                .hides {
                     opacity: 0;
                              
                }
                .fade-dark {
                    background-color: rgba( 0, 0, 0, 0);
                    transition: all 1s;
                }
                .darked {
                    background-color: rgba( 0, 0, 0, 1);
                    transition: all 1s;
                }
                .grad {
                  background-image: linear-gradient(to right, rgba(0, 0, 0,0), rgba(0, 0, 0,.5),rgba(0, 0, 0,.5), rgba(0, 0, 0,0) );
                }


           
            `}</style>

        </div>
    )
}

/*export default Index*/