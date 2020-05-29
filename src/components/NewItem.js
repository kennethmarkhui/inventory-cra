import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
} from 'reactstrap';

import ImageUpload from './ImageUpload';

const NewItem = (props) => {
  const [formState, setFormState] = useState({ value: 'display-art' });

  const history = useHistory();

  const onCategoryChangeHandler = (event) => {
    setFormState({ value: event.target.value });
  };

  const onCancel = (e) => {
    e.preventDefault();
    history.push('/');
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log('Confirm');
  };

  return (
    <Card>
      <CardHeader className="h6">Add new Item</CardHeader>

      <CardBody>
        <Form onSubmit={onSubmitForm}>
          <FormGroup row>
            <Label md="3" htmlFor="category">
              Category
            </Label>
            <Col md="9">
              <Input
                type="select"
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
                <Col md="3">
                  <ImageUpload id="image" />
                </Col>
                <Col md="9">
                  <FormGroup row>
                    <Label md="3" htmlFor="itemId">
                      Item ID
                    </Label>
                    <Col md="9">
                      <Input type="text" id="itemId" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label md="3" htmlFor="itemStorage">
                      Storage
                    </Label>
                    <Col md="9">
                      <Input type="text" id="itemStorage" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label md="3" htmlFor="itemName">
                      Name
                    </Label>
                    <Col md="9">
                      <Input type="text" id="itemName" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label md="3" htmlFor="itemPeriod">
                      Period
                    </Label>
                    <Col md="9">
                      <Input type="text" id="itemPeriod" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label md="3" htmlFor="itemSizes">
                      Sizes
                    </Label>
                    <Col md="9"></Col>
                  </FormGroup>
                </Col>
              </FormGroup>
            </React.Fragment>
          )}

          {formState.value === 'others' && (
            <React.Fragment>
              <FormGroup row>
                <Col md="3">
                  <ImageUpload id="image" />
                </Col>

                <Col md="9">
                  <FormGroup row>
                    <Label md="3" htmlFor="itemId">
                      Item ID
                    </Label>
                    <Col md="9">
                      <Input type="text" id="itemId" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label md="3" htmlFor="itemStorage">
                      Storage
                    </Label>
                    <Col md="9">
                      <Input type="text" id="itemStorage" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label md="3" htmlFor="itemName">
                      Name
                    </Label>
                    <Col md="9">
                      <Input type="text" id="itemName" />
                    </Col>
                  </FormGroup>
                </Col>
              </FormGroup>
            </React.Fragment>
          )}

          <hr />
          <Button color="success" className="float-right" type="submit">
            Confirm
          </Button>
          <Button color="light" className="float-right mr-2" onClick={onCancel}>
            Cancel
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default NewItem;
