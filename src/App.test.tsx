import React from 'react';
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react';
import App from './App';
import configureStore from 'redux-mock-store'
import { store } from './redux/storeConfig/store'
import Category from './components/Category';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import NavbarMain from './components/NavbarMain';
import SearchbarAndFilter from './components/SearchbarAndFilter';
import {
  BrowserRouter
} from "react-router-dom";

test('renders App', () => {
  render(<Provider store={store}><App /></Provider>);
});

test('Category renders', () => {
  render(<Provider store={store}><Category /></Provider>);
});

test('NavBar renders', () => {
  render(<Provider store={store}><BrowserRouter><NavBar /></BrowserRouter></Provider>);
});


test('Navbar Main renders', () => {
  render(<Provider store={store}><BrowserRouter><NavbarMain /></BrowserRouter></Provider>);
});

test('Experience renders', () => {
  render(<Provider store={store}><BrowserRouter><Experience /></BrowserRouter></Provider>);
});

test('SearchbarAndFilter renders', () => {
  render(<Provider store={store}><BrowserRouter><SearchbarAndFilter /></BrowserRouter></Provider>);
});