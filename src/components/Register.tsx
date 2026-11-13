import { useForm } from 'react-hook-form';
import { useRegisterMutation } from '../api/baseApi';
import '../assets/styles/register.css'
import { Link } from 'react-router-dom';

export interface RegisterFormData {
    name: string;
    email: string;
    password: string;
}

export function Register() {
    const { register, handleSubmit } = useForm<RegisterFormData>()
    const [registerUser] = useRegisterMutation()

    async function onSubmit(data: RegisterFormData) {
        try {
            await registerUser(data).unwrap()
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='enter your name' {...register("name")}/>
                <input type="text" placeholder='enter your email' {...register("email")}/>
                <input type="password" placeholder='enter your password' {...register("password")}/>
                <button type="submit">Register</button>
            </form>
            <Link to="/users/login" className="candy-login">
                Login
            </Link>
        </div>
    )
}

export default Register
