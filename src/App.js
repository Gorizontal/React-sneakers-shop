import Card from "./components/Card";
import ShadowBox from "./components/ShadowBox";
import Header from "./components/Header";

const arr = [
  {name: "Мужские кроссовки Nike Blazer Mid Suede", imageUrl: "/img/sneakers/1.jpg" , price: 12990},
  {name: "Мужские Кроссовки Nike Air Max 270",imageUrl: "/img/sneakers/2.jpg" , price: 10990},
  {name: "Мужские Кроссовки Nike Blazer Mid Suede",imageUrl: "/img/sneakers/3.jpg" , price: 8990},
  {name: "Кроссовки Puma X Aka Boku Future Rider",imageUrl: "/img/sneakers/4.jpg" , price: 12990}
]



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

            {arr.map(obj => <Card title = {obj.name} imageUrl = {obj.imageUrl} price = {obj.price} />)}
            
            </div>  
       </div> 
    </div>
  );
}

export default App;
