import Taro, { Component } from '@tarojs/taro'
import { View,Text,Image} from '@tarojs/components'
import './case.css'

export default class Case extends Component {
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
      <View className='at-row at-row--wrap'>
        {list.map(item=>(
          <View key={item.text} className='at-col at-col-5 at-col__offset-0.5' >
            <Image src={item.image} />
            <View><Text> {item.text} </Text></View>
          </View>))
        }
      </View>
    )
  }
}
const list=[
  {image:'http://sc.jb51.net/uploads/allimg/121129/2-12112Z94A15a.jpg',text:'第一个'},
  {image:'http://sc.jb51.net/uploads/allimg/150403/10-1504031H411E6.jpg',text:'第二个'},
  {image:'http://img.daimg.com/uploads/allimg/110825/3-110R5133545427.jpg',text:'第三个'},
  {image:'http://img1.imgtn.bdimg.com/it/u=1201802982,2046968635&fm=26&gp=0.jpg',text:'第四个'},
  {image:'http://img2.imgtn.bdimg.com/it/u=1677081821,1987147497&fm=26&gp=0.jpg',text:'第五个'}
]
