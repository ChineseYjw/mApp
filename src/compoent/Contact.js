import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import {AtDivider} from 'taro-ui'

export default class  Contact extends Component {

  static options = {
    addGlobalClass: true
  }
  onTap () {
    Taro.getLocation({//获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息
      success: function () {
        Taro.openLocation({//​使用微信内置地图查看位置。
          latitude: 33.3376800000,//要去的纬度-地址
          longitude: 120.1454100000,//要去的经度-地址
          name: "圣豪州装饰",
          address:'圣豪州装饰'
        })
      }
    })
  }
  onPhone(){
    Taro.makePhoneCall({
      phoneNumber: '0515-64515492'
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className=''>
        <View className='doc-header'>
          <View className='doc-header__title'>关于我们</View>
        </View>
        <View className='at-row at-row__justify--around'>
          <View className='at-col at-col-5 at-article__h3'>联系方式：0515-64515492</View>
          <View className='at-col at-col-5 at-article__h3' style='text-align:right;color:#6190E8;' onClick={this.onPhone.bind(this)}>点击拨打</View>
        </View>
        <AtDivider height='60' />
        <View className='at-row at-row__justify--around'>
          <View className='at-col at-col-5 at-article__h3'>手机号：1685184152</View>
          <View className='at-col at-col-5 at-article__h3' style='text-align:right;color:#6190E8;' onClick={this.onPhone.bind(this)}>点击拨打</View>
        </View>
        <AtDivider height='60' />
        <View className='at-row at-row__justify--around'>
          <View className='at-col at-col-5 at-article__h3'>地址：盐城金太阳装饰城5楼圣豪州装饰</View>
          <View className='at-col at-col-5 at-article__h3' style='text-align:right;color:#6190E8;' onClick={this.onTap}>点击导航</View>
        </View>
        <AtDivider height='60' />

      </View>
    )
  }
}

