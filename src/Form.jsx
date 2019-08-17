import React, {useState} from "react";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};

export default () => {
  const text = useInputValue("");
  const email = useInputValue("");
  return (
  <div>
    <input {...text}/>
    <input {...email}/>
    </div>
  );
}