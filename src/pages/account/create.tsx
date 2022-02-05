import React, { useState, useEffect } from 'react';
import Navbar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { RootState } from './../../redux/reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import ReactCodeInput from 'react-verification-code-input';
import { handleLogin } from "./../../redux/actions/auth"

export default function Create() { //props: LoginProps
    const [fullname, setFullname] = useState('')
    const [accountId, setAccountId] = useState('')
    const dispatch = useDispatch()
    const history = useNavigate();

    const store = useSelector((state: RootState) => {
        return state.auth;
    });

    const submitForm = () =>{
        console.log("submitform: ", {
            fullname,
            accountId
        })
        dispatch(handleLogin({
            fullname,
            accountId
        }))
        history('/secure-account')
    }

    useEffect(() => {
        let { fullname, accountId } = store
        setFullname(fullname ? fullname : '')
        setAccountId(accountId ? accountId : '')
    }, [store])

    return (
        <React.Fragment>
            <Navbar title={"Create Near Account"} />

            <div className="mx-5 pt-2">
                <p className="text-gray-md mt-5">Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.</p>

                <form className="mt-5">
                    <div>
                        <label className="text-gray-md">Full Name</label>
                        <input className="w-full border border-gray h-12 rounded-lg pl-5 mt-2" placeholder='Ex: John doe'
                            onChange={(e) => setFullname(e.target.value)} value={fullname}
                        />
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center">
                            <label className="text-gray-md">Account ID</label>
                            <i className="fas fa-info-circle ml-2 text-gray-md"></i>
                        </div>
                        <div className="flex mt-2">
                            <input type="text" placeholder="yourname" className="py-3 px-5 text-md border border-gray rounded-l-lg w-full"
                                onChange={(e) => setAccountId(e.target.value)} value={accountId}
                            />
                            <div className="w-28 flex items-center justify-center bg-blue-lighter border-t border-r border-b border-gray rounded-r-lg text-blue-dark font-semibold">.near</div>
                        </div>
                    </div>
                </form>

                <div className="flex justify-center">
                    <button className={`my-5 text-white px-5 py-2 rounded-lg flex items-center ${fullname.length && accountId.length ? "bg-purplePrimary" : "bg-disabled"}`}
                        disabled={fullname.length && accountId.length ? false : true}
                        onClick={() => submitForm()}
                    >
                        Continue
                        <i className="fas fa-chevron-right pl-3"></i>
                    </button>

                </div>
                <p className="text-center mx-2 text-gray-md text-sm">By creating a NEAR account, you agree to the NEAR Wallet
                    <span className="text-purplePrimary cursor-pointer"> Terms & Conditions </span> ans
                    <span className="text-purplePrimary cursor-pointer"> Privacy Policy</span>
                </p>

                <hr className="my-5 text-gray" />

                <p className="text-gray-500 text-center">Already have NEAR account?</p>

                <div className="flex justify-center">
                    <button className={`my-5 text-white px-5 py-2 rounded-lg flex items-center bg-btnBlack`} onClick={() => console.log("Hello")}>
                        Login in with NEAR
                        <i className="fas fa-chevron-right pl-3"></i>
                    </button>
                </div>

            </div>

        </React.Fragment>
    );
}

