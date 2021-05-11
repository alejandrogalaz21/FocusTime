import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from './src/utils/colors'
import Focus from './src/features/focus/Focus'

export default function App() {
  const [focus, setfocus] = useState(null)

  return (
    <View style={styles.container}>
      {focus ? <Text style={styles.title}>I have a subject</Text> : <Focus />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: colors.blue
  },
  title: {
    color: colors.white
  }
})
