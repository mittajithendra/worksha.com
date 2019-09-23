import React from "react"
import Container from "../Responsive/Container"
import PageGrid from "../Responsive/PageGrid"

const Query = () => {
  return (
    <Container>
      <h4>If you are Interested as content developer for worksha you can apply by filling the below details.</h4>
      <p>Once you registered we will mail the tips how should you develop the content</p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <PageGrid columns="repeat(1,1fr)">
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
            <input
              name="github link"
              placeholder="https://github.com/"
              type="git"
              
            />
            <input
              name="fields"
              placeholder="Python,Machine Learning,Aptitude,C/C++"
              type="text"
              required="required"
            />
          </div>
        </PageGrid>
        <br />
        <br />
        <PageGrid columns="repeat(1,1fr)">
          <div className="grid-container">
           
          </div>
        </PageGrid>
        <br />
        <button
          style={{
            padding: ".4rem 1rem",
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
