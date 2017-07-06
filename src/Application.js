import React, { Component } from 'react'
import logo from './logo.svg'
import routes from './routes'
import {
  App,
  Title,
  Header,
  Article,
  Anchor,
  Section,
  Footer,
  Menu
} from 'grommet'
import { CustomLink } from 'components/custom'

const Application = ({ children }) =>
  <App centered className="App">
    <Header className="App-header" size="large">
      <img src={logo} className="App-logo" alt="logo" />
      <Title size="large">-_-</Title>
      <Menu responsive={true} direction="row" size="large">
        {_.map(routes, v => <CustomLink {...v} key={v.name} />)}
      </Menu>
    </Header>
    <Article className="App-body">
      <Section justify="center" align="center">
        {children}
      </Section>
    </Article>
  </App>

export default Application
