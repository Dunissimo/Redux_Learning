import React from "react";
import { useSelector } from "react-redux";

import Likes from "./Likes";
import CommentsList from "./CommentsList";
import HeaderInput from "./HeaderInput";
import Loader from "./Loader";

const App = () => {
  const { error, message } = useSelector(({ loaderReducer }) => ({
    error: loaderReducer.error,
    message: loaderReducer.message,
  }));

  const comments = error ? (
    <h1 className="text-red-500">{message}</h1>
  ) : (
    <>
      <CommentsList />
      <Loader />
    </>
  );

  return (
    <div className="app w-full">
      <div className="card max-h-[500px] w-[75%] my-[5%] mx-auto flex rounded">
        <div className="card-block block-img w-[50%] py-4 px-4">
          <img
            className="w-full rounded"
            src="https://img.redbull.com/images/c_crop,w_5568,h_2784,x_0,y_269,f_auto,q_auto/c_scale,w_1200/redbullcom/2019/04/16/e04ec246-cd71-40db-8c47-3e9703132959/chasing-the-shot-leroy-bellet-michel-bourez-tahiti"
            alt="surfing"
          />

          <HeaderInput />
          <Likes />
        </div>
        <div className="card-block block-comments w-[50%] py-4 px-4">
          {comments}
        </div>
      </div>
    </div>
  );
};

export default App;
