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
    return <NavItem>{child}</NavItem>
    // switch (child) {
    //   case typeof HTMLAnchorElement:
    //   case typeof HTMLParagraphElement:
    //   case typeof HTMLUListElement:
    //   case typeof HTMLAnchorElement:

    //   default:
    //     break
    // }
  }
}

export interface IStyleProps {
  navBackground?: string
}

const NavItem = styled('div')`
  margin-left: ${margins.md};
  margin-right: ${margins.md};
`

const NavContainer = styled('div')`
  display: inline-flex;
  /* position: sticky; */
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;

  width: 100%;
  height: 10vh;
  padding: ${padding.sm};

  background-color: ${(props: IStyleProps) => props.navBackground};
  ::-webkit-scrollbar {
    display: none;
  }
`
