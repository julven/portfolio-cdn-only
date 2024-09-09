/*import Card from "./card.jsx"
import Example from "./example.jsx"
import {DataContext} from "./context.jsx"*/

let Examples = () => {

    let {useContext, useEffect} = React;
    // let { DataContext } = context;

    let {datas} = useContext(DataContext)

    useEffect(() => {

        // console.log(datas)

    },[])

    return (
        <section className="hides">
            <div id="example" className="  pb-5 shadow-sm">
                <div className="container-xl py-3">
                    <h1 className="border-bottom ps-2 mb-4 from-left">Examples</h1>
                    <div className="container ">
                        <div className="row d-flex justify-content-center ">
                            {datas.map((x, i) => <Example data={x} index={i} key={i}/>)}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/*export default Examples*/