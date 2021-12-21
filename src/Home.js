import { useState } from "react";

const Home = () => {

    // const name = 'Ayon';
    const [name, setName] =  useState('Ayon');
    const [age, setAge]   =  useState(18);

    const handleClick = () => {

        // name = 'Arif Faysal'
        // console.log(name)    // is being updated but doesn't re-render
        
        setName('Arif Faysal'); // re-render
        setAge(27);             // re-render
    }
    
    return ( 
        <div className="home">
            <h2>Home page</h2>
            <p>{ name }{', '}{ age }{' Y'}</p>
            <button onClick={ handleClick }>click - invoke now</button>
        </div>
     );
}
 
export default Home;