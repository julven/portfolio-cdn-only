let About = () => {



    return (
        <div className="container-xl pt-4" id="about">
            <h1 className="border-bottom ps-2 from-left hides">About Me</h1>
            <div className="row d-flex align-items-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-5 from-left hides" >
                    <div className="d-flex justify-content-lg-end justify-content-center" >
                        <img src="img/laptop.png" className="img-fluid" style={{ width: 400 }} />
                    </div>

                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 ">
                    <div className="container">
                        <h3 className="fst-italic from-down hides">Committed on getting the job done.</h3>
                        <p className="fs-5 mt-3 mb-5 from-down hides">
                            As a web developer with my skills in <b>HTML, CSS, and JavaScript,</b> I bring websites to life with captivating user interfaces and interactions. 
                            With my understanding of <b>back-end technologies</b>, your front-end experience integrates seamlessly with dynamic back-end functionalities. 
                            Detail-oriented, I deliver visually stunning and highly functional web solutions for my client's expectations. 
                            I dedicate my self to pushing the boundaries of front-end development and creating memorable digital experiences.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

/*export default About*/