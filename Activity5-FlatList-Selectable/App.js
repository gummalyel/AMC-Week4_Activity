import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1', 
    title: '1. Morning Devotion',
    color: '#D3D3D3', 
    selectedColor: '#282828',
  },
  {
    id: '2', 
    title: '2. Morning Prayer', 
    color: '#ADD8E6', 
    selectedColor: '#00008B'
  },
  {
    id: '3', 
    title: '3. Taking a bath', 
    color: '#FFB6C1', 
    selectedColor: '#8B0000'
  },
  {
    id: '4', 
    title: 'Breakfast', 
    color: '#90EE90', 
    selectedColor: '#006400'
  },
  {
    id: '5', 
    title: '5. Physical exercise', 
    color: '#FFD700', 
    selectedColor: '#B58B00'
  },
  {
    id: '6', 
    title: '6. Lunch time', 
    color: '#ff8c00', 
    selectedColor: '#b86500'
  },
  {
    id: '7', 
    title: '7. Reading & Studying', 
    color: '#9370db', 
    selectedColor: '#440061'
  },
  {
    id: '8', 
    title: '8. Social Media & Updating GF', 
    color: '#483d8b', 
    selectedColor: '#002147'
  },
  {
    id: '9', 
    title: '9. Cleaning of room', 
    color: '#F5DEB3', 
    selectedColor: '#A52A2A'
  },
  {
    id: '10', 
    title: '10. Doing House chores',
    color: '#FFFFFF', 
    selectedColor: '#000000'
  },
  {
    id: '11', 
    title: '11. Fetching my siblings', 
    color: '#FF69B4', 
    selectedColor: '#FFC0CB'
  },
  {
    id: '12', 
    title: '12. Cooking for dinner', 
    color: '#ADD8E6', 
    selectedColor: '#00009B'
  },
  {
    id: '13', 
    title: '13. Eating dinner', 
    color: '#8B0000', 
    selectedColor: '#FFB6C1'
  },
  {
    id: '14', 
    title: '14. Hugas plato', 
    color: '#006400', 
    selectedColor: '#90EE90'
  },
  {
    id: '15', 
    title: '15. Online gaming', 
    color: '#9F8C76', 
    selectedColor: '#FFD700'
  },
  {
    id: '16', 
    title: '16. Bonding with the fam', 
    color: '#FF4500', 
    selectedColor: '#FFA07A'
  },
  {
    id: '17', 
    title: '17. Night shower', 
    color: '#9400D3', 
    selectedColor: '#E6E6FA'
  },
  {
    id: '18', 
    title: '18. Watching a movie', 
    color: '#Ffdfd3', 
    selectedColor: '#A9A9A9'
  },
  {
    id: '19', 
    title: '19. Drinking of Milk', 
    color: '#A52A2A', 
    selectedColor: '#F5DEB3'
  },
  {
    id: '20', 
    title: '20. Toothbrush', 
    color: '#D3D3D3', 
    selectedColor: '#696969'
  },
  {
    id: '21', 
    title: '21. Taking notes for tomorrow', 
    color: '#008080', 
    selectedColor: '#00008B'
  },
  {
    id: '22', 
    title: '22. Preparation of things for tomorrow', 
    color: '#ff00ff', 
    selectedColor: '#8B0000'
  },
  {
    id: '23', 
    title: '23. Bebe time muna', 
    color: '#90EE90', 
    selectedColor: '#006400'
  },
  {
    id: '24', 
    title: '24. Pray before sleep', 
    color: '#FFFFE0', 
    selectedColor: '#FFD700'
  },
  {
    id: '25', 
    title: '25. Lights off', 
    color: '#FFA07A', 
    selectedColor: '#FF4500'
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? item.selectedColor : item.color;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
