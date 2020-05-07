import React from 'react';

const NewItem = (props) => {
  // console.log(props);

  return (
    <div className="card">
      <h6 className="card-header">Add new Item</h6>
      <div className="card-body">
        <form>
          <div className="form-group row">
            <label htmlFor="itemId" className="col-md-3 col-form-label">
              ID
            </label>
            <div className="col-md-9">
              <input type="text" className="form-control" id="itemId" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="itemStorage" className="col-md-3 col-form-label">
              Storage
            </label>
            <div className="col-md-9">
              <input type="text" className="form-control" id="itemStorage" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="itemSizes" className="col-md-3 col-form-label">
              Sizes
            </label>
            <div className="col-md-9"></div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              <div className="form-group row">
                <label
                  htmlFor="itemEngName"
                  className="col-md-3 col-form-label"
                >
                  EN Name
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="itemEngName"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="itemEngPeriod"
                  className="col-md-3 col-form-label"
                >
                  EN Time Period
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="itemEngPeriod"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="itemEngCategory"
                  className="col-md-3 col-form-label"
                >
                  EN Category
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="itemEngCategory"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label
                  htmlFor="itemChiName"
                  className="col-md-3 col-form-label"
                >
                  CH Name
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="itemChiName"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="itemChiPeriod"
                  className="col-md-3 col-form-label"
                >
                  CH Time Period
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="itemChiPeriod"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="itemChiCategory"
                  className="col-md-3 col-form-label"
                >
                  CH Category
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="itemChiCategory"
                  />
                </div>
              </div>
            </div>
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
        </form>
      </div>
    </div>
  );
};

export default NewItem;
