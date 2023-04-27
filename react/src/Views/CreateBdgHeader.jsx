import {useNavigate} from 'react-router-dom';

function CreateBdgHeader() {

    const navigate = useNavigate();

    const onSubmitHeader = (ev) => {
        ev.preventDefault();
        //Todo send data to backend(axios) and navigate to items form
        navigate("/bdg/create/items");
    }

    return (
        <form id="header-form" onSubmit={onSubmitHeader} className="w-50 mx-auto mt-5 border p-5">
            <div className="form-outline mb-4">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label">Description</label>
                <textarea
                    class="form-control"
                    rows="3"
                ></textarea>
            </div>
            <button
                type="submit"
                className="btn btn-primary btn-sm btn-block mb-4"
            >
                Save
            </button>
        </form>
    );
}

export default CreateBdgHeader;
