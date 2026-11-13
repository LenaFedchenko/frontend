import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api/baseApi";
import { Link } from "react-router-dom";


export interface LoginFormData {
    email: string;
    password: string;
}

export function Login() {
    const { register, handleSubmit } = useForm<LoginFormData>()
    const [loginUser] = useLoginMutation()

    async function onSubmit(data: LoginFormData) {
        try {
            await loginUser(data).unwrap()
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='enter your email' {...register("email")}/>
                <input type="password" placeholder='enter your password' {...register("password")}/>
                <button type="submit">Login</button>
            </form>
            <Link to="/users/register" className="candy-login">
                Registration
            </Link>
        </div>
    )
}

export default Login
