import React, { Suspense, lazy } from "react";

const App1 = lazy(() => import("mfe1/App"));

const App = () => {
  return (
    <div>
      <h2>Bootstrap</h2>

      {/* <Suspense fallback={<div>Загрузка...</div>}> */}
      {/* </Suspense> */}
      <App1 />
    </div>
  );
};

export default App;
