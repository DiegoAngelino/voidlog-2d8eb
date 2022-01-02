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
              tags full list
            </a>{" "}
            &bull;{" "}
            <a
              href="/tags"
              target="_blank"
              rel="noopener noreferrer"
            >
              no social links here
            </a>{" "}
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
