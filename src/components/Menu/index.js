import React from 'react';
import {View, StyleSheet} from 'react-native';
import CardTodoButton from '../CardTodoButton';
import NavigationService from '../../navigationService';
// import { Container } from './styles';

const Menu = () => {
  return (
    <View style={styles.container}>
      <CardTodoButton
        iconName="book"
        description="Learning"
        onPress={() => {
          NavigationService.navigate('Learning');
        }}
      />
      <CardTodoButton iconName="shopping-basket" description="Shopping" />
      <CardTodoButton iconName="work" description="Work" />
      <CardTodoButton
        iconName="plus"
        iconType="AntDesign"
        description="New Todo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});
export default Menu;
