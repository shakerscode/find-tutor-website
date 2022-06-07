import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div   className='flex justify-center items-center my-10'>
            <div  className="card w-96  shadow-xl">
                <div  className="card-body">
                    <h2   className='text-center text-3xl text-secondary font-bold'>Login</h2>
                    <form   className='' onSubmit={handleSubmit(onSubmit)}>
                        <div  className="form-control w-full max-w-xs">
                            <label  className="label">
                                <span  className="label-text text-secondary">Email</span>
                            </label>
                            <input
                                type="Email"
                                placeholder="Enter your email"
                                  className="input input-bordered input-primary text-secondary w-full "
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'Invalid Email'
                                    }
                                })}
                            />

                            <label  className="label">
                                {errors.email?.type === 'required' && <span  className="label-text-alt text-error">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span  className="label-text-alt text-error">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div  className="form-control w-full max-w-xs">
                            <label  className="label">
                                <span  className="label-text text-secondary">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                  className="input input-bordered input-primary text-secondary w-full "
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Minimum six character needed'
                                    }
                                })}
                            />
                            <label  className="label">
                                {errors.password?.type === 'required' && <span  className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span  className="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                        </div>
                            <p  className="text-secondary text-lg ">Forget password? <span   className='text-primary font-bold cursor-pointer'>Reset</span></p>
                        <input   className='btn btn-secondary w-full text-white mt-2' type="submit" value="Login"/>
                    </form>
                    <div>
                        <p    className='text-secondary text-center'>Don't have an account? <span onClick={()=> navigate('/signup')}   className='text-primary font-bold cursor-pointer'>Sign Up!</span></p>
                    </div>
                    <div   className='divider text-secondary'>Or</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>

        </div>
    );
};

export default Login;