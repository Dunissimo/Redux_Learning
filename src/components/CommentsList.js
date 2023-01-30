import React from "react";
import Comment from "./Comment";

import { useState, useEffect } from "react";
import { commentCreate, commentsLoad } from "../redux/actions/commentsActions";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";

const CommentsList = () => {
  const [textComment, setText] = useState("");
  const dispatch = useDispatch();

  const comments = useSelector(({ commentsReducer }) => {
    return commentsReducer.comments;
  });

  const handleInput = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uniqid();

    dispatch(commentCreate(textComment, id));

    setText("");
  };

  useEffect(() => {
    dispatch(commentsLoad());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="comments max-h-[470px] overflow-y-scroll pr-2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={textComment}
          onChange={handleInput}
          className="w-full outline-none py-1 px-1 mb-2 border"
          placeholder="Type comment here"
        />
        <input type="submit" hidden />
      </form>
      <div className="comments-list">
        {comments.map((comment) => {
          if (!comment.text) return "";
          return <Comment key={comment.id} data={comment} />;
        })}
      </div>
    </div>
  );
};

export default CommentsList;
