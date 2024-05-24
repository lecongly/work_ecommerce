/**
 *
 * Navigation
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import actions from '../../actions';

import Button from '../../components/Common/Button';
import CartIcon from '../../components/Common/CartIcon';
import { BarsIcon } from '../../components/Common/Icon';
import MiniBrand from '../../components/Store//MiniBrand';
import Menu from '../NavigationMenu';
import Cart from '../Cart';

class Navigation extends React.PureComponent {
  componentDidMount() {
    this.props.fetchStoreBrands();
    this.props.fetchStoreCategories();
  }

  toggleBrand() {
    this.props.fetchStoreBrands();
    this.props.toggleBrand();
  }

  toggleMenu() {
    this.props.fetchStoreCategories();
    this.props.toggleMenu();
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion, { query, isHighlighted }) {
    const BoldName = (suggestion, query) => {
      const matches = AutosuggestHighlightMatch(suggestion.name, query);
      const parts = AutosuggestHighlightParse(suggestion.name, matches);

      return (
        <div>
          {parts.map((part, index) => {
            const className = part.highlight
              ? 'react-autosuggest__suggestion-match'
              : null;
            return (
              <span className={className} key={index}>
                {part.text}
              </span>
            );
          })}
        </div>
      );
    };

    return (
      <Link to={`/product/${suggestion.slug}`}>
        <div className='d-flex'>
          <img
            className='item-image'
            src={`${suggestion.imageUrl
              ? suggestion.imageUrl
              : '/images/placeholder-image.png'
              }`}
          />
          <div>
            <Container>
              <Row>
                <Col>
                  <span className='name'>{BoldName(suggestion, query)}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className='price'>${suggestion.price}</span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Link>
    );
  }

  render() {
    const {
      history,
      authenticated,
      user,
      cartItems,
      brands,
      categories,
      signOut,
      isMenuOpen,
      isCartOpen,
      isBrandOpen,
      toggleCart,
      toggleMenu,
      searchValue,
      suggestions,
      onSearch,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested
    } = this.props;

    const inputProps = {
      placeholder: 'Tìm kiếm sản phẩm',
      value: searchValue,
      onChange: (_, { newValue }) => {
        onSearch(newValue);
      }
    };

    return (
      <header className='header fixed-mobile-header'>
        <div className='header-info'>
          <Container>
            <Row>
              <Col md='4' className='text-center d-none d-md-block'>
                <i className='fa fa-truck' />
                <span>Miễn Phí Vận Chuyển</span>
              </Col>
              <Col md='4' className='text-center d-none d-md-block'>
                <i className='fa fa-credit-card' />
                <span>Thanh Toán Trực Tuyến</span>
              </Col>
              <Col md='4' className='text-center d-none d-md-block'>
                <i className='fa fa-phone' />
                <span>0862-670-781</span>
              </Col>
              <Col xs='12' className='text-center d-block d-md-none'>
                <i className='fa fa-phone' />
                <span>Bạn cần hỗ trợ? Liên hệ: 0862-670-781</span>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className='align-items-center top-header'>
            {/* Brand Logo */}
            <Col xs={{ size: 12, order: 1 }} sm={{ size: 12, order: 1 }} md={{ size: 3, order: 1 }} lg={{ size: 2, order: 1 }} className='pr-0'>
              <div className='brand'>
                {categories && categories.length > 0 && (
                  <Button
                    borderless
                    variant='empty'
                    className='d-none d-md-block'
                    ariaLabel='open the menu'
                    icon={<BarsIcon />}
                    onClick={() => this.toggleMenu()}
                  />
                )}
                <Link to='/home'>
                  <img className='desktop' src='/images/logo.png' />
                  <img className='mobile' src='/images/logo.png' />
                </Link>
              </div>
            </Col>
            {/* Search Bar */}
            <Col xs={{ size: 12, order: 4 }} sm={{ size: 12, order: 4 }} md={{ size: 12, order: 4 }} lg={{ size: 2, order: 2 }} className='pt-2 pt-lg-0'>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={(_, item) => {
                  history.push(`/product/${item.suggestion.slug}`);
                }}
              />
            </Col>
            {/* Menu Toggle and Cart Icon */}
            <Col xs={{ size: 12, order: 2 }} sm={{ size: 12, order: 2 }} md={{ size: 4, order: 1 }} lg={{ size: 5, order: 3 }} className='desktop-hidden'>
              <div className='header-links'>
                <Button
                  borderless
                  variant='empty'
                  ariaLabel='open the menu'
                  icon={<BarsIcon />}
                  onClick={() => this.toggleMenu()}
                />
                <CartIcon cartItems={cartItems} onClick={toggleCart} />
              </div>
            </Col>
            {/* Navigation Menu */}
            <Col xs={{ size: 12, order: 2 }} sm={{ size: 12, order: 2 }} md={{ size: 9, order: 1 }} lg={{ size: 8, order: 3 }}>
              <Navbar color='light' light expand='md' className='mt-1 mt-md-0 mb-0'>
                <Nav navbar>
                  {/* NavItems */}
                  <NavItem>
                    <NavLink tag={ActiveLink} to='/home' activeClassName='active'>
                      Trang chủ
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ActiveLink} to='/introduction' activeClassName='active'>
                      Giới thiệu
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ActiveLink} to='/blog' activeClassName='active'>
                      Blog
                    </NavLink>
                  </NavItem>
                  {/* NavItem for Shop */}
                  <NavItem>
                    <NavLink tag={ActiveLink} to='/shop' activeClassName='active'>
                      Cửa hàng
                    </NavLink>
                  </NavItem>
                  {/* Dropdown for Brands */}
                  {brands && brands.length > 0 && (
                    <Dropdown nav inNavbar isOpen={isBrandOpen} toggle={() => this.toggleBrand()}>
                      <DropdownToggle nav>
                        Sản phẩm
                        <span className='fa fa-chevron-down dropdown-caret'></span>
                      </DropdownToggle>
                      <DropdownMenu right className='nav-brand-dropdown'>
                        <div className='mini-brand'>
                          <MiniBrand brands={brands} toggleBrand={() => this.toggleBrand()} />
                        </div>
                      </DropdownMenu>
                    </Dropdown>
                  )}
                  {/* Dropdown for User Authentication */}
                  {authenticated ? (
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav>
                        {user.firstName ? user.firstName : 'Welcome'}
                        <span className='fa fa-chevron-down dropdown-caret'></span>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={() => history.push('/dashboard')}>
                          Quản lý tài khoản
                        </DropdownItem>
                        <DropdownItem onClick={signOut}>Đăng Xuất</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav>
                        Chào mừng
                        <span className='fa fa-chevron-down dropdown-caret'></span>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={() => history.push('/login')}>
                          Đăng Nhập
                        </DropdownItem>
                        <DropdownItem onClick={() => history.push('/register')}>
                          Đăng Ký
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  )}
                </Nav>
                {/* Cart Icon */}
                <CartIcon className='d-none d-md-block' cartItems={cartItems} onClick={toggleCart} />
              </Navbar>
            </Col>
          </Row>
        </Container>


        {/* hidden cart drawer */}
        <div
          className={isCartOpen ? 'mini-cart-open' : 'hidden-mini-cart'}
          aria-hidden={`${isCartOpen ? false : true}`}
        >
          <div className='mini-cart'>
            <Cart />
          </div>
          <div
            className={
              isCartOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
            }
            onClick={toggleCart}
          />
        </div>

        {/* hidden menu drawer */}
        <div
          className={isMenuOpen ? 'mini-menu-open' : 'hidden-mini-menu'}
          aria-hidden={`${isMenuOpen ? false : true}`}
        >
          <div className='mini-menu'>
            <Menu />
          </div>
          <div
            className={
              isMenuOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
            }
            onClick={toggleMenu}
          />
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMenuOpen: state.navigation.isMenuOpen,
    isCartOpen: state.navigation.isCartOpen,
    isBrandOpen: state.navigation.isBrandOpen,
    cartItems: state.cart.cartItems,
    brands: state.brand.storeBrands,
    categories: state.category.storeCategories,
    authenticated: state.authentication.authenticated,
    user: state.account.user,
    searchValue: state.navigation.searchValue,
    suggestions: state.navigation.searchSuggestions
  };
};

export default connect(mapStateToProps, actions)(withRouter(Navigation));
