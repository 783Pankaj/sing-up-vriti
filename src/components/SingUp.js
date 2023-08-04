import React, { useState } from 'react'
import '../components/singup.css'
import { useForm } from 'react-hook-form'
import Modal from "./Modal";
import LeftContainer from './LeftContainer';

const SingUp = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm(
        {
            // mode:'onChange'
            mode: 'onTouched'
        }
    );
    const onSubmit = (data) => {
        setFormData(data);
        setShowModal(true)
        console.log(data)
    }
    const closeModal = () => {
        setShowModal(false);
        reset();
    };
    console.log(errors)
    return (
        <>
            <div className='vritiLogo'>
                <img src='vriti-logo.svg' alt='' />
            </div>
            <LeftContainer />
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='heading'><h1>Sign Up</h1></div>
                    <div className='first_row'>
                        <div className="fname">
                            <p className="fname_p1">
                                <label className='label-name' htmlFor='fname'>First Name *</label>
                            </p>
                            <p className="fname_p2">
                                <input className='userName'
                                    placeholder='Enter your First Name'
                                    type='text'
                                    id='fname'
                                    name='fname'
                                    {...register('fname',
                                        {
                                            required: true,
                                            validate: {
                                                minLength: (v) => v.length >= 4
                                            }
                                        }
                                    )}
                                />
                                {errors.fname?.type === 'required' && (<small className='user-error'>Username is required</small>)}
                                {errors.fname?.type === 'minLength' && (<small className='user-error'>Enter 4 char</small>)}
                            </p>
                        </div>
                        <div className="mname">
                            <p className="mname_p1">
                                <label className='label-name' htmlFor='mname'>Middle Name</label>
                            </p>
                            <p className="mname_p2">
                                <input className='userName'
                                    placeholder='Enter your Middle Name'
                                    type='text'
                                    id='mname'
                                    name='mname'
                                    {...register('mname')}
                                />
                            </p>
                        </div>
                        <div className="lname">
                            <p className="lname_p1">
                                <label className='label-name' htmlFor='lname'>Last Name</label>
                            </p>
                            <p className="lname_p2">
                                <input className='userName'
                                    placeholder='Enter your Last Name'
                                    type='text'
                                    id='lname'
                                    name='lname'
                                    {...register('lname')}
                                />
                            </p>
                        </div>
                    </div>
                    <div className='second_row'>
                        <p className='email_p'>
                            <label htmlFor='email' className='labal-email'>Email ID *</label>
                        </p>
                        <p className='email_input_p'>
                            <input className='userEmail'
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Enter Your Email ID'
                                {...register('email', {
                                    required: 'This field is Required',
                                    validate: {
                                        matchPattern: (v) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                                    },
                                })}
                            />
                        </p>
                        {errors.email && (<small style={{ color: 'red' }}>{errors.email.message}</small>)}
                    </div>
                    <div className='third_row'>
                        <p className='password_p'>
                            <label htmlFor='password' className='labal-password'>Password *</label>
                        </p>
                        <p className='password_input_p'>

                            <input className='userPassword'
                                type='password'
                                id='password'
                                name='password'
                                {...register('password', {
                                    required: 'This field is Required',
                                    validate: {
                                        maxLength: (v) =>
                                            v.length <= 10 || 'not more then 10 digit',
                                        matchPattern: (v) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(v) || 'Password must be valid'
                                    }
                                })}
                            />
                        </p>
                        {errors.password?.message && (<small>{errors.password.message}</small>)}
                    </div>
                    <div className='fourth_row' >
                        <p className='cnf_password_p'>
                            <label htmlFor='Confpassword' className='labal-con-pass'>Conform Password *</label>
                        </p>
                        <p className='cnf_password_input'>
                            <input className='confuserPassword'
                                type='password'
                                id='Confpassword'
                                name='Confpassword'
                                placeholder='Enter Your Conform Password'
                                {...register('Confpassword', {
                                    required: 'This field is Required',
                                    validate: {
                                        maxLength: (v) =>
                                            v.length <= 10 || 'not more then 10 digit',
                                        matchPattern: (v) => v === getValues('password') || "password does not match",
                                        //  value:(value)=> value === getValues('password') || "password dose not match"
                                    }
                                })}
                            />
                        </p>
                        {errors.Confpassword?.message && (<small>{errors.Confpassword.message}</small>)}
                    </div>
                    <div class="clearfix">
                        <button type="submit" className="signupbtn" >Sign Up</button>

                    </div>
                </form>
                <div className='or-singup'>
                    <p>
                        Or Signup with
                    </p>
                </div>
                <div className='socail-btn'>
                    <button className='google googleimg-btn'>Google</button>
                    <button className='linkedin linkedinimg-btn'>Linkedin</button>
                </div>
                <div className='socail-btn_icon'>
                    <button className='google_icon googleimg-btn_icon'></button>
                    <button className='linkedin_icon linkedinimg-btn-icon'></button>
                </div>
                <div className='login'>
                    <p>Do you have an account*? <label>Login</label></p>
                </div>
            </div>
            {showModal && (
                <Modal onClose={closeModal}>
                    <h3>Thank You For Signing up.</h3>
                    <h4>Here is your information:</h4>
                    <br />
                    <span>
                        Name: {formData.fname} {formData.mname} {formData.lname}
                        <hr />
                        <br />
                        Email: {formData.email}
                        <hr />
                        <br />
                        Password: {formData.password}
                        <hr />
                    </span>
                </Modal>
            )}
        </>
    )
}
export default SingUp