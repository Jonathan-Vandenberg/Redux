import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

import classes from './Header.module.css'

const Header = () => {
  const authState = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const userLogoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authState && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>

            <li>
              <button onClick={userLogoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
