import React, { Component } from 'react';

function NavComponent() {
  return (
    <nav class="navbar navbar-dark bg-dark">

      <a class="navbar-brand" href="index.html">StarGazer </a>
      <span>
        <a class="navbar-brand" href="#">List available songs</a>
      </span>
      <span class="navbar-text">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </span>

    </nav>

  );
}

export default NavComponent;
