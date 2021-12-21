const Home = () => {

    const handleClickAutoInvoked = () => {
        console.log('auto invoked due to ()')
    }

    // const handleClick = (e) => {
        // console.log('Hello - no param passed', e) 
    const handleClick = () => {
        alert(`Hello - no param passed`)
    }

    // const handleClickWithParams = (param, e) => { //called from anonymous funtion
        //  console.log('Hello - ${param}, e)
    const handleClickWithParams = (param) => { //called from anonymous funtion
        alert(`Hello - ${param}`)
    }
    
    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClickAutoInvoked()}>click - auto invoked</button>
            <button onClick={handleClick}>click - invoke now</button>
            <button onClick={ () => handleClickWithParams('Ayon') }>click - invoke now</button>
            {/* <button onClick={ (e) => handleClickWithParams('Ayon', e) }>click - invoke now</button> */}
        </div>
     );
}
 
export default Home;