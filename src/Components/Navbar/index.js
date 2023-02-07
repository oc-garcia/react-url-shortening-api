import Button from '../Button'

import './navbar.css'

const Navbar = () => {
    return (
      <header>
        <nav>
            <div>
                <h1>Shortly</h1>
                <a href='/'>Features</a>
                <a href='/'>Pricing</a>
                <a href='/'>Resourcer</a>
            </div>
            <div>
                <button type='button'>Login</button>
                <Button text='Sign Up'/>
            </div>
        </nav>
      </header>
    )
  }

  export default Navbar

