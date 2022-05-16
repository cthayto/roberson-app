import { useEffect, useState } from 'react'
import { FlatList, StatusBar, View, StyleSheet } from 'react-native'
import { getCavs } from '../Api'
import CavListItem from '../components/cav/CavListItem'

const style = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
})

const Home = () => {
  const [cavs, setCavs] = useState([])

  useEffect(() => {
    getCavList()
  }, [])

  const getCavList = async () => {
    try {
      const response = await getCavs()
      console.log('cavs: ', response)
      setCavs(response)
    } catch (err) {
      console.log(err)
    }
  }

  const renderItem = ({ item }) => {
    return <CavListItem item={item} />
  }

  return (
    <View style={style.container}>
      <StatusBar style="auto" />
      <FlatList
        data={cavs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Home
