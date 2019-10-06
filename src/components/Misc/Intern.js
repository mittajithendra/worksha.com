import React from "react"
import Container from "../Responsive/Container"
import PageGrid from "../Responsive/PageGrid"
import {Link} from "gatsby"

const Query = () => {
  return (
    <Container>
      <br/>
      <Link to="/">Go to Home</Link>
      <h4>
        If you are Interested as content developer for worksha you can apply by
        filling the below details.
      </h4>
      <p>
        Once you registered we will mail the tips how should you develop the
        content
      </p>
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
            <div>
              <label for="name">Name</label>
              <br />
              <br />
              <input
                name="name"
                id="name"
                placeholder="Your Name"
                type="text"
                required="required"
              />
            </div>
            <div>
            <label for="email">Email</label>
              <br />
              <br />
              <input
                name="email"
                id = "email"
                placeholder="name@name.com"
                type="email"
                required="required"
              />
            </div>
            <div>
            <label for="git">Github Link</label>
              <br />
              <br />
              <input
                name="github link"
                placeholder="https://github.com/"
                type="git"
                id = "git"
              />
            </div>
            <div>
            <label for="fields">Email</label>
              <br />
              <br />
              <input
                name="fields"
                placeholder="Python,Machine Learning,Aptitude,C/C++"
                type="text"
                required="required"
                id = "fields"
              />
            </div>
          </div>
        </PageGrid>
        <br />
        <br />
        <button
          style={{
            padding: ".4rem 1rem",
            color: "#4cb6b6",
            background: "rgba(0, 0, 0, 0.05)",
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
