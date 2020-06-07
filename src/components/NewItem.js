import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
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

import ImageUpload from './ImageUpload';

import ItemsContext from '../context/items/itemsContext';

let renderCount = 0;

const NewItem = () => {
  renderCount++;

  const itemsContext = useContext(ItemsContext);
  const { addItem, isLoading } = itemsContext;

  const { register, control, errors, watch, handleSubmit } = useForm({
    defaultValues: {
      category: 'Display Art',
      refId: '',
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

  const onFormSubmit = async (data) => {
    // console.log(data);
    try {
      await addItem(data);
    } catch (error) {
      // console.log(error);
      return;
    }
    history.push('/');
  };
  // console.log(errors);

  return (
    <Card>
      <CardHeader className="h6">Add new Item</CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
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
            </Col>
          </FormGroup>

          <hr />

          <FormGroup>
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
              onClick={() => history.push('/')}
            >
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </CardBody>
      <p>sizes array: {JSON.stringify(fields)}</p>
      <p>watch(): {JSON.stringify(watch({ nest: true }))}</p>
      Test Component Render Count: {renderCount}
    </Card>
  );
};

export default NewItem;
