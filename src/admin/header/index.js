import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  fontSize: '16px'
}

const center = {
  margin: '0 auto'
}

const pad = {
  paddingTop: '20px',
  paddingBottom: '20px',
  display: 'inline-block'
}

export default class HeaderBody extends Component {
  state = { activeItem: '文档目录' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={MenuStyle} pointing secondary>
        <Menu.Menu style={center}>
          <Menu.Item as={Link} to='/admin/docs' name="文档目录" active={activeItem === '文档目录'} onClick={this.handleItemClick} style={pad}/>
          <Menu.Item as={Link} to='/admin/alias' name="别名管理" active={activeItem === '别名管理'} onClick={this.handleItemClick} style={pad}/>
        </Menu.Menu>
      </Menu>
    )
  }
}
