import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'
import img from '../../assets/img/image2.jpg'

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
      <View className='index'>
        <Image src={img} />
        <View><Text> {'的嗡嗡嗡v'} </Text></View>
      </View>
    )
  }
}

