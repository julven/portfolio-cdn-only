const DataContext = React.createContext()

const DataContextProvider = ({children}) => {
	let {useState} = React
	let [datas] = useState([

        {
            name: "React Person",
            imgs: [
                
                "img/html.jpg",
                
                "img/react.png",
                "img/bootstrap.jpg",
                "img/php.jpg",
                 "img/mysql.jpg",
                
            ],
            desc: "This Web app showcases a simple CRUD (Context, Redux) functions using React library.",
            link: "https://julven.epizy.com/reactperson",
            resticted: false
        },
         {
            name: "Dictionary",
            imgs: [
                
                "img/html.jpg",
                "img/css.jpg",
                "img/react.png",
                "img/bootstrap.jpg",
         
                
            ],
            desc: "A simple Dictionary app created using React library",
            link: "https://julven.epizy.com/dictionary",
            resticted: false
        },
        {
            name: "Vue Blog",
            imgs: [
                
                "img/html.jpg",
                "img/vuejs.png",
                "img/bootstrap.jpg",
                "img/php.jpg",
                 "img/mysql.jpg",
            ],
            desc: "Blog site created by using Vue 3 library as frontend and php and mysql as backend.",
            link: "https://julven.epizy.com/vueblog",
             resticted: false
        },
        {
            name: "Mock Website",
            imgs: [
           
                "img/html.jpg",
                "img/css.jpg",
                "img/react.png",
                "img/bootstrap.jpg"
            ],
            desc: "This website is a mock up of a dance school created by using React library.",
            link: "https://julven.epizy.com/balletschool",
             resticted: false
        },
        {
            name: "Whitesundays",
            imgs: [
                "img/html.jpg",
                "img/css.jpg",
                "img/react.png",
                
            ],
            desc: "Landing page made out of react library about beach tourism in Australia.",
            link: "https://julven.epizy.com/whitesundays",
             resticted: false
        },
        {
            name: "Vue CRUD",
            imgs: [
                "img/html.jpg",
                "img/materialize.png",
                "img/vuejs.png",
                "img/firebase.jpg"
                
            ],
            desc: "CRUD app using vuejs, materialize css, and firebase firestore and authentication",
            link: "https://julven.epizy.com/vueperson",
             resticted: false
        },
        {
            name: "J-Vegie",
            imgs: [
                "img/bubble.png",
                "img/javascript.jpg",
                "img/css.jpg"
                
                
            ],
            desc: "E-commerce website that features vegatables and fruits created using Bubble.IO",
            link: "https://julvenvegie.bubbleapps.io/version-test",
             resticted: false
        },
        {
            name: "J-Homes",
            imgs: [
                "img/bubble.png",
                "img/javascript.jpg",
                "img/css.jpg"
                
                
            ],
            desc: "A house rental website that demontstrates booking functionality created in Bubble.IO",
            link: "https://julvenhomes.bubbleapps.io/version-test/",
             resticted: false
        },
        {
            name: "OttoSEO",
            imgs: [
                "img/bubble.png",
                "img/javascript.jpg",
                "img/css.jpg"
                
                
            ],
            desc: "Blog post article generation app using AI with multiple CMS integrations",
            link: "https://ottoseo.ai/",
             resticted: false
        }

    ])



	return (

		<DataContext.Provider value={{datas}}>
			{children}

		</DataContext.Provider>

	)
}
/*
export  {DataContextProvider, DataContext}*/