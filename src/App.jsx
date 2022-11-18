import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './paginas/Login'
import Register from './paginas/Register'

//redux
import { Provider } from 'react-redux';
import store from './store';
import RutaPrivada from './layouts/RutaPrivada';
import Home from './paginas/Home';
import Profile from './paginas/Profile';
import Chat from './paginas/Chat';



function App() {
  

  return (
    <BrowserRouter>

      <Provider store={store}>

        <Routes>
          <Route path='/' element={<AuthLayout/>}>
            <Route index element={<Login/>} />
            <Route path='register' getComponent={async () => {
              return (await import(/* webpackChunkName: "Register"*/'./paginas/Register')).default
            }} />

          </Route>

          <Route path='/userlog' element={<RutaPrivada />}>
            <Route index element={<Home />} />
            <Route path='profile/:id' element={<Profile />} />
            <Route path='chat/:id' element={<Chat />} />

          </Route>

        </Routes>


      </Provider>
    
      
    
    </BrowserRouter>
  )
}

export default App
