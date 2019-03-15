import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './Designer.css'

export default class Designer extends Component {

  static options = {
    addGlobalClass: true
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='list'>
        {list.map(item=>(
          <View key={item.designer} className='t-article__section at-row'>
            <View className='at-col at-col-3' style='padding:1rem;margin-bottom:0.5rem;'><AtAvatar image={item.image} circle size='large' style='align-items: center;'></AtAvatar></View>
            <View className='at-col at-col-9' style='padding-top:0.3rem;'>
              <View className='designer-text'> {item.designer} </View>
              <View className='designer-text'> {item.case} </View>
              <View className='designer-text' style='overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width:14rem'> {item.idea} </View>
            </View>
          </View>))
        }
      </View>
    )
  }
}
const list=[
  {image:'http://img.zcool.cn/community/0171df5915dd69b5b3086ed427345a.jpg@900w_1l_2o_100sh.jpg',designer:'朱良东',case:'朱良东套',idea:'为业主非覅九分i加分加分积极奋发i就覅饥饿反'},
  {image:'http://img0w.pconline.com.cn/pconline/1403/29/spcgroup/width_640,qua_30/4523636_05.jpg',designer:'刘玲',case:'刘玲套',idea:'的非法外挂俄方微风违法违法二分五分而无法违法'},
  {image:'http://imgtu.5011.net/uploads/content/20170515/9405271494837034.png',designer:'张航',case:'张航套',idea:'俄方微风我违法 发嗡嗡飞五分违法我二分发嗡舞 '},
  {image:'http://5b0988e595225.cdn.sohucs.com/images/20171119/dceb99e7f98c4537b5b0e14c8db1b323.jpeg',designer:'唐艳',case:'唐艳套',idea:'分违法二分五分二分违法二分我发二五我问发嗡发'}
]

