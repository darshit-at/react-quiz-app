import React, { useState, useEffect } from "react";
import "./questionOption.css";

const DisplayOption = (props) => {
  const [isUserSeleteOption, getIsUserSelectOption] = useState(false);
  const [addCssClass, setCssClass] = useState("");

  useEffect(() => {
    if (isUserSeleteOption) {
      setCssClass("Select-option");
    }
    return () => {
      getIsUserSelectOption(false);
      setCssClass("");
    };
  }, [props.userSelectOption]);

  const SelectOptionHandler = (event) => {
    getIsUserSelectOption(true);
    props.onSelect(event.target.textContent);
  };

  return (
    <div className="option-block">
      <span
        className={addCssClass}
        onClick={SelectOptionHandler}
        dangerouslySetInnerHTML={{ __html: props.option }}
      ></span>
    </div>
  );
};
export default React.memo(DisplayOption);
