import React, { useState } from 'react';

const NewItem = (props) => {
  const [formState, setFormState] = useState({ value: 'display-art' });

  const onCategoryChangeHandler = (event) => {
    setFormState({ value: event.target.value });
  };

  return (
    <div className="card">
      <h6 className="card-header">Add new Item</h6>
      <div className="card-body">
        <form>
          <div className="form-group row">
            <label className="col-md-3 col-form-label" htmlFor="category">
              Category
            </label>
            <div className="col-md-9">
              <select
                className="form-control"
                onChange={onCategoryChangeHandler}
                id="category"
              >
                <option value="display-art">Display Art</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          <hr />

          {formState.value === 'display-art' && (
            <React.Fragment>
              <div className="form-group row">
                <label htmlFor="itemId" className="col-md-3 col-form-label">
                  Item ID
                </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="itemId" />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="itemStorage"
                  className="col-md-3 col-form-label"
                >
                  Storage
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="itemStorage"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="itemName" className="col-md-3 col-form-label">
                  Name
                </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="itemName" />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="itemPeriod" className="col-md-3 col-form-label">
                  Period
                </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="itemPeriod" />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="itemSizes" className="col-md-3 col-form-label">
                  Sizes
                </label>
                <div className="col-md-9"></div>
              </div>

              <div className="form-group row">
                <label htmlFor="imgFile" className="col-md-3 col-form-label">
                  Image
                </label>
                <div className="col-md-9">
                  {/* <div className="btn-group">
                    <button type="button" className="btn btn-secondary">
                      URL
                    </button>
                    <button type="button" className="btn btn-secondary">
                      UPLOAD
                    </button>
                  </div>
                  <div className="input-group">
                    <input type="text" className="form-control" disabled />
                    <span className="input-group-append">
                      <span className="btn btn-secondary">Browse</span>
                    </span>
                  </div> */}

                  <input
                    type="text"
                    placeholder="URL"
                    className="form-control"
                    id="itemUrlImage"
                  />
                </div>
              </div>
            </React.Fragment>
          )}

          {formState.value === 'others' && (
            <React.Fragment>
              <div className="form-group row">
                <label htmlFor="itemId" className="col-md-3 col-form-label">
                  Item ID
                </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="itemId" />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="itemStorage"
                  className="col-md-3 col-form-label"
                >
                  Storage
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="itemStorage"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="itemName" className="col-md-3 col-form-label">
                  Name
                </label>
                <div className="col-md-9">
                  <input type="text" className="form-control" id="itemName" />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="imgFile" className="col-md-3 col-form-label">
                  Image
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    placeholder="URL"
                    className="form-control"
                    id="itemUrlImage"
                  />
                </div>
              </div>
            </React.Fragment>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewItem;
