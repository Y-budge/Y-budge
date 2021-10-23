import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <div class="d-flex flex-grow-1">
                        <a class="navbar-brand d-none d-lg-inline-block" href="#"> Y Budge </a>
                        <a class="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
                            {/* <img src="https://via.placeholder.com/40?text=LOGO" alt="logo"> */}
                        </a>
                        <div class="w-100 text-right">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                        <ul class="navbar-nav ms-auto flex-nowrap">
                            {/*class: nav-active*/}
                            <li class="nav-item">
                                <a href="#" class="nav-link m-2 menu-item">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link m-2 menu-item">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link m-2 menu-item">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}