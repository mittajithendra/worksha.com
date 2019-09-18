import React from "react"
import Container from "../Responsive/Container"
import PageGrid from "../Responsive/PageGrid"

const Query = () => {
  return (
    <Container>
      <h4>Post your Query</h4>
      <p>Have any doubt, post it here! We'll Respond soon.</p>
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <PageGrid columns="repeat(2,1fr)">
          <div className="grid-container">
            <input
              name="name"
              placeholder="Your Name"
              type="text"
              required="required"
            />
            <input
              name="email"
              placeholder="name@name.com"
              type="email"
              required="required"
            />
          </div>
        </PageGrid>
        <br />
        <br />
        <PageGrid columns="repeat(1,1fr)">
          <div className="grid-container">
            <textarea
              name="message"
              placeholder="Your Question Here"
              rows="5"
              required="required"
            />
          </div>
        </PageGrid>
        <br />
        <button
          style={{
            padding: ".4rem 1rem",
            border: "none",
            color: "#4cb6b6",
            background: "rgba(0, 0, 0, 0.05)",
            borderRadius: ".5rem",
            border: "1px solid #4cb6b6",
          }}
          type="submit"
        >
          Send
        </button>
        <br />
        <br />
      </form>
    </Container>
  )
}

export default Query
