import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerParamList = {
  Dashboard: undefined;
};

type DashboardScreenProps = {
  navigation: DrawerNavigationProp<DrawerParamList>;
};

const cardData = [
  { title: 'Heart Rate', value: '72 bpm' },
  { title: 'Steps', value: '10,240' },
  { title: 'Calories', value: '500 kcal' },
  { title: 'Sleep', value: '7.5 hrs' },
  { title: 'Blood Pressure', value: '120/80' },
  { title: 'Oxygen Saturation', value: '98%' },
  { title: 'Temperature', value: '36.6°C' },
  { title: 'Water Intake', value: '2.1 L' },
];

const screenWidth = Dimensions.get('window').width;
const cardSize = (screenWidth - 48) / 2; // padding and margin adjusted for 2 columns

export default function DashboardScreen({ navigation }: DashboardScreenProps): JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Your Health Overview</Text>

      <View style={styles.grid}>
        {cardData.map((item, index) => (
          <HealthCard key={index} title={item.title} value={item.value} />
        ))}
      </View>

    </ScrollView>
  );
}

const HealthCard = ({ title, value }: { title: string; value: string }) => (
  <View style={[styles.card, { width: cardSize, height: cardSize }]}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f6f8',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
});
