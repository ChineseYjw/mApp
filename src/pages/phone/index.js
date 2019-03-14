import Taro, { Component } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'

export default class index extends Component {
  config = {
    navigationBarTitleText: '圣豪州高端设计'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <View><Text> {'联系我们'} </Text></View>
      </View>
    )
  }
}


