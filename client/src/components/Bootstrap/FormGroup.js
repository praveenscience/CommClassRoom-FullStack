import React from "react";

const FormGroup = ({
  Id,
  Label,
  Type,
  onChange,
  Value,
  defaultValue,
  Checked,
  defaultChecked,
  Desc
}) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={Id}>{Label}</label>
      <input
        type={Type}
        className="form-control"
        id={Id}
        name={Id}
        onChange={onChange}
        value={Value}
        defaultValue={defaultValue}
        checked={Checked}
        defaultChecked={defaultChecked}
        aria-describedby={Id + "Help"}
      />
      {Desc && (
        <small id={Id + "Help"} className="form-text text-muted">
          {Desc}
        </small>
      )}
    </div>
  );
};

export default FormGroup;
