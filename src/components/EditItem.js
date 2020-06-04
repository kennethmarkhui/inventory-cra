import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
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

import Spinner from './Spinner';

import ItemsContext from '../context/items/itemsContext';

const EditItem = (props) => {
  const itemsContext = useContext(ItemsContext);

  const { isLoading, item, fetchItem, clearItem } = itemsContext;

  const itemId = useParams().id;

  const history = useHistory();

  useEffect(() => {
    fetchItem(itemId);
    // eslint-disable-next-line
  }, [itemId]);

  useEffect(() => {
    if (item) {
      setFormState({
        category: item.category,
        refId: item.refId,
        storage: item.storage,
        name: item.name,
        country: item.location.country,
        period: item.period,
        size1L: item.sizes[0].len,
        size1W: item.sizes[0].wid,
        size2L: item.sizes[1].len,
        size2W: item.sizes[1].wid,
      });
    }
  }, [item]);

  useEffect(() => {
    // componentWillUnmount
    return () => clearItem();
    // eslint-disable-next-line
  }, []);

  const [formState, setFormState] = useState({
    category: 'display-art',
    refId: '',
    storage: '',
    name: '',
    country: '',
    period: '',
    size1L: '',
    size1W: '',
    size2L: '',
    size2W: '',
  });

  const onFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onCancel = () => {
    history.push('/');
  };

  const onFormUpdateSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {!isLoading && item && (
        <React.Fragment>
          <Card>
            <CardHeader className="h6">Edit Item</CardHeader>
            <CardBody>
              <Form onSubmit={onFormUpdateSubmit}>
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

                <hr />
                <Button color="success" className="float-right" type="submit">
                  Confirm
                </Button>
                <Button
                  color="light"
                  className="float-right mr-2"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </Form>
            </CardBody>
          </Card>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EditItem;
