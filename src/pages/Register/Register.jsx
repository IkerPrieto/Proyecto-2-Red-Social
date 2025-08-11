import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/auth/authSlice'
import { notification } from 'antd';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '', age: ''})
    const { name, email, age, password, password2 } = formData

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            return notification.error({
                message: 'Error',
                description: 'Passwords does not match',
            })
        } else {
            notification.success({
                message: 'Success',
                description: 'User registered!',
            })
            return dispatch(register(formData))
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" value={name} onChange={onChange} />
            <input type="email" name="email" value={email} onChange={onChange} />
            <input type="password" name="password" value={password} onChange={onChange} />
            <input type="password" name="password2" value={password2} onChange={onChange} />
            <input type='number' name="age" value={age} onChange={onChange} />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register