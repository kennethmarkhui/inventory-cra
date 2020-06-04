import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Col,
  Row,
  Button,
} from 'reactstrap';

import ImageUpload from './ImageUpload';

import ItemsContext from '../context/items/itemsContext';

const NewItem = (props) => {
  const itemsContext = useContext(ItemsContext);
  const { addItem, isLoading } = itemsContext;
  const [formState, setFormState] = useState({
    category: 'display-art',
    refId: '',
    storage: '',
    name: '',
    country: '',
    area: '',
    period: '',
    size1L: '',
    size1W: '',
    size2L: '',
    size2W: '',
  });

  const history = useHistory();

  const onFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onCancel = () => {
    history.push('/');
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    try {
      await addItem(formState);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <CardHeader className="h6">Add new Item</CardHeader>

      <CardBody>
        <Form onSubmit={onFormSubmit}>
          <FormGroup row>
            <Label md="3" htmlFor="category">
              Category
            </Label>
            <Col md="9">
              <Input
                type="select"
                onChange={onFormChange}
                id="category"
                name="category"
                value={formState.category}
              >
                <option value="display-art">Display Art</option>
                <option value="scroll">Scroll</option>
                <option value="other">Other</option>
              </Input>
            </Col>
          </FormGroup>

          <hr />

          <React.Fragment>
            <FormGroup row>
              <Col lg="3">
                <ImageUpload id="image" />
              </Col>
              <Col lg="9">
                <FormGroup row>
                  <Label lg="3" htmlFor="refId">
                    Reference ID
                  </Label>
                  <Col lg="9">
                    <Input
                      type="text"
                      id="refId"
                      name="refId"
                      value={formState.refId}
                      onChange={onFormChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="storage">
                    Storage
                  </Label>
                  <Col lg="9">
                    <Input
                      type="text"
                      id="storage"
                      name="storage"
                      value={formState.storage}
                      onChange={onFormChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="name">
                    Name
                  </Label>
                  <Col lg="9">
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={onFormChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="country">
                    Country
                  </Label>
                  <Col lg="9">
                    <Input
                      type="text"
                      id="country"
                      name="country"
                      value={formState.country}
                      onChange={onFormChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="area">
                    Area
                  </Label>
                  <Col lg="9">
                    <Input
                      type="text"
                      id="area"
                      name="area"
                      value={formState.area}
                      onChange={onFormChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="period">
                    Period
                  </Label>
                  <Col lg="9">
                    <Input
                      type="text"
                      id="period"
                      name="period"
                      value={formState.period}
                      onChange={onFormChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="sizes">
                    Sizes
                  </Label>
                  <Col lg="9">
                    <Row>
                      <Col sm="6">
                        <InputGroup>
                          <Input
                            type="number"
                            min="0"
                            step=".25"
                            name="size1L"
                            value={formState.size1L}
                            onChange={onFormChange}
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>x</InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="number"
                            min="0"
                            step=".25"
                            name="size1W"
                            value={formState.size1W}
                            onChange={onFormChange}
                          />
                        </InputGroup>
                      </Col>
                      <Col sm="6">
                        <InputGroup>
                          <Input
                            type="number"
                            min="0"
                            step=".25"
                            name="size2L"
                            value={formState.size2L}
                            onChange={onFormChange}
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>x</InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="number"
                            min="0"
                            step=".25"
                            name="size2W"
                            value={formState.size2W}
                            onChange={onFormChange}
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                  </Col>
                </FormGroup>
              </Col>
            </FormGroup>
          </React.Fragment>

          <hr />
          <Button
            color="secondary"
            className="float-right"
            type="submit"
            disabled={isLoading}
          >
            {!isLoading ? (
              'Confirm'
            ) : (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
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
