import React from "react";
import { incrementLikes, decrementLikes } from "../redux/actions/likesActions";
import { useSelector, useDispatch } from "react-redux";

const Likes = () => {
  const dispatch = useDispatch();

  const { likes } = useSelector((state) => state.likesReducer);

  return (
    <div className="button-controls text-blue-400">
      <button className="button" onClick={() => dispatch(incrementLikes())}>
        ❤ {likes}
      </button>
      <button
        className="button ml-4"
        onClick={() => dispatch(decrementLikes())}
      >
        Dislikes
      </button>
    </div>
  );
};

export default Likes;
