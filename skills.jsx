/*import {useState, useEffect} from "./react"*/

let Skills = () => {


    let [val] = useState([
        {
            img: "img/html.jpg",
            title: "HTML",
            exp: 3,
            desc: "Generaly used for proper formatting of text, inputs and images."
        }, {
            img: "img/css.jpg",
            title: "CSS",
            exp: 2,
            desc: "I use CSS to design the styling and UI looks of my projects"
        }, {
            img: "img/javascript.jpg",
            title: "Javascript",
            exp: 3,
            desc: "I have been using this programming language for dynamic interactivity."
        }, {
            img: "img/php.jpg",
            title: "PHP",
            exp: 2,
            desc: "I use PHP mostly for my backend scripting logic in database servers."
        }, {
            img: "img/mysql.jpg",
            title: "MySQL",
            exp: 1,
            desc: "I use MySQL mainly for persistent data storage of my projects."
        }, {
            img: "img/bootstrap.jpg",
            title: "Bootstrap",
            exp: 2,
            desc: "For faster creation of responsive pages and mobile friendly application"
        }, {
            img: "img/react.png",
            title: "React",
            exp: 2,
            desc: "I've been using ReactJS framework for single page website creation."
        }, {
            img: "img/vuejs.png",
            title: "Vue",
            exp: 1,
            desc: "I use VueJS because of it's simplicity and fast run time performance."
        },  {
            img: "img/firebase.jpg",
            title: "Firebase",
            exp: 1,
            desc: "I use Firebase for apps that requires realtime data updates for users."
        }, {
            img: "img/bubble.png",
            title: "Bubble.IO",
            exp: 2,
            desc: "A no-code/low-code website builder that I use for my recent projects."
        },
    ])

    useEffect(() => {
        // console.log({val})
    }, [])

    let Skill = ({ parent }) => (
        <div className="mx-2 " style={{ maxWidth: 280 }}>
            <div className="card mb-3 shadow-sm d-flex align-items-center from-down" >

                <img src={parent.img} className="card-img-top img-fluid p-2" style={{ width: 150, height: 200, objectFit: "contain" }} />
                <div className="card-body mb-3 text-center border-top" style={{ minHeight: 200 }}>
                    <h4 className="card-title">{parent.title}</h4>
                    {/*<p className="card-text">Exp: <b>{parent.exp}{parent.exp > 1 ? "+ yrs" : "+ yr"}</b></p>*/}
                    <span >Exp. Level<br></br>
                        <b>{parent.exp <= 1 ? "Basic" : parent.exp == 2 ? "Intermediate" : "Advanced"}</b>
                    </span>
                    <p className="card-text">{parent.desc}</p>

                </div>
            </div>
        </div>
    )



    return (
        <section className="hides">
            <div className="bg-light pt-3 pb-5 shadow-sm" id="skills">
                <div className="container-xl">
                    <h1 className="border-bottom ps-2 mb-4 from-left">Primary Skills</h1>

                    <div className="d-flex flex-wrap justify-content-center">
                        {val.map((x, i) => <Skill parent={x} key={i}/>)}
                    </div>
                </div>



            </div>
        </section>
    )
}

/*export default Skills*/