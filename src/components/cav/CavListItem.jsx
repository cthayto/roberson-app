import { View, Text, StyleSheet, Linking } from 'react-native'
import { Card, List } from 'react-native-paper'

const styles = StyleSheet.create({
  item: {
    padding: 2,
    flex: 1,
    marginBottom: 4,
  },
  accordion: {
    color: '#49E295',
  },
  link: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

const CavListItem = ({ item }) => {
  const openGoogleMaps = (link) => {
    Linking.openURL(link)
  }

  return (
    <View style={styles.item}>
      <List.Accordion
        titleStyle={styles.link}
        style={styles.accordion}
        title={item.description}
        left={(props) => <List.Icon {...props} icon="map" color="#49E295" />}
      >
        <List.Item
          title={`${item.address} ${item.addressNumber} ${
            item.addressComplement ?? ''
          }`}
        />
        <List.Item title={`${item.city} - ${item.state}`} />
        <List.Item
          style={styles.link}
          title="Abrir Google Maps"
          left={(props) => <List.Icon {...props} icon="pin" color="#49E295" />}
          onPress={() => {
            openGoogleMaps(item.googleMapsUrl)
          }}
        />
      </List.Accordion>
    </View>
  )
}

export default CavListItem
