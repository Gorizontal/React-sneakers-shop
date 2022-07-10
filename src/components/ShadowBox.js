function ShadowBox () {
    return (
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
    )
}

export default ShadowBox;