
function CreateBdgItems() {

    const onSubmitItems = (ev) => {
        ev.preventDefault();
    }

    return (
        <form id="header-form" onSubmit={onSubmitItems} className="w-50 mx-auto mt-5 border p-5">
            <div className="d-flex align-items-center">
                <div className="form-outline mb-4 d-flex align-items-center">
                    <label className="form-label me-2">cost</label>
                    <input type="text" className="form-control me-2" />
                </div>
                <div className="form-outline mb-4 d-flex align-items-center">
                    <label className="form-label me-2">month</label>
                    <input type="text" className="form-control me-2" />
                </div>
            </div>
            <button
                className="btn btn-danger btn-sm btn-block mb-4 d-block"
            >
                add row
            </button>
            <button
                type="submit"
                className="btn btn-primary btn-sm btn-block mb-4"
            >
                Save
            </button>
        </form>
    );
}

export default CreateBdgItems;
