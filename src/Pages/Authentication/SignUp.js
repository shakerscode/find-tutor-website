import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import { toast } from 'react-toastify';


const SignUp = () => {
    const [userInfo, setUserInfo] = useState({})
    console.log(userInfo);
    const [signInError, setSignInError] = useState('')
    const [confirmPassError, setConfirmPassError] = useState('')
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, profileUpdating, ProfileError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, emailVerificationError] = useSendEmailVerification(auth);

    const onSubmit = async data => {
        if (data?.password !== data?.confPassword) {
            return setConfirmPassError('Password mismatched')
        } else {
            const currentUser = {
                name: data?.name,
                email: data?.email,
                role: data?.userIdentity
            }
            setUserInfo(currentUser)
             setConfirmPassError('') 
            await createUserWithEmailAndPassword(data?.email, data?.password) 
            await updateProfile({ displayName: data?.name})
            await sendEmailVerification();
        }
    };
    
    useEffect(()=>{
        if(user){
            console.log(user);
            toast.success('Logged in! A verification link sent. Please verify with that link')
            return navigate('/')
        }
    },[user, navigate])
    
    if (loading || profileUpdating || sending) {
       return <Spinner></Spinner> 
    }
    if (error || ProfileError || emailVerificationError) { 
        return setSignInError(error?.message || ProfileError?.message || emailVerificationError?.message)
    }
   

    return (
        <div>
            <div className=''>
                <div className="card w-96 mx-auto my-6 min-h-screen  shadow-xl">
                    <div className="card-body">
                        <h1 className='text-center text-2xl text-black font-bold py-3'>Sign Up Please</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="label">
                                <span className="label-text text-secondary">Name</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full text-secondary'
                                type="text"
                                placeholder='Enter your name'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name?.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text text-secondary">Email</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full text-secondary'
                                type="email"
                                placeholder='Enter your email'
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
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email?.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text text-secondary">Password</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full text-secondary'
                                type="password"
                                placeholder='Enter your password'
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
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password?.message}</span>}
                            </label>
                            <label className="label">
                                <span className="label-text text-secondary">Confirm Password</span>
                            </label>
                            <input
                                className='input input-bordered input-primary w-full text-secondary'
                                type="password"
                                placeholder='Confirm password'
                                {...register("confPassword", {
                                    required: {
                                        value: true,
                                        message: "Please confirm your password"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.confPassword?.type === 'required' && <span className="label-text-alt text-error">{errors?.confPassword?.message}</span>}
                                {confirmPassError && <span className="label-text-alt text-error">{confirmPassError}</span>}

                            </label>

                            <label className="label">
                                <span className="label-text text-secondary">Sign up as</span>
                            </label>
                            <select
                                className="select select-primary w-full text-secondary"
                                {...register("userIdentity", {
                                    required: {
                                        value: true,
                                        message: "Please select who you are"
                                    }
                                })}
                            >
                                <option>Teacher</option>
                                <option>Student</option>
                            </select>
                            <label className="label">
                                {errors.userIdentity?.type === 'required' && <span className="label-text-alt text-error">{errors?.userIdentity?.message}</span>}
                            </label>
                            {
                                signInError && <span className="label-text-alt text-error">{signInError}</span>
                            }
                            <input className='btn btn-secondary w-full text-white mt-7 block' type="submit" value="Login" />
                        </form>
                        <div>
                            <p className='text-secondary text-center'>Already have an account? <span onClick={() => navigate('/login')} className='text-primary font-bold cursor-pointer'>Login!</span></p>
                        </div>
                        <div className="divider text-secondary">Or</div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;