/*import Card from "./card.jsx"*/

let Example = ({ data, index }) => {

        let viewWebsite = (data) => {
            if(data.resticted) {
                let conf = window.confirm("this website consumes huge data bandwith that if abused will cause my free hosting services to be unavailable. please contact me to view this website. click ok to proceed.");
                if(conf) {
                    window.location.href = data.link;
                }     
            } else  window.location.href = data.link;
           
        }

        return (

            <div className="col-12 col-sm-12  col-md-12 col-lg-4 gy-2 d-flex justify-content-center"
            style={{transitionDelay: index == 0? "0": index == 1? ".2s": ".4s"}}
            >
                <div style={{ maxWidth: 400 }}>
                    <Card>
                        <div>
                            <h3 className="mb-1 fst-italic" 
                            style={{cursor: "pointer", textAlign: "center"}}
                            onClick={() => viewWebsite(data)}
                            >{data.name}</h3>
                            <hr className="mt-0" />
                            <div className="container"  style={{minHeight: 150}}>
                                <ul className="list-inline mb-0 d-flex justify-content-center">
                                    {data.imgs.map((x, i) =>
                                        <li className="list-inline-item " key={i}><img style={{ width: 35 }} src={x} alt={x}/></li>
                                    )}
    
    
                                </ul>
                                <div  className="text-center">
                                    <p onClick={(e) => e.preventDefault()}>
                                        {data.desc} <br/>
                                         
                                    </p>
                                    <a className="fw-bold" href={"#/"} onClick={() => viewWebsite(data)} >Visit Site</a>
                                </div>
                                
                            </div>
                          
                           
                        </div>
                    </Card>
                </div>
            </div>


        )
    }
/*
    export default Example*/