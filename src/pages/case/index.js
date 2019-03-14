import Taro, { Component } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import Case from '../../compoent/Case'

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
        <View><Text> {'案例'} </Text></View>
        <Case></Case>
      </View>
    )
  }
}

