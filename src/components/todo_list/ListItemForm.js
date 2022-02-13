import React from 'react';

const ListItemForm = ({
  handleFormSubmit,
  handleOnChange,
  currentItemValue,
  addBtn,
}) => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Add Item From Here...
          </label>
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              id="autoSizingInputGroup"
              placeholder="Add Item From Here..."
              value={currentItemValue}
              onChange={handleOnChange}
            />
            <button className="btn btn-primary input-group-text" type="submit">
              {addBtn ? 'Add' : 'Edit'} Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListItemForm;
