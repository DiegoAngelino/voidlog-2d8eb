import React from "react"
import Header from "./header"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <div className="container">
        <div className="content">
          <Header siteTitle={title} />
          <main>{children}</main>
        </div>
        <footer>
          © {new Date().getFullYear()}{" "}
          <div className="social-links">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              no social links here
            </a>{" "}
            &bull;{" "}
            <a
              href="https://instagram.com/veryben"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>{" "}
            &bull;{" "}
            <a
              href="https://github.com/teaware"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>{" "}
            &bull;{" "}
            <a
              href="https://codepen.io/farm-boy"
              target="_blank"
              rel="noopener noreferrer"
            >
              codepen
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
