import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "../cards/Cards";
const OptionsRoot = () => {
  return (
    <>
      <Routes>
        <Route index element={<Cards />} />
        <Route path='navbar2' element={<h2> Page 2 </h2>} />
        <Route path='navbar3' element={<h2> Page 3 </h2>} />
        <Route path='navbar4' element={<h2> Page 4 </h2>} />
        <Route path='navbar5' element={<h2> Page 5 </h2>} />
      </Routes>
    </>
  );
};

export default OptionsRoot;
