import React from "react";
import { Rings } from "react-loader-spinner";

import { useSelector } from "react-redux";

const Loader = () => {
  const loader = useSelector(({ loaderReducer }) => ({
    loading: loaderReducer.loading,
  }));

  return (
    <div className="loader">
      <Rings
        color="#00BFFF"
        height={100}
        width={100}
        visible={loader.loading}
      />
    </div>
  );
};

export default Loader;
