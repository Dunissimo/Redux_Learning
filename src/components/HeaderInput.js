import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../redux/actions/titleActions";

const HeaderInput = () => {
  const dispatch = useDispatch();

  const text = useSelector(({ titleReducer }) => titleReducer.text);

  const handleChange = (e) => dispatch(inputText(e.target.value));

  return (
    <div>
      <div
        className="w-[300px]  pt-1 pb-2"
        style={{ borderBottom: "1px solid rgba(128,128,128, 0.2)" }}
      >
        <input
          type="text"
          onChange={handleChange}
          className="outline-none"
          placeholder="Type header of image here"
        />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeaderInput;
