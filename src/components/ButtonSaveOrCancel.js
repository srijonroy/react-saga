import React from "react";
import { Button } from "semantic-ui-react";

function ButtonSaveOrCancel({ cancelText, submitText }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>{cancelText}</Button>
      <Button.Or />
      <Button primary>{submitText}</Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
