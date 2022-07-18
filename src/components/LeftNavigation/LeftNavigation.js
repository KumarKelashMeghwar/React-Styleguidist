import React, { useState } from "react";
import LoadingSpinner from "../../Widgets/LoadingSpinner";

const LeftNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  const Text = () => {
    return (
      <>
        <div style={{ fontFamily: "sans-serif" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          molestias cumque quidem hic dolorum amet, rerum numquam ex odit
          voluptatem.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          necessitatibus obcaecati repudiandae ipsam vero nostrum molestiae
          incidunt tempore magnam nam.
          <br />
          <br />
          <footer>Designed & Developed by Ken with ❤️</footer>
        </div>
      </>
    );
  };
  return <>{isLoading ? <LoadingSpinner /> : <Text />}</>;
};

export default LeftNavigation;
