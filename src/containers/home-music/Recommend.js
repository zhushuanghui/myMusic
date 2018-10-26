import React, {Component} from 'react';
import {Carousel} from 'antd';
import {getBannerApi,getRdSongApi} from '../../assets/api';
import 'babel-polyfill';
import 'antd/dist/antd.css'

class Recommend extends Component {
    constructor() {
        super()
this.state={banners:[{imageUrl:'',url:'',targetId:''}],rdSong:[{playCount:'',name:'',picUrl:'',id:''}]}
    }

async componentWillMount(){
let {banners}= await getBannerApi();
let {result:rdSong}=await getRdSongApi();
rdSong=rdSong.splice(0,6);
this.setState({...this.state,banners,rdSong})
}

    onChange = (a, b, c) => {
        console.log(a, b, c);
    }
    render() {
  console.log(this.state);
        return (
            <div className="recommend">
                <Carousel  className="carousel" autoplay={true}>
                {this.state.banners.map(banner=>(
                    <a href={banner.url} key={banner.targetId}>
                        <img src={banner.imageUrl} className="img"/>
                    </a>
                ))}
                </Carousel>

                <div className="four-list">
                    <div className="personal-fm">
                        <div className="iconfont icon-shouyinjishoutingguangboyinle"></div>
                        私人FM
                    </div>
                    <div className="daily-recmd">
                        <div className=" iconfont icon-calendar"></div>
                        每日推荐
                    </div>

                    <div className="song-list">
                        <div className="iconfont icon-gedan"></div>
                        歌单
                    </div>
                    <div className="record">
                        <div className="iconfont icon-paihangbang"></div>
                        排行榜
                    </div>
                </div>

                {/* 推荐音乐 */}
                <div className="rd-music">
                <p>推荐音乐<span>></span></p>
                <div className="rd-sl">
                {this.state.rdSong.map(item=>(
 <a href="" className="rd-s" key={item.id}>
 <img src={item.picUrl} alt="" className="img"/>
 <span className="rd-count iconfont icon-erji">{(item.playCount/10000).toFixed(0)}万</span>
 <p className="rd-name">{item.name}</p>
 </a>
                ))}
               
              
                </div>
                </div>
            </div>
        )
    }
}
export default Recommend;