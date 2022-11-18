import {
    LOGIN_USER,
    LOGIN_USER_LOADING,
    DATA_USER,
    DATA_FRIENDS
    // REGISTER_USER_LOADING,
    // REGISTER_USER,
} from '../types';
import clienteAxios from '../config/axios'

//import { useState } from 'react';
//const [alerta, setAlerta] = useState({})




export function loginUsuario(info) {
    return async (dispatch) => {
        dispatch(loadingLogin())

        try {
            const data = await clienteAxios.post('/users/login', info)
            //console.log(data)
            localStorage.setItem('token', data.data.token)
            dispatch(logearse(data.data));
            
        } catch (error) {
            // setAlerta({
            //     msg: error.response.data.msg,
            //     error: true
            // })
            console.log(error)
        }
    }
}

const logearse = (data) => ({
    type: LOGIN_USER,
    payload: data,
})

const loadingLogin = () => ({
    type: LOGIN_USER_LOADING,
    payload: true,
})

export function regiserUsuario(info) {

}

export function userAuthenticate(token) {
    return async (dispatch) => {
        dispatch(loadingLogin())

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
    
        try {
            const {data} = await clienteAxios('/users/profile', config)
            console.log(data)
            dispatch(dataUser(data))
        } catch (error) {
            console.log(error)
        }
    }
    
}

const dataUser = (data) => ({
    type: DATA_USER,
    payload: data,
})

export function getUserFriends(id, token) {
    return async(dispatch) => {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        console.log('idamigo', id)
        dispatch(loadingLogin())

        try {
            const {data} = await clienteAxios(`/users/profile-friend/${id}`, config)
            console.log(data)

            dispatch(dataFriendsUser(data))
        } catch (error) {
            console.log(error)
        }
    }
}

const dataFriendsUser = (data) => ({
    type: DATA_FRIENDS,
    payload: data
})

// export function getUserConversationa() {
//     return async(dispatch) => {
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         try {
//             //const {data} = await clienteAxios(`/users/profile-friend/${id}`, config)
            
//         } catch (error) {
            
//         }
//     }
// }