import Taro, { Component } from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import Designer from '../../compoent/Designer'

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
        <View style='text-align:center;height: 2rem;'><Text> {'设计师'} </Text></View>
        <Designer></Designer>
      </View>
    )
  }
}

