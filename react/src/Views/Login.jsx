function Login() {
    return (
        <form className="w-25 m-auto border p-5">
            <div className="form-outline mb-4">
                <label className="form-label">Name</label>
                <input type="text" id="" className="form-control" />
            </div> 
            <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                <input type="password" id="" className="form-control" />
            </div>      
            <button type="button" className="btn btn-primary btn-sm btn-block mb-4">Sign in</button>
        </form>
    )
}

export default Login;