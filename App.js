import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [url, setUrl] = useState('');
  const [go, setGo] = useState(false);

  if (go == false) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          onChangeText={text => setUrl(text)}
          value={url}
        />
        <View style={{margin:5}}>
          <Button
            onPress={() => setGo(true)}
            title="GO"
          />
       </View>
      </View>
    );
  } else {
    return(
      <WebView
        source={{ uri: url }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    borderWidth: 1,
    margin: 5,
  },
});