import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardImg,
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

import ItemsContext from '../context/items/itemsContext';

let renderCount = 0;

const NewItem = () => {
  renderCount++;

  const itemsContext = useContext(ItemsContext);
  const { addItem, isLoading } = itemsContext;

  const [preview, setPreview] = useState();

  const { register, control, errors, watch, handleSubmit } = useForm({
    defaultValues: {
      refId: '',
      image: null,
      category: 'Display Art',
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
    const formData = new FormData();
    formData.append('refId', data.refId);
    formData.append('image', data.image[0]);
    formData.append('category', data.category);
    formData.append('name', data.name);
    formData.append('storage', data.storage);
    formData.append('location', JSON.stringify(data.location));
    formData.append('period', data.period);
    formData.append('sizes', JSON.stringify(data.sizes || []));
    try {
      // await addItem(data);
      await addItem(formData);
    } catch (error) {
      // console.log(error);
      return;
    }
    history.push('/');
  };
  // console.log(errors);

  const previewImageHandler = (e) => {
    let file = e.target.files[0];
    if (e.target.files && e.target.files.length === 1) {
      setPreview(URL.createObjectURL(file));
    }
  };

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
              <div className="d-flex justify-content-center align-items-center flex-column">
                <Label htmlFor="image">
                  <Card
                    outline={errors.image && errors.image.type === 'required'}
                    color={
                      errors.image &&
                      errors.image.type === 'required' &&
                      'danger'
                    }
                    className="mb-3 justify-content-center align-items-center "
                    style={{ width: '13rem', height: '13rem' }}
                  >
                    {preview && (
                      <CardImg
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        src={preview}
                        alt="Preview"
                      />
                    )}
                    {!preview && (
                      <FontAwesomeIcon icon="file-image" size="9x" />
                    )}
                  </Card>
                </Label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  style={{ display: 'none' }}
                  accept=".jpg,.png,.jpeg"
                  innerRef={register({
                    required: 'Image is required',
                  })}
                  invalid={!!errors.image}
                  onChange={previewImageHandler}
                />
                {errors.image && errors.image.type === 'required' && (
                  <FormFeedback className="text-center">
                    {errors.image.message}
                  </FormFeedback>
                )}
              </div>
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
      NewItem Component Render Count: {renderCount}
    </Card>
  );
};

export default NewItem;
