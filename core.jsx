/*import { useState } from "./react"*/

let Core = () => {

    let [cores] = useState([
        {
            img: "img/time.png",
            title: "On Time",
            slogan: "Delivery first, satisfaction all time.",
            delay: "0"
        },
        {
            img: "img/quality.png",
            title: "Quality",
            slogan: "Fulfill client's good quality needs.",
            delay: ".2s"
        },
        {
            img: "img/cheap.png",
            title: "Affordable",
            slogan: "Have more options at lower prices.",
            delay: ".4s"
        }

    ])

    let Show = ({ parent }) => (
        <div className="col-12 col-sm-12 col-md-4 from-down"
        style={{transitionDelay: parent.delay}}>
            <div className="ms-sm-5 ms-md-0" >
                <div className="row d-flex align-items-center">
                    <div className="col-3 col-sm-3 col-md-12 col-lg-3 d-flex justify-content-sm-center justify-content-end">
                        <img src={parent.img} style={{ width: 75 }} className="my-2 img-fluid" />
                    </div>
                    <div className="col-9 col-sm-9 col-md-12 col-lg-9 ">
                        <p className="fw-bold mb-0 fs-4  border-bottom text-start text-md-center text-lg-start">{parent.title}</p>
                        <p className="  mb-0 text-start  text-md-center  text-lg-start">{parent.slogan}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className=" shadow-sm bg-light">
            <div className="container-xl">
                <div className="container py-3">
                    <div className="row ">
                        {cores.map((x,i) => <Show parent={x} key={i}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

/*export default Core*/