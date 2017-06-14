import Meteor from 'react-native-meteor'
import EJSON from 'ejson'

export default function (interval = 5000) {
  return setInterval(() => {
    const Data = Meteor.getData()
    const subIds = Object.keys(Data.subscriptions)
    console.log(`${subIds.length} subscription(s)`)
    subIds.forEach((id) => {
      const sub = Data.subscriptions[id]
      console.log(`${sub.name}(${EJSON.stringify(sub.params)}) (ready: ${sub.ready}, inactive: ${sub.inactive})`)
    })
  }, interval)
}
