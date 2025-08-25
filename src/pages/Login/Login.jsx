// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { login } from '../../redux/auth/authSlice'

// const Login = () => {
//     const [formData, setFormData] = useState({ email: '', password: '' })
//     const { email, password } = formData

//     const onChange = (e) => {
//         setFormData((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }))
//     }

//     const dispatch = useDispatch()

//     const onSubmit = (e) => {
//         e.preventDefault()
//         dispatch(login(formData))
//     }

//     return (
//         <form
//             onSubmit={onSubmit}
//             autoComplete="off"
//         >
//             <input type="email" name="email" value={email} onChange={onChange} />
//             <input type="password" name="password" value={password} onChange={onChange} />
//             <button type="submit">Login</button>
//         </form>
//     )
// }

// export default Login

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(''); // limpiar errores previos

    try {
      const result = await dispatch(login(formData));

      if (login.fulfilled.match(result)) {
        // Login exitoso: navegar a CreatePost o home
        navigate('/create-post'); // ajusta según tu flujo
      } else {
        // Login fallido
        setError(result.payload || 'Login failed. Check your credentials.');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h1 className="text-2xl mb-4 font-bold text-center">Login</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</div>
      )}

      <form onSubmit={onSubmit} autoComplete="off" className="flex flex-col gap-3">
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;