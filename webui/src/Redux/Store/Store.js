import {configureStore} from '@reduxjs/toolkit'
import {loginReducer} from '../Reducer/loginReducer'

const store = configureStore({
    reducer:{
        loginStore:loginReducer
    }
})

export default store