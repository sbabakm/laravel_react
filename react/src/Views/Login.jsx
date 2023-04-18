import {useContext, useRef, useState} from "react";
import appApi from '../Api/appAxios';

//import contexts
import AppContext from '../Contexts/AppContext';

function Login() {

    const [errors, setErrors] = useState(null);

    const appContext = useContext(AppContext);

    const emailElement = useRef();
    const passwordElement = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault();

        let data = {
          email : emailElement.current.value,
          password : passwordElement.current.value,
        };

        appApi.post('login',data)
              .then(response => {
                  appContext.setUser(response.data.user);
                  appContext.setToken(response.data.token);
              })
              .catch(err => {
                  const response = err.response;
                  //422 is validation error
                  if (response && response.status === 422) {
                      setErrors(response.data.errors);
                  }
              });
    }

    return (
        <form onSubmit={onSubmit} className="w-25 m-auto border p-5">
            {
                errors &&
                <div className="alert alert-danger">
                    {
                        Object.keys(errors).map((item,index) => (
                            <span key={item}>
                                    <span>{index}-</span>
                                    <span>{errors[item][0]}</span>
                                    <br />
                                </span>
                        ))
                    }
                </div>
            }
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
