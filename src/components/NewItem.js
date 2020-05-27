import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from 'reactstrap';

const NewItem = (props) => {
  const [formState, setFormState] = useState({ value: 'display-art' });

  const onCategoryChangeHandler = (event) => {
    setFormState({ value: event.target.value });
  };

  return (
    <Card>
      <CardHeader className="h6">Add new Item</CardHeader>
      <CardBody>
        <Form>
          <FormGroup row>
            <Label md="3" htmlFor="category">
              Category
            </Label>
            <Col md="9">
              <Input
                type="select"
                className="form-control"
                onChange={onCategoryChangeHandler}
                id="category"
              >
                <option value="display-art">Display Art</option>
                <option value="others">Others</option>
              </Input>
            </Col>
          </FormGroup>

          <hr />

          {formState.value === 'display-art' && (
            <React.Fragment>
              <FormGroup row>
                <Label md="3" htmlFor="itemId">
                  Item ID
                </Label>
                <Col md="9">
                  <Input type="text" className="form-control" id="itemId" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md="3" htmlFor="itemStorage">
                  Storage
                </Label>
                <Col md="9">
                  <Input
                    type="text"
                    className="form-control"
                    id="itemStorage"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md="3" htmlFor="itemName">
                  Name
                </Label>
                <Col md="9">
                  <Input type="text" className="form-control" id="itemName" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md="3" htmlFor="itemPeriod">
                  Period
                </Label>
                <Col md="9">
                  <Input type="text" className="form-control" id="itemPeriod" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md="3" htmlFor="itemSizes">
                  Sizes
                </Label>
                <Col md="9"></Col>
              </FormGroup>

              <FormGroup row>
                <Label md="3" htmlFor="imgFile">
                  Image
                </Label>
                <Col md="9">
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

                  <Input
                    type="text"
                    placeholder="URL"
                    className="form-control"
                    id="itemUrlImage"
                  />
                </Col>
              </FormGroup>
            </React.Fragment>
          )}

          {formState.value === 'others' && (
            <React.Fragment>
              <FormGroup row>
                <Label md="3" htmlFor="itemId">
                  Item ID
                </Label>
                <Col md="9">
                  <Input type="text" className="form-control" id="itemId" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md="3" htmlFor="itemStorage">
                  Storage
                </Label>
                <Col md="9">
                  <Input
                    type="text"
                    className="form-control"
                    id="itemStorage"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md="3" htmlFor="itemName">
                  Name
                </Label>
                <Col md="9">
                  <Input type="text" className="form-control" id="itemName" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md="3" htmlFor="imgFile">
                  Image
                </Label>
                <Col md="9">
                  <Input
                    type="text"
                    placeholder="URL"
                    className="form-control"
                    id="itemUrlImage"
                  />
                </Col>
              </FormGroup>
            </React.Fragment>
          )}
        </Form>
      </CardBody>
    </Card>
  );
};

export default NewItem;
