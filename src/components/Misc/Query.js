import React from "react"
import Container from "../Responsive/Container"
import PageGrid from "../Responsive/PageGrid"

const Query = () => {
  return (
    <Container>
      <h3>Get in touch</h3>
      <p>Post your queries with out any hesitation and we’ll sure respond.</p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <PageGrid columns="repeat(2,1fr)">
          <div className="grid-container">
            <div>
              <label for="name">Name</label>
              <br />
              <br />
              <PageGrid columns="repeat(1,1fr)">
                <div className="grid-container">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="your name"
                    required="required"
                  />
                </div>
              </PageGrid>
            </div>
            <div>
              <label for="email">Email</label>
              <br />
              <br />
              <PageGrid columns="repeat(1,1fr)">
                <div className="grid-container">
                  <input
                    name="email"
                    placeholder="name@name.com"
                    type="email"
                    id="email"
                    required="required"
                  />
                </div>
              </PageGrid>
            </div>
          </div>
        </PageGrid>
        <br />
        <PageGrid columns="repeat(1,1fr)">
          <div className="grid-container">
            <label for="message">Message</label>
            <textarea
              name="message"
              placeholder="Your Question Here"
              rows="4"
              required="required"
              id="message"
            />
          </div>
        </PageGrid>
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
