import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Icon,
} from 'native-base';

import styles from './styles';

const CardTodoButton = ({
  iconName = 'work',
  iconType = 'MaterialIcons',
  description = 'Work',
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.container}>
        <CardItem header style={styles.IconContainer}>
          <Icon name={iconName} type={iconType} style={styles.defaultIcon} />
        </CardItem>
        <CardItem>
          <Text style={styles.description}>{description}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default CardTodoButton;
