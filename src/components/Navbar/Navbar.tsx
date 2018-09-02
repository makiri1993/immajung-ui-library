import React, { Component } from 'react'
import styled from 'react-emotion'
import { margins, padding } from '../../styles/variables'

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

  private prepareChildren(children: React.ReactNode): React.ReactNode {
    if (children) {
      return React.Children.map(children, (child) => this.identifyChild(child))
      // Ignore the first child
      // this.identifyChild(child)
    }
    return null
  }

  private identifyChild(child: React.ReactNode) {
    switch (child) {
      case typeof HTMLAnchorElement:
      // child = <NavLink>{}</NavLink>
      case typeof HTMLParagraphElement:
      case typeof HTMLUListElement:
      case typeof HTMLAnchorElement:

      default:
        break
    }
    return <NavItem>{child}</NavItem>
  }
}

export interface IStyleProps {
  navBackground?: string
}

const NavItem = styled('div')`
  flex: 0 0 auto;
  margin-left: ${margins.md};
  margin-right: ${margins.md};
`

const NavContainer = styled('div')`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  height: 10vh;
  align-items: center;
  padding: ${padding.sm};
  -webkit-overflow-scrolling: touch;

  background-color: ${(props: IStyleProps) => props.navBackground};
  &::-webkit-scrollbar {
    display: none;
  }
`
