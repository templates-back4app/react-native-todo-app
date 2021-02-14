import React from 'react';
import TaskList from '../../components/TaskList';
// import { Container } from './styles';

const exampleTodos = [
  {
    author: 'Kumar Pratik',
    description: 'Doing what you like will always keep you happy . .',
    created_at: '3:43 pm',
  },
  {
    author: 'Master Yoda',
    description: 'May the force be with you',
    created_at: '3:45 pm',
  },
];

const Shopping = () => {
  return <TaskList todos={exampleTodos} />;
};

export default Shopping;
