import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import appApi from "../Api/appAxios";
import {useNavigate} from 'react-router-dom';

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        appApi.get('users')
            .then(response => {
                setUsers(response.data.data);
                setLoading(false);
            })
            .catch(err => console.log(err))
    },[]);

    const deleteHandler = (id) => {
        appApi.delete(`users/${id}`)
            .then(() => {
                console.log('user is deleted');
                navigate('/users');
            })
            .catch(err => {console.log(err)});
    }

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
                                            <button onClick={() => deleteHandler(user.id)} className="btn btn-danger m-2">delete</button>
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
