function App() {
  return (
    <div className="wrapper clear">
      <div style={{display: 'none'}} className="shadow-box">
        <div className="right-box">
          <div className="header-basket d-flex justify-between align-center">
            <h2>Корзина</h2>
            <button><svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
</svg></button>
            </div>
              <div className="items">
              <div className="cart-item d-flex align-center justify-around mb-20">
              <img width={70} height={70} src="/img/sneakers/1.jpg" alt="1" />
              <div>
                <p>Мужские кроссовки <br/> Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
            <button><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
</svg></button>
            </div>
            <div className="cart-item d-flex align-center justify-around mb-20">
              <img width={70} height={70} src="/img/sneakers/1.jpg" alt="1" />
              <div>
                <p>Мужские кроссовки <br/> Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
            <button><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
</svg></button>
            </div>
            <div className="cart-item d-flex align-center justify-around mb-20">
              <img width={70} height={70} src="/img/sneakers/1.jpg" alt="1" />
              <div>
                <p>Мужские кроссовки <br/> Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
            <button><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
</svg></button>
            </div>


            
              </div>
          
          <ul className="finish-price">
            <li>
              <span>Итого:</span>
              <div className="tochki"></div>
              <b>21 498 руб.</b>
            </li>

            <li>
            <span>Налог 5%:</span>
              <div className="tochki"></div>
              <b>1074 руб.</b>
            </li>

          </ul>

          <button className="button-order"><b>Оформить заказ</b>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
        </div>


      </div>


      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="mr-15" width={40} height={40} src="./img/logo.png" alt="2" />
          <div>
            <h3>React Sneackers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="3"/>
            <span> 1205 руб. </span>          
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg"  alt="4"/>
          </li>
        </ul>


      </header>
     <div className="content p-40">
      <div className="d-flex justify-between">
        <h1> Super SNEAKERS for YOU </h1>

        <div className="search-block ">
          <img width={14} height={14} src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск ..." />
        </div>
      </div>

       <div className="d-flex justify-between flex-wrap ">

       <div className="card">
        <div className="favorite"> 
        <img src="/img/unliked.svg" alt="Unlicked" />
        </div>
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="6" />
          <h5 className="mt-10"> Мужские кроссовки Nike Blazer Mid Suede </h5>
          <div className="d-flex justify-between align-center">
            <div>
            <p>Цена: </p>
            <b> 12 999 руб. </b>
            </div>
            <button><svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
</svg></button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
          <h5 className="mt-10">  Мужские Кроссовки Nike Air Max 270 </h5>
          <div className="d-flex justify-between align-center">
            <div>
            <p>Цена: </p>
            <b> 12 999 руб. </b>
            </div>
            <button><svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
</svg></button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
          <h5 className="mt-10"> Мужские Кроссовки Nike Blazer Mid Suede </h5>
          <div className="d-flex justify-between align-center">
            <div>
            <p>Цена: </p>
            <b> 12 999 руб. </b>
            </div>
            <button><svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
</svg></button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
          <h5 className="mt-10"> Мужские Кроссовки Puma X Aka Boku Future Rider </h5>
          <div className="d-flex justify-between align-center">
            <div>
            <p>Цена: </p>
            <b> 12 999 руб. </b>
            </div>
            <button><svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6653 5.13128H7.20219V1.66827C7.20219 0.332907 5.13118 0.332907 5.13118 1.66827V5.13128H1.66805C0.332981 5.13128 0.332981 7.20221 1.66805 7.20221H5.13118V10.6652C5.13118 12.0006 7.20219 12.0006 7.20219 10.6652V7.20221H10.6653C12.0006 7.20221 12.0006 5.13128 10.6653 5.13128Z" fill="#D3D3D3"/>
</svg></button>
          </div>
        </div>

       </div>  
      </div> 

    </div>
  );
}

export default App;
