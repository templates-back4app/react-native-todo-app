import React, {useState} from 'react';
import {Alert, Text, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Button,
  Title,
  Body,
  CheckBox,
  Content,
  Form,
  Item,
  Input,
  ListItem,
} from 'native-base';

// import { Container } from './styles';

const CATEGORY = Object.freeze({
  WORK: 'work',
  SHOP: 'shopping',
  LEARN: 'learning',
});

const AddTodo = ({navigation}) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  function toggleCategory(selectedCategory) {
    setCategory(selectedCategory);
  }

  function handleSubmit() {
    // TODO: implement this method.
  }
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Input placeholder="Task Name" onChangeText={setDescription} last />
          </Item>

          <Title style={styles.titleStyle}>Choose Category</Title>
          <ListItem>
            <CheckBox
              checked={category === CATEGORY.SHOP}
              onPress={() => toggleCategory(CATEGORY.SHOP)}
            />
            <Body>
              <Text style={styles.checkboxTitle}>Shopping</Text>
            </Body>

            <CheckBox
              checked={category === CATEGORY.WORK}
              onPress={() => toggleCategory(CATEGORY.WORK)}
            />
            <Body>
              <Text style={styles.checkboxTitle}>Work</Text>
            </Body>

            <CheckBox
              checked={category === CATEGORY.LEARN}
              onPress={() => toggleCategory(CATEGORY.LEARN)}
            />
            <Body>
              <Text style={styles.checkboxTitle}>Learning</Text>
            </Body>
          </ListItem>

          <Button full onPress={handleSubmit}>
            <Text>Create Task</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 10,
  },
  checkboxTitle: {
    marginLeft: 5,
  },
});
