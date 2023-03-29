import React from "react";
import Layout from "../components/Layout";
const NewsLetter = () => {
  return (
    <Layout className="newsletter-page">
      <section className="page-center">
        <h2>Get all the latest stories to your inbox</h2>
        <h4>I write to my friends every few weeks</h4>
        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Type your name"
            className="form-control"
          ></input>
                    <input
            type="email"
            name="email"
            placeholder="Type your email address"
            className="form-control"
          ></input>
          <button type='submit' className='btn form-control submit-btn'>subsribe</button>
        </form>
      </section>
    </Layout>
  );
};

export default NewsLetter;
