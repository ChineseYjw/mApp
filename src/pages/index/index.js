import Taro, { Component } from '@tarojs/taro'
import { AtTabBar,AtGrid,AtNoticebar,AtDivider } from 'taro-ui'
import { View,ScrollView,SwiperItem,Swiper,Image } from '@tarojs/components'
import Case from '../../compoent/Case'
import Designer from '../../compoent/Designer'
import img0 from '../../assets/img/image0.jpg'
import img1 from '../../assets/img/image1.jpg'
import img2 from '../../assets/img/image2.jpg'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  switchTab (value) {
    this.setState({
      current: value
    })
  }
  skipTo(value){
    Taro.navigateTo({
      url:`/pages/${value.mark}/index`
    })
  }
  skipToDesigner(){
    Taro.navigateTo({url:`/pages/designer/index`})
  }
  skipToCase(){
    Taro.navigateTo({url:`/pages/case/index`})
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <ScrollView>
          <View className='index' hidden={this.state.current===0 ? false : true}>
            <Swiper className='test-h' indicatorColor='#999' indicatorActiveColor='#333' circular indicatorDots autoplay >
              {[img0,img1,img2].map(img=>(<SwiperItem key={img}><Image src={img} /></SwiperItem>))}
            </Swiper>
            <AtGrid columnNum={4} hasBorder={false}  data={data} onClick={this.skipTo} />
            <AtDivider height='12' />
            <AtNoticebar icon='volume-plus'>
              盐城圣豪州装修小程序上线啦！
            </AtNoticebar>
            <AtNoticebar icon='arrow-right' single showMore moreText='MORE' onGotoMore={this.skipToCase}>
              公司案例
            </AtNoticebar>
            <AtDivider height='12' />
            <Case></Case>
            <AtNoticebar icon='arrow-right' single showMore moreText='MORE' onGotoMore={this.skipToDesigner} >
              设计师
            </AtNoticebar>
            <AtDivider height='12' />
            <Designer></Designer>
          </View>
          <View hidden={this.state.current===1 ? false : true}> {'xxsxsxsxsx'} </View>
          <View hidden={this.state.current===2 ? false : true}> {'dwdddddddddddddd'} </View>
          <AtDivider height='120' />
        </ScrollView>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'home' },
            { title: '免费量房', iconType: 'list' },
            { title: '联系我们', iconType: 'user' }
          ]}
          onClick={this.switchTab.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
const data= [{image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', value: '公司简介',mark:'introduction'} ,
  {image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png', value: '公司案例',mark:'case'},
  {image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png', value: '设计师',mark:'designer'},
  {image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png', value: '联系我们',mark:'phone'}]



