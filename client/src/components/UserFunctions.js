import axios from 'axios'

export const register = newUser => {
    return axios
        .post('/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
        })
        .then(res => {
            console.log('Registered!')
            alert("Registred Successfully")
        })
}


