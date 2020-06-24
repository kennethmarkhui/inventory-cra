import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  CustomInput,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filter = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <React.Fragment>
      <Button id="Popover1" type="button" size="sm" color="link">
        <FontAwesomeIcon icon="filter" color="black" />
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader>Filter</PopoverHeader>
        <PopoverBody>
          <Form>
            <FormGroup>
              <Label htmlFor="categoryFilter">--NOT WORKING--</Label>
              <div>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  label="Display Art"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label="Scroll"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label="Others"
                />
              </div>
            </FormGroup>
          </Form>
        </PopoverBody>
      </Popover>
    </React.Fragment>
  );
};

export default Filter;
