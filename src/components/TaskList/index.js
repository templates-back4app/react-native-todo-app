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
          {todos.map((task) => (
            <ListItem>
              <Body>
                <Text>{task.author}</Text>
                <Text note>{task.description}</Text>
              </Body>
              <Right>
                <Text note>{task.created_at}</Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default TaskList;
