import {useState, useEffect, useContext} from 'react';
import appApi from "../Api/appAxios";
import {useNavigate, useSearchParams, Link} from 'react-router-dom';
import AppContext from "../Contexts/AppContext";


function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [paginationLinks, setPaginationLinks] = useState([]);

    const navigate = useNavigate();

    const appContext = useContext(AppContext);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        getUsers();
    },[searchParams.get("page")]);

    const getUsers = (page) => {
        setLoading(true);
        appApi.get(`users?page=${searchParams.get("page")}`)
        // appApi.get(`users?page=${page}`)
            .then(response => {
                setUsers(response.data.data);
                setPaginationLinks(response.data.links);
                setLoading(false);
            })
            .catch(() => setLoading(false))
    }

    const deleteHandler = (ev, id) => {
        ev.preventDefault();
        if(!window.confirm('Are you sure you wnat to delete this user?')){
            return
        }
        appApi.delete(`users/${id}`)
            .then(() => {
                appContext.setNotification('user is deleted successfully');
                getUsers();
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
                    {
                        loading
                            ?
                            <tbody>
                                <tr>
                                    <td colSpan="5">
                                        Loading...
                                    </td>
                                </tr>
                            </tbody>
                            :
                            <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/users/edit/${user.id}`}
                                                  className="btn btn-primary m-2">edit</Link>
                                            <button onClick={(ev) => deleteHandler(ev, user.id)}
                                                    className="btn btn-danger m-2">delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>

                    }
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {
                        paginationLinks.map((link) => (
                            <li className="page-item" key={link.label}>

                                {/* استفاده از تگ <a> اشتباه است چون صفحه رفرش می شود */}
                                {/*<a className="page-link" href={`http://127.0.0.1:4000/users?page=${link.label}`}>{link.label}</a>*/}


                                {/* استفاده از تگ <Link> درست است ولی چالشی که وجود دارد این است که زمانی که کاربر روی دکمه های pagination کلیک می کند
                                 یعنی زمانی که مقدار پارامتر در url عوض می شود ، تابع useEffect اجرا نمی شود و بنابراین دیتایی از سمت بک اند دریافت نمی شود
                                 دلیل این اتفاق این است که تابع useEffect فقط یکبار و به هنگام mounting اجرا می شود ، راه حل این قضیه آنست که تابع useEffect
                                 هم به هنگام mounting و هم در هنگامی که پارامتر عوض می شود، اجرا بشود پس به ورودی دوم تابع useEffect به جای یک آرایه ی خالی ،
                                 [searchParams.get("page")]
                                 رو پاس می دهیم
                                 */}
                                 <Link className="page-link" to={`/users?page=${link.label}`}>{link.label}</Link>


                                {/*<button className="page-link" onClick={() => getUsers(link.label)}>{link.label}</button>*/}
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default Users;
