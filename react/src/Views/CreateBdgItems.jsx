
function CreateBdgItems() {

    const onSubmitItems = (ev) => {
        ev.preventDefault();
    }

    return (
        <form id="header-form" onSubmit={onSubmitItems} className="w-50 mx-auto mt-5 border p-5">
            <div className="form-outline mb-4">
                <label className="form-label">cost</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-outline mb-4">
                <label className="form-label">month</label>
                <input type="text" className="form-control" />
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

export default CreateBdgItems;
