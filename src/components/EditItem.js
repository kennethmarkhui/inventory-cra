import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  InputGroup,
  InputGroupAddon,
  Col,
  Row,
  Button,
  Badge,
} from 'reactstrap';
import { useForm, useFieldArray } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Spinner from './Spinner';

import ItemsContext from '../context/items/itemsContext';

let renderCount = 0;

const EditItem = (props) => {
  renderCount++;

  const itemsContext = useContext(ItemsContext);
  const { isLoading, item, fetchItem, updateItem, clearItem } = itemsContext;

  const itemId = useParams().id;

  const { register, control, errors, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      _id: '',
      category: 'Display Art',
      refId: '',
      prevRefId: '',
      name: '',
      storage: '',
      location: {
        country: '',
        area: '',
      },
      period: '',
      sizes: [],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'sizes' });

  const history = useHistory();

  useEffect(() => {
    fetchItem(itemId);
    // eslint-disable-next-line
  }, [itemId]);

  useEffect(() => {
    if (item) {
      setValue('_id', item._id);
      setValue('category', item.category);
      setValue('refId', item.refId);
      setValue('prevRefId', item.refId);
      setValue('name', item.name);
      setValue('storage', item.storage);
      setValue('location.country', item.location.country);
      setValue('location.area', item.location.area);
      setValue('period', item.period);
      if (item.sizes.length !== 0) {
        append(item.sizes);
      }
      // console.log(item);
    }
  }, [item, setValue, append]);

  useEffect(() => {
    // componentWillUnmount
    return () => clearItem();
    // eslint-disable-next-line
  }, []);

  const onCancel = () => {
    history.push('/');
  };

  const onFormUpdateSubmit = async (data) => {
    // console.log(data);
    try {
      await updateItem(data);
    } catch (error) {
      return;
    }
    history.push('/');
  };

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {!isLoading && item && (
        <React.Fragment>
          <Card>
            <CardHeader className="h6">Edit Item</CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit(onFormUpdateSubmit)}>
                <FormGroup row>
                  <Label md="3" htmlFor="category">
                    Category
                  </Label>
                  <Col md="9">
                    <Input
                      type="select"
                      id="category"
                      name="category"
                      innerRef={register}
                    >
                      <option>Display Art</option>
                      <option>Scroll</option>
                      <option>Others</option>
                    </Input>
                  </Col>
                </FormGroup>

                <hr />

                <Input
                  type="hidden"
                  id="_id"
                  name="_id"
                  innerRef={register}
                  readOnly
                />

                <Input
                  type="hidden"
                  id="prevRefId"
                  name="prevRefId"
                  innerRef={register}
                  readOnly
                />

                <FormGroup row>
                  <Label lg="3" htmlFor="refId">
                    Reference ID
                  </Label>
                  <Col lg="9">
                    <Input
                      id="refId"
                      name="refId"
                      innerRef={register({
                        required: 'Reference ID is required',
                      })}
                      invalid={!!errors.refId}
                    />
                    {errors.refId && errors.refId.type === 'required' && (
                      <FormFeedback>{errors.refId.message}</FormFeedback>
                    )}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="name">
                    Name
                  </Label>
                  <Col lg="9">
                    <Input
                      id="name"
                      name="name"
                      innerRef={register({ required: 'Name is required' })}
                      invalid={!!errors.name}
                    />
                    {errors.name && errors.name.type === 'required' && (
                      <FormFeedback>{errors.name.message}</FormFeedback>
                    )}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="storage">
                    Storage
                  </Label>
                  <Col lg="9">
                    <Input
                      id="storage"
                      name="storage"
                      innerRef={register({ required: 'Storage is required' })}
                      invalid={!!errors.storage}
                    />
                    {errors.storage && errors.storage.type === 'required' && (
                      <FormFeedback>{errors.storage.message}</FormFeedback>
                    )}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="country">
                    Country
                  </Label>
                  <Col lg="9">
                    <Input
                      id="country"
                      name="location.country"
                      innerRef={register({ required: 'Country is required' })}
                      invalid={!!errors.location && !!errors.location.country}
                    />
                    {errors.location && errors.location.country && (
                      <FormFeedback>
                        {errors.location.country.message}
                      </FormFeedback>
                    )}
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="area">
                    Area
                  </Label>
                  <Col lg="9">
                    <Input id="area" name="location.area" innerRef={register} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="period">
                    Period
                  </Label>
                  <Col lg="9">
                    <Input id="period" name="period" innerRef={register} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="sizes">
                    Sizes <Badge>{fields.length}</Badge>
                  </Label>
                  <Col lg="9">
                    <Row>
                      {fields.map((size, index) => (
                        <Col sm="6" key={size.id}>
                          <InputGroup>
                            <Input
                              type="number"
                              min="0"
                              step=".25"
                              name={`sizes[${index}].len`}
                              defaultValue={size.len}
                              innerRef={register()}
                            />
                            <InputGroupAddon addonType="append">
                              <Button
                                close
                                outline
                                onClick={() => {
                                  remove(index);
                                }}
                              />
                            </InputGroupAddon>
                            <Input
                              type="number"
                              min="0"
                              step=".25"
                              name={`sizes[${index}].wid`}
                              defaultValue={size.wid}
                              innerRef={register()}
                            />
                          </InputGroup>
                        </Col>
                      ))}
                      {fields.length < 2 && (
                        <Col sm="6" className="text-center">
                          <Button
                            outline
                            onClick={() => {
                              append({ len: '', wid: '' });
                            }}
                          >
                            <FontAwesomeIcon icon="plus" />
                          </Button>
                        </Col>
                      )}
                    </Row>
                  </Col>
                </FormGroup>

                <hr />

                <Button className="float-right" disabled={isLoading}>
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
                <Button
                  color="light"
                  className="float-right mr-2"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </Form>
            </CardBody>
            <p>watch(): {JSON.stringify(watch({ nest: true }))}</p>
            Test Component Render Count: {renderCount}
          </Card>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EditItem;
