import Card from "./components/Card";
import ShadowBox from "./components/ShadowBox";
import Header from "./components/Header";



function App() {
  return (
    <div className="wrapper clear">
<ShadowBox />
<Header />
     <div className="content p-40">
      <div className="d-flex justify-between">
        <h1> Super SNEAKERS for YOU </h1>

        <div className="search-block ">
          <img width={14} height={14} src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск ..." />
        </div>
      </div>

       <div className="d-flex justify-between flex-wrap ">

<Card />

       </div>  
      </div> 

    </div>
  );
}

export default App;
