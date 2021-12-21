import './App.css';

function App() {

  const title = 'Welcome to Z3R0\'s Blog'
  const likes = 90;

  const author = { name: 'Author-Name', published: '2021-03-05' } // obj directly can not be rendered
  const isActive = true; // doesn't render

  const link = 'https://google.com/';

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        {/* <p>{ author }</p> */}
        {/* <p>{ isActive }</p> */}
        <p>{ 10 }</p>
        <p>{ 'string' }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ (Math.random() * 10).toFixed(3) }</p>
        <a href={ link } target={ '_blank' }>Google</a>
      </div>
    </div>
  );
}

export default App;
