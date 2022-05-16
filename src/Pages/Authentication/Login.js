import React from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-3/6  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center font-bold text-2xl text-secondary">Login</h2>
                    
                    <div class="divider text-secondary">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;