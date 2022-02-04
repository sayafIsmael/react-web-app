import React, { useState, useEffect } from 'react';
import Navbar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { RootState } from './../../redux/reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import ReactCodeInput from 'react-code-input'
import { handleLogin } from "./../../redux/actions/auth"

export default function Verification() { //props: LoginProps
    const [verificationCode, setVerificationCode] = useState('')
    const dispatch = useDispatch()
    const history = useNavigate();

    const store = useSelector((state: RootState) => {
        return state.auth;
    });

    function submitForm() {
        console.log("submitform: ", {
            verificationCode,
        })
        dispatch(handleLogin({
            verificationCode
        }))
        history('/create-account')
    }

    useEffect(() => {
        let { verificationCode } = store
        console.log("verificationCode: ", verificationCode ? verificationCode : '')
        setVerificationCode(verificationCode)
    }, [])

    return (
        <React.Fragment>
            <Navbar title={"Verification"} />

            <div className="mx-5 pt-2">
                <p className="text-center text-btnBlack mt-5">We've sent a 6-digit verification code to your {store.method == 1 ? "email" : "phone"}</p>
                <p className="text-purplePrimary text-center mt-2">{store.method == 1 ? store.email : store.phone}</p>

                <div>
                    <p className="text-center text-gray-md mt-5">Enter verification code</p>
                    <div className="flex justify-center  my-2">
                        <ReactCodeInput
                            name="code"
                            inputMode='latin'
                            fields={6}
                            // fieldWidth={50}
                            // fieldHeight={50}
                            value={`${verificationCode}`}
                            onChange={(txt) => setVerificationCode(txt)}
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className={`my-5 text-white px-5 py-2 rounded-lg flex items-center ${verificationCode.length == 6 ? "bg-purplePrimary" : "bg-disabled"}`}
                        disabled={verificationCode.length == 6 ? false : true}
                        onClick={() => submitForm()}
                    >
                        Continue
                        <i className="fas fa-chevron-right pl-3"></i>
                    </button>
                </div>

                <hr className="my-5 text-gray" />

                <p className="text-center text-gray-md">Didn't receive your code?</p>

                <p className="text-center text-purplePrimary my-5 cursor-pointer">Send to a different email address</p>

                <p className="text-center text-purplePrimary my-5 cursor-pointer">Resend your code </p>

            </div>

        </React.Fragment>
    );
}

