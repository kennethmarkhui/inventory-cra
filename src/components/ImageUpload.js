import React, { useRef, useState, useEffect } from 'react';
import { Button, Input, Card, CardImg } from 'reactstrap';

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  //   const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    // let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      //   setIsValid(true);
      //   fileIsValid = true;
    } else {
      //   setIsValid(false);
      //   fileIsValid = false;
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <React.Fragment>
      <Input
        id={props.id}
        innerRef={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Card
          className="mb-3 justify-content-center align-items-center "
          style={{ width: '13rem', height: '13rem' }}
        >
          {previewUrl && (
            <CardImg
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={previewUrl}
              alt="Preview"
            />
          )}
          {!previewUrl && <p>Please pick an image.</p>}
        </Card>
        <Button onClick={pickImageHandler}>CHOOSE IMAGE</Button>
      </div>
      {/* {!isValid && <p>{props.errorText}</p>} */}
    </React.Fragment>
  );
};

export default ImageUpload;
