import React from 'react';
import Footer from "./footer";
import Header from "./header";
import "./page.css"

const Page = (props) => {
  return (
    <>
      <Header title={props.title}/>
      <div className={"content"}>
        {props.children}
      </div>
      <Footer/>
    </>
  );
};

export default Page;