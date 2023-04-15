import {useRef, useContext} from "react";
import appApi from '../Api/appAxios';

//import contexts
import AppContext from '../Contexts/AppContext';

function Signup() {

    const appContext = useContext(AppContext);

    const nameElement = useRef();
    const emailElement = useRef();
    const passwordElement = useRef();
    const passwordConfirmationElement = useRef();

    const onSubmit = (ev) => {

        ev.preventDefault();

        let data = {
            name : nameElement.current.value,
            email : emailElement.current.value,
            password : passwordElement.current.value,
            password_confirmation : passwordConfirmationElement.current.value,
        }

        appApi.post('/signup',data)
            .then(({response}) => {
                appContext.setUser(response.user);
                appContext.setToken(response.token);
            })
            .catch(err => {
                const response = err.response;
                //422 is validation error
                if(response && response.status === 422){
                    console.log(response.data.errors);
                }
            })

    }

    return (
        <form onSubmit={onSubmit} className="w-25 m-auto border p-5">
            <div className="form-outline mb-4">
                <label className="form-label">Name</label>
                <input type="text" id="name" className="form-control" ref={nameElement}/>
            </div>
            <div className="form-outline mb-4">
                <label className="form-label">Email</label>
                <input type="email" id="email" className="form-control" ref={emailElement} />
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

export default Signup;
