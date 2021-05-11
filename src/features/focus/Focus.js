import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { colors } from './../../utils/colors'

export default function Focus({ setfocus }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What Would You Like To Focus On ?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} underlineColor={colors.strong} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'center'
  },
  title: {
    color: colors.grey,
    fontWeight: 'bold',
    fontSize: 24
  },
  inputContainer: {
    paddingTop: 20
  },
  input: {
    backgroundColor: colors.grey
  }
})
