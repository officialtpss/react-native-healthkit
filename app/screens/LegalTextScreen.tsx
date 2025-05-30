import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type LegalScreenRouteProp = RouteProp<{ params: { type: 'terms' | 'privacy' } }, 'params'>;

export default function LegalTextScreen(): JSX.Element {
  const route = useRoute<LegalScreenRouteProp>();
  const { type } = route.params;
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    async function loadText() {
      try {
        const legalData = require('../assets/legal/legalTexts.json');
        setText(type === 'terms' ? legalData.terms : legalData.privacy);
      } catch (e) {
        setText('Failed to load legal content.');
      }
    }

    loadText();
  }, [type]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type === 'terms' ? 'Terms and Conditions' : 'Privacy Policy'}</Text>
      <ScrollView style={styles.content}>
        {text ? <Text style={styles.text}>{text}</Text> : <ActivityIndicator />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
});
