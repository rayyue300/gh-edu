// use jsx to render html, do not modify simple.html
import 'rc-scroll-anim/assets/index.css';
import './App.css'
import ScrollAnim from 'rc-scroll-anim';
import React from 'react';
import ReactDOM from 'react-dom';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import Button from 'react-bootstrap/lib/Button';
const _package = require('../package.json');

const Link = ScrollAnim.Link;
const Element = ScrollAnim.Element;
const ScrollOverPack = ScrollAnim.OverPack;
const EventListener = ScrollAnim.Event;
const ScrollParallax = ScrollAnim.Parallax;

var ReactFitText = require('react-fittext');

//ScrollAnim.scrollScreen({scrollInterval: 600});
class App extends React.Component {
  componentDidMount() {
    // 添加改变窗口事件,可加setTimeout
    EventListener.addEventListener('resize.userResize', this.barAnimate.bind(this));
  }

  onFocus = (e) => {
    console.log(e, 'focus');
    this.dom = e.target;
    this.barAnimate();
  }

  onBlur = (e) => {
    console.log(e, 'blur');
  }

  onChange = (e) => {
    console.log(e);
  }

  barAnimate = () => {
    if (!this.dom) {
      return;
    }
    const bar = this.refs.bar;
    bar.style.left = `${this.dom.getBoundingClientRect().left}px`;
  }

  img_p0teacher = require('./page0_teacher.fw.png');

  render() {
    return (<div>
      <div className="nav nav_bg">
        <div className="logo">
          <p>允行教育</p>
        </div>
        <div className="nav-wap">
          <Link className="nav-list" to="page0" showHeightActive={['50%', '10%']}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            允行教育
          </Link>
          <Link className="nav-list" to="page1" showHeightActive={['10%', '70%']}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            創新教學
          </Link>
          <Link className="nav-list" to="page2" showHeightActive={['10%', '70%']}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            學生成就
          </Link>
          <Link className="nav-list" to="page3" showHeightActive={['10%', '70%']}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            專業團隊
          </Link>
          <Link className="nav-list" to="page4" showHeightActive={['10%', '70%']}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            馬上報名
          </Link>
          <div ref="bar" className="nav-bar" />
        </div>
      </div>
      <Element className="pack-page page0 page0_overlay" id="page0" onChange={this.onChange}>
        {/* <QueueAnim className="home-title">
          <div className="page-title" key="title">
            <p>允行教育</p>
          </div>
          <div className="page-description" key="c">
            <p>教學創新有效，成績出類拔萃</p>
          </div>
        </QueueAnim> */}
        <ScrollParallax
          className="home-title"
          animation={{ y: -300, playScale: [0.3, 2] }}
          style={{ transform: 'translateY(0px)' }}
        >
          <div className="page-title" key="title">
            <ReactFitText compressor={0.4} minFontSize={56}>
              <p>允行教育</p>
            </ReactFitText>
          </div>
          <div className="page-description" key="c">
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>我們因才施教，對症下藥，學生成績都出類拔萃</p>
            </ReactFitText>
          </div>
          <div className="page-buttons">
            <Button bsSize="large">聯絡我們</Button>
            <Button bsSize="large" bsStyle="success">馬上報名</Button>
          </div>
        </ScrollParallax>
        <ScrollParallax
          className="home-teacher"
          animation={{ y: -400, playScale: [0.9, 2] }}
          style={{ transform: 'translateY(0px)' }}
        >
          <img src={this.img_p0teacher} />
        </ScrollParallax>
      </Element>

      <ScrollOverPack id="page1" className="pack-page page1" replay="true">
        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
          <div class="p1_title">
            <ReactFitText compressor={0.4} minFontSize={56}>
              <p>創新教學</p>
            </ReactFitText>
          </div>
        </TweenOne>
        <QueueAnim key="1" interval="250">
          <div key="0" className="demo p1_demo">
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>從遊戲中學習，學習愉快有效</p>
            </ReactFitText>
          </div>
          <div key="1" className="demo p1_demo">
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>引入原創手機應用，隨時複習所學</p>
            </ReactFitText>
          </div>
          <div key="2" className="demo p1_demo">
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>附有網上教室，學生可隨時發問</p>
            </ReactFitText>
          </div>
        </QueueAnim>
      </ScrollOverPack>

      <ScrollOverPack
        className="pack-page page2"
        style={{ backgroundColor: '#0098CE' }}
        replay={true}
        always={true}
        id="page2"
      >
        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
          <div class="p2_title">
            <ReactFitText compressor={0.4} minFontSize={56}>
              <p>學生成就</p>
            </ReactFitText>
          </div>
        </TweenOne>
        <QueueAnim key="1" interval="500">
          <TweenOne
            className="demo2 p2_demo"
            animation={{ x: 0, opacity: 1 }}
            key="1"
            style={{ transform: 'translateX(-300px)', opacity: 0.5 }}
          >
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>90&#37;學生獲香城三大錄取</p>
            </ReactFitText>
          </TweenOne>
          <TweenOne
            className="demo2 p2_demo"
            animation={{ x: 0, opacity: 1 }}
            key="2"
            style={{ transform: 'translateX(300px)', opacity: 0.5 }}
          >
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>連續四年有本校學生成為香城狀元</p>
            </ReactFitText>
          </TweenOne>
        </QueueAnim>
      </ScrollOverPack>

      <ScrollOverPack
        className="pack-page page3"
        style={{ backgroundColor: '#174270' }}
        replay={true}
        always={true}
        id="page3"
      >
        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
          <div class="p3_title">
            <ReactFitText compressor={0.4} minFontSize={56}>
              <p>專業團隊</p>
            </ReactFitText>
          </div>
        </TweenOne>
        <QueueAnim key="1" interval="500">
          <TweenOne
            className="demo2 p3_demo"
            animation={{ x: 0, opacity: 1 }}
            key="1"
            style={{ transform: 'translateX(-300px)', opacity: 0.5 }}
          >
            <div class="p3_demo_pic1">

            </div>
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>課程總監 - 修端</p>
            </ReactFitText>
          </TweenOne>
          <TweenOne
            className="demo2 p3_demo"
            animation={{ x: 0, opacity: 1 }}
            key="2"
            style={{ transform: 'translateX(300px)', opacity: 0.5 }}
          >
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>連續四年有本校學生成為香城狀元</p>
            </ReactFitText>
          </TweenOne>
          <TweenOne
            className="demo2 p3_demo"
            animation={{ x: 0, opacity: 1 }}
            key="2"
            style={{ transform: 'translateX(300px)', opacity: 0.5 }}
          >
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>連續四年有本校學生成為香城狀元</p>
            </ReactFitText>
          </TweenOne>
        </QueueAnim>
      </ScrollOverPack>

      <ScrollOverPack id="page4" className="pack-page page1" replay="true">
        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
          <div class="p1_title">
            <ReactFitText compressor={0.4} minFontSize={56}>
              <p>馬上報名</p>
            </ReactFitText>
          </div>
        </TweenOne>
        <QueueAnim key="1" interval="250">
          <div key="0" className="demo">
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>從遊戲中學習，學習愉快有效</p>
            </ReactFitText>
          </div>
          <div key="1" className="demo">
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>引入原創手機應用，隨時複習所學</p>
            </ReactFitText>
          </div>
          <div key="2" className="demo">
            <ReactFitText compressor={2.4} minFontSize={26}>
              <p>附有網上教室，學生可隨時發問</p>
            </ReactFitText>
          </div>
        </QueueAnim>
      </ScrollOverPack>
    </div>);
  }
}

//ReactDOM.render(<Demo />, document.getElementById('__react-content'));

export default App;