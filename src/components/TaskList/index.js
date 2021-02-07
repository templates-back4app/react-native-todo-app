import React from 'react';

import {
  Container,
  Content,
  List,
  ListItem,
  Body,
  Right,
  Text,
} from 'native-base';
// import { Container } from './styles';

const TaskList = ({todos = []}) => {
  return (
    <Container style={{flex: 1}}>
      <Content>
        <List>
          <ListItem>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Body>
              <Text>Kumar Pratik</Text>
              <Text note>
                Doing what you like will always keep you happy . .
              </Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

export default TaskList;
