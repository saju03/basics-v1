import React from "react"
import ReactDOM from 'react-dom/client'

const header1 = React.createElement('h2', { key: 'ab' }, 'this is a h2 one')
const header2 = React.createElement('h2', { key: 'cd' }, 'this is a h2 two')



const head = <div>hello world</div>; /* babel converts this into => */ const header = React.createElement('div', {
    id: 'abc',
    className: "eoh"
}, [header1, header2])
console.log(header);



const NewCom = ({ it }) => {
    useEffect(() => {
        console.log('rendered');
    }, [])
    return (
        <div>
            new comoponye
        </div>
    )
}




const Main = () => {
   

    return (
        <div>
            {head}
            {header}
          



            hello react
        </div>
    )
}



/* 
this header gives a object and it convert it into html and it renders into the dom
*/

// a component 


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Main />)