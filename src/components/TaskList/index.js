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
  if (todos.length === 0) return <Text>No tasks on this list</Text>;

  return (
    <Container style={{flex: 1}}>
      <Content>
        <List>
          {todos.map((task) => (
            <ListItem key={task.objectId}>
              <Body>
                <Text>{task.get('author')}</Text>
                <Text note>{task.get('description')}</Text>
              </Body>
              <Right>
                <Text note>{task.createdAt.toLocaleTimeString('en-US')}</Text>
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default TaskList;
