import React, { useState } from "react";
import LoadingSpinner from "../../Widgets/LoadingSpinner";

const Loader = () => {
  let isLoading = true;

  return <>{isLoading && <LoadingSpinner />}</>;
};

export default Loader;
