import React, { Component, ReactNode } from 'react'
import styled from 'react-emotion'
import { color, height, margins, padding } from '../../styles/variables'

interface INavItem {
  label: string
  link: string
  children: React.ReactNode
  dropdown?: INavItem[]
}

interface IProps {
  backgroundColor?: string
  navItems?: INavItem[]
}

interface IState {}

export default class Navbar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <NavContainer navBackground={this.props.backgroundColor}>
        {this.prepareChildren(this.props.children)}
      </NavContainer>
    )
  }

  private prepareChildren(children: ReactNode): ReactNode {
    if (children) {
      return React.Children.map(children, (child) => <NavItem>{child}</NavItem>)
    }
    return null
  }
}

export interface IStyleProps {
  navBackground?: string
}

const NavItem = styled('div')`
  flex: 0 0 auto;
  margin-left: ${margins.md};
  margin-right: ${margins.md};
  text-align: center;
  a {
    color: ${color.black};
    text-decoration: none;
  }
  p {
  }
  :hover {
    background-color: ${color.black};
  }
`

const NavContainer = styled('div')`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  height: ${height.mobileNavbar};
  align-items: center;
  padding: ${padding.sm};
  -webkit-overflow-scrolling: touch;

  background-color: ${(props: IStyleProps) => props.navBackground};
  ::-webkit-scrollbar {
    display: none;
  }
`
