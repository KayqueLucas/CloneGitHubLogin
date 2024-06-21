import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' }} 
        style={styles.image} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Logo;
