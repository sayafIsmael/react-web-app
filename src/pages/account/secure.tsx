import React, { useState } from 'react';
import Navbar from "../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { RootState } from './../../redux/reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import ReactCodeInput from 'react-verification-code-input';
import { handleLogin } from "./../../redux/actions/auth"

import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    password: string;
    confirmPassword: string;
}

const validationSchema = Yup.object({
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export default function Secure() { //props: LoginProps
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const history = useNavigate();

    const store = useSelector((state: RootState) => {
        return state.auth;
    });

    function submitForm(data: FormValues) {
        const { password, confirmPassword } = data
        dispatch(handleLogin({
            password,
            confirmPassword
        }))
        history('/dashboard')
        localStorage.setItem("user", JSON.stringify(store.auth))
    }


    return (
        <React.Fragment>
            <Navbar title={"Secure your account"} />

            <div className="mx-5 pt-2">
                <p className="text-gray-md mt-5">Keep your apps safe from other with access to your computer.</p>

                <Formik
                    initialValues={{
                        password,
                        confirmPassword
                    }}
                    enableReinitialize
                    onSubmit={(
                        values: FormValues,
                        { setSubmitting }: FormikHelpers<FormValues>
                    ) => {
                        setTimeout(() => {
                            submitForm(values);
                            setSubmitting(false);
                        }, 500);
                    }}
                    validationSchema={validationSchema}
                >
                    {({
                        values,
                        errors,
                        isValid,
                        dirty,
                    }) => (
                        <Form>
                            <div className="mt-5">
                                <label className="text-gray-md">Password</label>
                                <Field type={"password"} id="password" name="password" placeholder='' className={`mt-2 w-full border border-gray h-12 rounded-lg focus:border-purplePrimary pl-5 ${errors.password && "border-danger"}`} />
                                <p className="text-danger mt-1 text-sm">{errors.password}</p>
                            </div>
                            <div className="mt-5">
                                <label className="text-gray-md">Confirm Password</label>
                                <Field type={"password"} id="confirmPassword" name="confirmPassword" placeholder='' className={`mt-2 w-full border border-gray h-12 rounded-lg focus:border-purplePrimary pl-5 ${errors.password && "border-danger"}`} />
                                <p className="text-danger mt-1 text-sm">{errors.confirmPassword}</p>
                            </div>
                            <div className="flex justify-center">
                                <button className={`my-5 text-white px-5 py-2 rounded-lg flex items-center ${values.password.length && values.confirmPassword.length && isValid ? "bg-purplePrimary" : "bg-disabled"}`}
                                    disabled={isValid ? false : true}
                                    onClick={() => submitForm(values)}
                                >
                                    Continue
                                    <i className="fas fa-chevron-right pl-3"></i>
                                </button>

                            </div>
                        </Form>
                    )}
                </Formik>

                {/* <form className="mt-5">
                    <div>
                        <label className="text-gray-md">Password</label>
                        <input type="password" className="w-full border border-gray h-12 rounded-lg focus:border-purplePrimary pl-5 mt-2" placeholder=''
                            onChange={e => setPassword(e.target.value)} value={password}
                        />
                    </div>
                    <div className="mt-5">
                        <label className="text-gray-md">Confirm Password</label>
                        <input type="password" className="w-full border border-gray h-12 rounded-lg focus:border-purplePrimary pl-5 mt-2" placeholder=''
                            onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}
                        />
                    </div>
                </form>

                <div className="flex justify-center">
                    <button className={`my-5 text-white px-5 py-2 rounded-lg flex items-center ${password.length && confirmPassword.length ? "bg-purplePrimary" : "bg-disabled"}`}
                        disabled={password.length && confirmPassword.length ? false : true}
                        onClick={() => submitForm()}
                    >
                        Continue
                        <i className="fas fa-chevron-right pl-3"></i>
                    </button>
                </div> */}

                <p className="text-center mx-2 text-gray-md text-sm">By creating a NEAR account, you agree to the NEAR Wallet
                    <span className="text-purplePrimary cursor-pointer"> Terms & Conditions </span> ans
                    <span className="text-purplePrimary cursor-pointer"> Privacy Policy</span>
                </p>



            </div>

        </React.Fragment>
    );
}

