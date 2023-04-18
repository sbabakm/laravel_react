import {useContext, useRef, useState, useEffect} from "react";
import AppContext from "../Contexts/AppContext";
import appApi from "../Api/appAxios";
import {useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";

function EditUser() {

    const [errors, setErrors] = useState(null);

    const appContext = useContext(AppContext);


    const navigate = useNavigate();

    const nameElement = useRef();
    const emailElement = useRef();
    const passwordElement = useRef();
    const passwordConfirmationElement = useRef();

    const params = useParams();

    useEffect(() => {
        appApi.get(`users/${params.id}`)
            .then(response => {
                nameElement.current.value = response.data.name;
                emailElement.current.value = response.data.email;
            })
            .catch(err => console.log(err))
    },[]);

    const onSubmit = (ev) => {

        ev.preventDefault();

        let data = {
            name: nameElement.current.value,
            email: emailElement.current.value,
            password: passwordElement.current.value,
            password_confirmation: passwordConfirmationElement.current.value,
        }

        appApi.put(`users/${params.id}`, data)
            .then(() => {
                console.log('user is updated');
                navigate('/users');
            })
            .catch(err => {
                const response = err.response;
                //422 is validation error
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }});
    }

    return (
        <form onSubmit={onSubmit} className="w-25 m-auto border p-5">
            {
                errors &&
                <div className="alert alert-danger">
                    {
                        Object.keys(errors).map((item, index) => (
                            <span key={item}>
                                    <span>{index}-</span>
                                    <span>{errors[item][0]}</span>
                                    <br/>
                                </span>
                        ))
                    }
                </div>
            }
            <div className="form-outline mb-4">
                <label className="form-label">Name</label>
                <input type="text" id="name" className="form-control" ref={nameElement} />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label">Email</label>
                <input type="email" id="email" className="form-control" ref={emailElement}/>
            </div>
            <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input type="password" id="password" className="form-control" ref={passwordElement}/>
            </div>
            <div className="form-outline mb-4">
                <label className="form-label">Repeat your password</label>
                <input type="password" id="password-confirmation" className="form-control" ref={passwordConfirmationElement}/>
            </div>
            <button type="submit" className="btn btn-primary btn-sm btn-block mb-4">Register</button>
        </form>
    )
}

export default EditUser;
