import React from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import Bio from "../components/bio";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <div>
          <h1
            style={{
              ...scale(0.75),
              marginBottom: rhythm(2),
              marginTop: 0
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <h2
            style={{
              ...scale(0.2),
              fontWeight: 400,
              marginBottom: rhythm(2),
              marginTop: 0
            }}
          >
            Hi I'm Gary. I studied communication at Kent State University before
            realizing the future of communication the web. Since then I've built
            apps, configured servers, wrote integrations, and broke production.
            Currently I'm a software developer at{" "}
            <a href="https://universitytees.com/">University Tees</a>.
          </h2>
        </div>
      );
    } else {
      header = (
        <h3
          style={{
            ...scale(0.5),
            marginBottom: rhythm(2),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(20),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer></footer>
      </div>
    );
  }
}

export default Layout;
