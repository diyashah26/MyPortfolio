import React from 'react'

function Footer() {
  return (
    <div>
      <footer className=" text-white">
        {/*<hr />  horizontal line */}
        <p style={{ textAlign: "center", padding: "10px" }}>
          © 2025 Portfolio Website. All rights reserved. <br />
          <a href="https://www.linkedin.com/in/diya-shah-853692213/">
            {" "}
            LinkedIn
          </a>{" "}
          | <a href="https://github.com/diyashah26"> GitHub</a> |{" "}
          <a href="https://www.hackerrank.com/profile/diyashah2628">
            {" "}
            HackerRank
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer
