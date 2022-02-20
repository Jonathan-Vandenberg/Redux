import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

import classes from './Auth.module.css'

const Auth = () => {
  const dispatch = useDispatch()

  const userLoginHandler = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={userLoginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
