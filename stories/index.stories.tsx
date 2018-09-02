import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } fr'../src/components/Navbar's';
import { Navbar } from '../src/components/Navbar'
import { colors } from '../src/styles/variables'

storiesOf('Welcome', module).add('to Storybook', () => (
  <h1>Hier kommt eine WelcomPage mal rein</h1>
))
// storiesOf('Test nue ', module).add('bla', () => console.log('object'));
storiesOf('Navbar', module)
  .add('Navbar with DropdownList', () => (
    <Navbar backgroundColor={colors.lightGrey}>
      <a href="example">Link 1</a>
      <p>Label</p>
      <ul>
        <li>ListItem 1</li>
        <li>ListItem 2</li>
        <li>ListItem 3</li>
      </ul>
      <a href="example">Link 2</a>
      <a href="example">Link 3</a>
    </Navbar>
  ))
  .add('Navbar with Swiping', () => (
    <>
      <Navbar backgroundColor={colors.lightGrey}>
        <a href="example">Link 1</a>
        <p>Label</p>
        <a href="example">Link 2</a>
        <a href="example">Link 3</a>
        <a href="example">Link 4</a>
        <p>Label</p>
        <a href="example">Link 5</a>
        <a href="example">Link 6</a>
        <a href="example">Link 7</a>
        <p>Label</p>
        <a href="example">Link 8</a>
        <a href="example">Link 9</a>
        <a href="example">Link 10</a>
        <a href="example">Link 11</a>
        <a href="example">Link 12</a>
      </Navbar>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
    </>
  ))
