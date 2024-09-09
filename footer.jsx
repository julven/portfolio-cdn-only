

let Footer = () => {

    let [date] = React.useState(new Date());

    return (
        <div onClick={e => e.preventDefault()}>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <p className="text-light text-center mx-auto">
                        <b>Julven Condor {date.getFullYear()}</b><br />
                        Created using <b>Bootstrap</b> and <b>ReactJs</b>

                    </p>
                </div>
            </nav>
        </div>
    )
}


/*export default Footer*/