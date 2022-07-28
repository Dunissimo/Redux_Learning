import React from "react";
import { useDispatch } from "react-redux";
import { commentDelete } from "../redux/actions/commentsActions";

const Comment = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(data.id));
  };

  return (
    <div className="comment first:mt-0 bg-slate-200 my-2 py-1 px-1 rounded flex items-center">
      <button
        onClick={handleDelete}
        className="mr-4 transition-all hover:opacity-50 active:scale-50"
      >
        &#9587;
      </button>
      <p>{data.text}</p>
    </div>
  );
};

export default Comment;
