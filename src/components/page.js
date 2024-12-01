import React from 'react';
import Footer from "./footer";
import Header from "./header";
import "./page.css"

const Page = ({ children }) => {
  return (
    <div className={"wrapper"}>
      <Header/>
      <div className={"content"}>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Page;