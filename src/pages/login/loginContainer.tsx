import React, { useState } from 'react';
import Navbar from "./../../components/NavBar";
import { useNavigate } from 'react-router-dom';


export default function Login() { //props: LoginProps
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loginOption, setLoginOption] = useState(1)
    const history = useNavigate();

    function submitForm(){
        history('/verification')
    }

    return (
        <React.Fragment>
            <Navbar/>
            <div className="flex justify-center my-5">
                <button className={`${loginOption == 1 ? "border-2 border-gray rounded-lg" : "text-gray-md"} py-1 px-3 mr-2`} onClick={() => setLoginOption(1)}>Email</button>
                <button className={`${loginOption == 2 ? "border-2 border-gray rounded-lg" : "text-gray-md"} py-1 px-3`} onClick={() => setLoginOption(2)}>Phone</button>
            </div>
            <div className="mx-5 pt-2">
                {loginOption == 1 && <input className="w-full border border-gray h-12 rounded-lg focus:border-purplePrimary pl-5" placeholder='Ex: johndoe@gmail.com'
                    onChange={e => setEmail(e.target.value)} value={email}
                />}
                {loginOption == 2 && <input className="w-full border border-gray h-12 rounded-lg focus:border-purplePrimary pl-5" placeholder='Ex (337) 378 8383'
                    onChange={e => setPhone(e.target.value)} value={phone}
                />}

                <div className="flex justify-center">
                    <button className={`my-5 text-white px-5 py-2 rounded-lg flex items-center ${loginOption == 1 && email.length ? "bg-purplePrimary" : (loginOption == 2 && phone.length ? "bg-purplePrimary" : "bg-disabled")}`}
                        disabled={loginOption == 1 && email.length ? false : (loginOption == 2 && phone.length ? false : true)}
                        onClick={submitForm}
                    >
                        Continue
                        <i className="fas fa-chevron-right pl-3"></i>
                    </button>
                </div>

                <p className="text-center mx-2 text-gray-md text-sm">by clicking continue you must agree to near labs
                    <span className="text-purplePrimary cursor-pointer"> Terms & Conditions </span> ans
                    <span className="text-purplePrimary cursor-pointer"> Privacy Policy</span>
                </p>

                <hr className="my-10 text-gray" />

                <p className="text-gray-500 text-center">Already have NEAR account?</p>

                <div className="flex justify-center">
                    <button className={`my-5 text-white px-5 py-2 rounded-lg flex items-center bg-btnBlack`} onClick={() => console.log(phone.length)}>
                        Login in with NEAR
                        <i className="fas fa-chevron-right pl-3"></i>
                    </button>
                </div>
            </div>

        </React.Fragment>
    );
}

