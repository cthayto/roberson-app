import axios from 'axios'

export const getCavs = async () => {
  try {
    const res = await axios.get(
      'https://apis-hml.volanty.com/api/v1/schedule-api/cav'
    )
    return res.data
  } catch (err) {
    console.log(err)
  }
}
