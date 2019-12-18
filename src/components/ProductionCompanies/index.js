import React from 'react';
import {ScrollView} from 'react-native';
import Company from '../Company';

// import { Container } from './styles';

export default function ProductionCompanies({items}) {
  return (
    <ScrollView horizontal={true}>
      {items.map((item, key) => (
        <Company key={key} item={item}></Company>
      ))}
    </ScrollView>
  );
}
