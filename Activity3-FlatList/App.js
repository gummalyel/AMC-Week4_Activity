import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1. Morning Devotion',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '2. Morning prayer',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '3. Taking a bath',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '4. Breakfast',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '5. Physical exercise',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '6. Lunch time',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '7. Reading & Studying',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '8. Social Media & Updating GF',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '9. Cleaning of room',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '10. Doing House chores',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '11. Fetching my siblings',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '12. Cooking for dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '13. Eating dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '14. Hugas plato',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '15. Online gaming',
  },
    {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '16. Bonding with the fam',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '17. Night shower',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '18. Watching a movie',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '19. Drinking of Milk',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '20. Toothbrush',
  },
    {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '21. Taking notes for tomorrow',
  },
    {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '22. Preparation of things for tomorrow',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '23. Bebe time muna',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '24. Pray before sleep',
  },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '25. Lights off',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#6495ed',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,  
    borderColor: '#000', 
  },
  title: {
    fontSize: 18,  
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
