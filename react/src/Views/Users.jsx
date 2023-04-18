import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import appApi from "../Api/appAxios";

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        appApi.get('users')
            .then(response => {
                setUsers(response.data.data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    },[]);

    return (
        <>
            <Link to="/users/create" className="btn btn-success m-2">create</Link>
            <table id="" className="table table-bordered table-hover dataTable">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        loading
                            ? <h2>Loading...</h2>
                            :
                               users.map((user,index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/users/edit/${user.id}`} className="btn btn-primary m-2">edit</Link>
                                            <Link to="" className="btn btn-danger m-2">delete</Link>
                                        </td>
                                    </tr>
                                ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Users;
