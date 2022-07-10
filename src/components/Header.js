function Header () {
    return (
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
    )
}

export default Header;