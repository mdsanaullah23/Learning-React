import UserContextProider from './context/UserContextProvider'
import  Login  from './components/Login'
import Profile from './components/Profile'
import './App.css'

function App() {
  

  return (
    <>
      <UserContextProider>
        <Login/>
        <Profile/>
      </UserContextProider>
    </>
  )
}

export default App
