import React from 'react'
import { Container, Input, Menu } from 'semantic-ui-react'


const MenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd'
}


const inputStyle = {
  width: '60%',
  margin: '8px auto'
}

const HeaderBody = () => (
  <Menu style={MenuStyle} pointing secondary>
    <Container>
      <Input icon="search" style={inputStyle}/>
    </Container>
  </Menu>
)

export default HeaderBody
