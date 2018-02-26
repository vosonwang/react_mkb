import React from 'react'
import { Card, Container } from 'semantic-ui-react'

const cardStyle = {
  width: '100%',
  margin: '30px auto'
}

const Main = props => (
  <Container>
    <Card style={cardStyle}>
      <Card.Content>
        {props.children}
      </Card.Content>
    </Card>
  </Container>
)


export default Main
