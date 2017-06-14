# react-native-meteor-debug-subs

Logs out details about what subscriptions `react-native-meteor` currently has open every 5 seconds.

## Example

```js
import debugSubs from 'react-native-meteor-debug-subs'
debugSubs(5000) // Every 5 seconds is default
```

### Output

```
2 subscription(s)
chat(["waFeDSBQNuXdsWKbb",0]) (ready: true, inactive: false)
chat/messages(["waFeDSBQNuXdsWKbb",10]) (ready: true, inactive: false)
```
