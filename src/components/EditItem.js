import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
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
import ErrorModal from './ErrorModal';

import ItemsContext from '../context/items/itemsContext';

const EditItem = (props) => {
  const itemsContext = useContext(ItemsContext);

  const { isLoading, item, fetchItem } = itemsContext;

  const itemId = useParams().id;
  // const [itemToEdit, setItemToEdit] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  const onFormChange = (e) => {
    // setItemToEdit({
    //   ...itemToEdit,
    //   [e.target.name]: e.target.value,
    // });
  };

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     setIsLoading(true);
  //     const res = await axios.get(
  //       `https://my.api.mockaroo.com/api/items/${itemId}?key=7d747620`
  //     );
  //     setItemToEdit(res.data);
  //     setIsLoading(false);
  //   };
  //   fetchItems();
  // }, [itemId]);

  useEffect(() => {
    fetchItem(itemId);
    // eslint-disable-next-line
  }, [itemId]);

  const onFormUpdateSubmit = (e) => {
    e.preventDefault();
    console.log(item);
  };

  return (
    <React.Fragment>
      <ErrorModal />
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
                      value={item.category}
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
                    Item ID
                  </Label>
                  <Col lg="9">
                    <Input
                      type="text"
                      id="refId"
                      name="refId"
                      value={item.refId}
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
                      value={item.storage}
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
                      value={item.name}
                      onChange={onFormChange}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label lg="3" htmlFor="location">
                    Location
                  </Label>
                  <Col lg="9">
                    <Input
                      type="text"
                      id="location"
                      name="location"
                      value={item.location.country}
                      onChange={onFormChange}
                    />
                  </Col>
                </FormGroup>

                {item.category !== 'other' && (
                  <FormGroup row>
                    <Label lg="3" htmlFor="period">
                      Period
                    </Label>
                    <Col lg="9">
                      <Input
                        type="text"
                        id="period"
                        name="period"
                        value={item.period}
                        onChange={onFormChange}
                      />
                    </Col>
                  </FormGroup>
                )}

                {item.category === 'display-art' && (
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
                              value={item.size[0].len}
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
                              value={item.size[0].wid}
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
                              value={item.size[1].len}
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
                              value={item.size[1].wid}
                              onChange={onFormChange}
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                    </Col>
                  </FormGroup>
                )}
                <hr />
                <Button color="success" className="float-right" type="submit">
                  Confirm
                </Button>
                <Button color="light" className="float-right mr-2">
                  Cancel
                </Button>
              </Form>
            </CardBody>
          </Card>
          <p>{item.refId}</p>
          <p>{item.storage}</p>
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{item.location.country}</p>
          <p>{item.period}</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EditItem;
