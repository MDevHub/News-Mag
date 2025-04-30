import React from 'react';

const Navbar = ({ category, setCategory }) => {
  const categories = ["technology", "business", "health", "sports", "entertainment"];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News Mag</span>
        </a>
        <div className="collapse navbar-collapse show" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <div
                  className={`nav-link ${category === cat ? "active" : ""}`}
                  style={{
                    cursor: "pointer",
                    color: category === cat ? "blue" : "#ccc",
                  }}
                  onClick={() => setCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
