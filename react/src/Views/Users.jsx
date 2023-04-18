import {useState, useEffect} from 'react';
import appApi from "../Api/appAxios";

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        appApi.get('users')
            .then(response => {
                setUsers(response.data.data);
            })
            .catch(err => console.log(err))
    },[]);

    return (
        <>
            <table id="" className="table table-bordered table-hover dataTable">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>

                    {
                        users.map((user,index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}

export default Users;
