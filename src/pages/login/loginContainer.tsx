import React, { useState, useEffect } from 'react';
import Navbar from "./../../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './../../redux/reducers/rootReducer'
import { handleLogin } from "./../../redux/actions/auth"

import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    email: string;
    phone: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address"),
    phone: Yup.string()
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Phone number is not valid"
        )
})

export default function Login() { //props: LoginProps
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loginOption, setLoginOption] = useState(1)
    const history = useNavigate();
    const dispatch = useDispatch()

    const store = useSelector((state: RootState) => {
        return state.auth;
    });

    function submitForm(data: FormValues) {
        const { email, phone } = data
        dispatch(handleLogin({
            method: loginOption,
            email,
            phone
        }))
        history('/verification')
    }

    useEffect(() => {
        let { email, phone, method } = store
        setEmail(email)
        setPhone(phone)
        setLoginOption(method)
    }, [])

    return (
        <React.Fragment>
            <Navbar />
            <div className="flex justify-center my-5">
                <button className={`${loginOption == 1 ? "border-2 border-gray rounded-lg" : "text-gray-md"} py-1 px-3 mr-2`} onClick={() => setLoginOption(1)}>Email</button>
                <button className={`${loginOption == 2 ? "border-2 border-gray rounded-lg" : "text-gray-md"} py-1 px-3`} onClick={() => setLoginOption(2)}>Phone</button>
            </div>
            <div className="mx-5 pt-2">
                <Formik
                    initialValues={{
                        email,
                        phone
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
                            {loginOption == 1 && <Field id="email" name="email" placeholder='Ex: johndoe@gmail.com'
                                className={`w-full border border-gray h-12 rounded-lg focus:border-purplePrimary pl-5 ${errors.email && "border-danger"}`} />}
                            <p className="text-danger mt-1 text-sm">{errors.email}</p>

                            {loginOption == 2 && <Field id="phone" name="phone"
                                className={`w-full border border-gray h-12 rounded-lg focus:border-purplePrimary pl-5 ${errors.phone && "border-danger"}`}
                                placeholder='Ex (337) 378 8383' />}
                            <p className="text-danger mt-1 text-sm">{errors.phone}</p>

                            <div className="flex justify-center">
                                <button className={`my-5 text-white px-5 py-2 rounded-lg flex items-center ${loginOption == 1 && values.email.length && isValid ? "bg-purplePrimary" : (loginOption == 2 && values.phone.length && isValid ? "bg-purplePrimary" : "bg-disabled")}`}
                                    disabled={loginOption == 1 && values.email.length && isValid && isValid ? false : (loginOption == 2 && values.phone.length && isValid && isValid ? false : true)}
                                    type="submit"
                                >
                                    Continue
                                    <i className="fas fa-chevron-right pl-3"></i>
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

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

