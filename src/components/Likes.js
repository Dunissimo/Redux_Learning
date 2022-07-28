import React from "react";
import { incrementLikes, decrementLikes } from "../redux/actions/likesActions";
import { useSelector, useDispatch } from "react-redux";

const Likes = () => {
  const dispatch = useDispatch();

  const props = useSelector(({ likesReducer }) => {
    return {
      likes: likesReducer.likes,
      incrementLikes: () => dispatch(incrementLikes()),
      decrementLikes: () => dispatch(decrementLikes()),
    };
  });

  return (
    <div className="button-controls text-blue-400">
      <button className="button" onClick={props.incrementLikes}>
        ❤ {props.likes}
      </button>
      <button className="button ml-4" onClick={props.decrementLikes}>
        Dislikes
      </button>
    </div>
  );
};

export default Likes;
