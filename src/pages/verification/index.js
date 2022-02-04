import React, { useState } from 'react';
import Navbar from "./../../components/NavBar";


export default function Verification() { //props: LoginProps
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loginOption, setLoginOption] = useState(1)

    return (
        <React.Fragment>
            <Navbar title={"Verification"}/>
        
            <div className="mx-5 pt-2">
                <div className="flex justify-center">
                    <button className={`my-5 text-white px-5 py-2 rounded-lg flex items-center ${loginOption == 1 && email.length ? "bg-purplePrimary" : (loginOption == 2 && phone.length ? "bg-purplePrimary" : "bg-disabled")}`}
                        disabled={loginOption == 1 && email.length ? false : (loginOption == 2 && phone.length ? false : true)}
                        // onClick={props.login}
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

