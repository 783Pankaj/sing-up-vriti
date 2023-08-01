import React from 'react'
import '../components/singup.css'
import { useForm } from 'react-hook-form'
const SingUp = () => {
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm(
        {
            // mode:'onChange'
            mode: 'onTouched'
        }
    );
    const onSubmit = (data) => console.log(data)
    console.log(errors)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='heading'><h1>Sing Up</h1></div>
                <div className='container'>
                    <label className='label-name' htmlFor='fname'>First Name*</label>
                    <input className='userName'
                        placeholder='Enter your First Name'
                        type='text' 
                        id='fname'
                        name='fname'
                        {...register('fname',
                        {
                            required:true,
                            validate:{
                                minLength: (v) => v.length >= 4
                            }
                        }
                        )}
                        />
                         {errors.fname?.type === 'required' && (<small>Username is required</small>)}
                    {errors.fname?.type === 'minLength' && "Enter 4 char"}

                    <label className='label-name' htmlFor='mname'>Middle Name</label>
                    <input className='userName'
                        placeholder='Enter your Middle Name'
                        type='text'
                         id='mname'
                         name='mname'
                         {...register('mname')}
                        />

                    <label className='label-name' htmlFor='lname'>Last Name</label>
                    <input className='userName'
                        placeholder='Enter your Last Name'
                        type='text' 
                        id='lname'
                        name='lname'
                        {...register('lname')}
                        />

                </div>
                 <div className='container'>
                     <label htmlFor='email' className='labal-email'>Email ID</label>
                      <input className='userEmail' 
                             type='email'
                             id='email'
                             name='email'
                             placeholder='enter email here'
                             {...register('email', {
                                 required: 'This field is Required',
                                 validate: {
                                     matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                                 },
                             })}
                         />
                         {errors.email && (<div>{errors.email.message}</div>)}

                    <div className='container'>
                        <label htmlFor='password' className='labal-password'>Password*</label>
                        <input className='userPassword'
                         type='password'
                        id='password'
                        name='password'
                        {...register('password',{ 
                            required:'This field is Required',
                            validate:{
                                maxLength:(v)=>
                                  v.length<=10 || 'not more then 10 digit',
                                 matchPattern: (v)=> /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(v) || 'Password must be valid'
                            }
                        })}
                    />
                    {errors.password?.message && (<small>{errors.password.message}</small>)}
                    </div>

                    <div className='container' >
                    <label htmlFor='Confpassword' className='labal-con-pass'>Conform Password</label>
                    <input className='confuserPassword'
                        type='password'
                        id='Confpassword'
                        name='Confpassword'
                        {...register('Confpassword',{ 
                            required:'This field is Required',
                            validate:{
                                maxLength:(v)=>
                                  v.length<=10 || 'not more then 10 digit',
                                 matchPattern: (v)=> v=== getValues('password') || "password dose not match",
                                // value:(value)=> value === getValues('password') || "password dose not match"
                            }
                        })}
                    />
                    {errors.Confpassword?.message && (<small>{errors.Confpassword.message}</small>)}
                </div>
                </div>
                <div class="clearfix">
                    <button type="submit" className="signupbtn">Sign Up</button>
                    {/* <input type="reset" value="Standard Reset Field Values" /> */}
                    {/* <input
        type="button"
        onClick={() => reset()}
        value="Custom Reset Field Values & Errors"
      /> */}
                </div>
            </form>
            <div className='or-singup'>
                    <p>Or Singup with</p>
                </div>
                <div className='socail-btn'>
                    <button className='google'>Google</button>
                    <button className='linkedin'>Linkedin</button>
                </div>
                <div className='login'>
                    <p>Do have an account*? <label>Login</label></p>
                </div>
        </div>
    )
}

export default SingUp
