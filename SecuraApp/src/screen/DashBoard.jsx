import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { fonts } from "../utils/fonts";

const DashBoard = () => {
  const [bluetoothStatus, setBluetoothStatus] = useState('Bluetooth Control');
  const [loading, setLoading] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null); // Track selected button

  const handleOnPress = () => {
    setLoading(true);
    setTimeout(() => {
      setBluetoothStatus('SIHC-05 connected');
      setLoading(false);
    }, 2000); // Simulate a network request or operation
  };

  const handleOffPress = () => {
    setLoading(true);
    setTimeout(() => {
      setBluetoothStatus('disconnected');
      setLoading(false);
    }, 2000); // Simulate a network request or operation
  };

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const getButtonStyle = (buttonName) => {
    if (selectedButton === buttonName) {
      if (buttonName.includes('Secura') || buttonName.includes('Secure')) {
        return [styles.button, styles.greenButton];
      } else {
        return [styles.button, styles.redButton];
      }
    }
    return styles.button;
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" style={styles.spinner} />
      ) : (
        <Text style={styles.header}>{bluetoothStatus}</Text>
      )}
      
      <View style={styles.bluetoothContainer}>
        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
          <Text style={styles.bttn}>ON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleOffPress}>
          <Text style={styles.bttn}>OFF</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={getButtonStyle('Lock Secura')}
          onPress={() => handleButtonPress('Lock Secura')}
        >
          <Text style={styles.buttonText}>Lock Secura</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getButtonStyle('Lock Unsecura')}
          onPress={() => handleButtonPress('Lock Unsecura')}
        >
          <Text style={styles.buttonText}>Lock Unsecura</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getButtonStyle('LED Secure')}
          onPress={() => handleButtonPress('LED Secure')}
        >
          <Text style={styles.buttonText}>LED Secure</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getButtonStyle('LED Unsecure')}
          onPress={() => handleButtonPress('LED Unsecure')}
        >
          <Text style={styles.buttonText}>LED Unsecure</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  bluetoothContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#45484A',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontFamily: fonts.Medium,
  },
  bttn: {
    textAlign: 'center',
    color: '#fff',
    width: 110,
    fontSize: 19,
    fontFamily: fonts.Medium,
  },
  spinner: {
    marginVertical: 20,
    color: '#45484A',
  },
  greenButton: {
    backgroundColor: 'green',
  },
  redButton: {
    backgroundColor: 'red',
  },
});
