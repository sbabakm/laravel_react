import {useRef} from "react";
import appApi from '../Api/appAxios';

function Login() {
    const emailElement = useRef();
    const passwordElement = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault();

        let data = {
          email : emailElement.current.value,
          password : passwordElement.current.value,
        };

        appApi.post('login',data)
              .then(response => console.log(response))
              .catch(err => console.log(err));
    }

    return (
        <form onSubmit={onSubmit} className="w-25 m-auto border p-5">
            <div className="form-outline mb-4">
                <label className="form-label">Email</label>
                <input ref={emailElement} type="email"  className="form-control" />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input ref={passwordElement} type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary btn-sm btn-block mb-4">Sign in</button>
        </form>
    )
}

export default Login;
