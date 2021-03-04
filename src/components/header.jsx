import React, { Component } from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Axios from 'axios'


class NavbarPage extends Component {
  state = {
    isOpen: false,
    categories: [],
    restCategories: []
  };

  componentDidMount() {
    Axios.get('https://today.line.me/id/portaljson')
      .then((res) => {
        console.log(res.data.result.categories)
        // console.log(res.data.result.categories[0].templates)
        this.setState({ categories: res.data.result.categories.slice(0, 16) })
        this.setState({ restCategories: res.data.result.categories.slice(16, 22) })
        // console.log(this.state.categories)
        // console.log(this.state.restCategories)
      }).catch((err) => {
        console.log(err)
      })
  }

  renderCategories = (data) => {
    return data.map((val, index) => {
      return (
        <MDBNavItem key={index}>
          <MDBNavLink to={`/${val.name}`}>{val.name}</MDBNavLink>
        </MDBNavItem>
      )
    })
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { categories, restCategories } = this.state
    return (
      // <Router>
        <MDBNavbar color="white" scrolling fixed='top' light expand="md">
          <MDBNavbarBrand>
            <strong className="black-text">Line.today</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              {this.renderCategories(categories)}
              {/* <MDBNavItem active>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem> */}
              {/* <MDBNavItem>
                <MDBNavLink to='/tes'>tes</MDBNavLink>
              </MDBNavItem> */}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    {/* <span className="mr-2">Dropdown</span> */}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {this.renderCategories(restCategories)}
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      // </Router>
    );
  }
}

export default NavbarPage;