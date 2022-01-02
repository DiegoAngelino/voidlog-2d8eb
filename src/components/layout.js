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
              &bull;{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              no social links here
            </a>{" "}
            &bull;{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              no social links here
            </a>{" "}
            &bull;{" "}
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
