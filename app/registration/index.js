// @flow
import React from "react";
import form from "./form";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column"
  },
  field: {}
};

export class RegistrationForm extends React.Component<
  {},
  {
    values: {
      [string]: any
    }
  }
> {
  state = {
    values: {}
  };
  handleSubmit() {}
  render() {
    return (
      <form style={styles.form} onSubmit={this.handleSubmit()}>
        {Object.keys(form).map(fieldId => {
          const field = form[fieldId];
          return (
            <label key={fieldId} style={styles.field}>
              {field.name}
              <input {...field} />
            </label>
          );
        })}
      </form>
    );
  }
}

export default RegistrationForm;
