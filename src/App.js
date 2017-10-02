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
          <Link className="nav-list" to="page1" showHeightActive={['10%', '60%']} toShowHeight
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            創新教學
          </Link>
          <Link className="nav-list" to="page2" showHeightActive={['60%', '50%']} toShowHeight
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            學生成就
          </Link>
          <Link className="nav-list" to="page3" offsetTop={100}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            專業團隊
          </Link>
          <Link className="nav-list" to="page3" offsetTop={100}
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
            <p>允行教育</p>
          </div>
          <div className="page-description" key="c">
            <p>我們因才施教，對症下藥，學生成績都出類拔萃</p>
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
      <ScrollOverPack id="page1" className="page1">
        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
          默認進入與出場
        </TweenOne>
        <QueueAnim key="1">
          <div key="0" className="demo"></div>
          <div key="1" className="demo" style={{ backgroundColor: '#F38EAD' }}></div>
          <div key="2" className="demo"></div>
          <div key="3" className="demo"></div>
        </QueueAnim>
      </ScrollOverPack>

      <ScrollOverPack
        className="pack-page page2"
        style={{ backgroundColor: '#0098CE' }}
        always={false}
        id="page2"
      >
        <div className="page2-title">只进入一次</div>
        <Animate key="0" transitionName="fade" transitionAppear>
          <div className="demo2"></div>
        </Animate>
        <TweenOne
          className="demo2"
          animation={{ y: 0, opacity: 1 }}
          key="1"
          style={{ transform: 'translateY(100px)', opacity: 0 }}
        />
      </ScrollOverPack>

      <ScrollOverPack
        className="pack-page page3"
        style={{ backgroundColor: '#174270' }}
        playScale={0.8}
        id="page3"
      >
        <TweenOne animation={{ opacity: 1 }} style={{ opacity: 0 }} key="title"
          className="page2-title"
        >
          在页面80％时进入
        </TweenOne>
        <Animate key="0" transitionName="fade" transitionAppear>
          <div className="demo"></div>
        </Animate>
        <TweenOne
          className="demo"
          animation={{ y: 0, opacity: 1 }}
          key="1"
          style={{ transform: 'translateY(100px)', opacity: 0 }}
        />
      </ScrollOverPack>
    </div>);
  }
}

//ReactDOM.render(<Demo />, document.getElementById('__react-content'));

export default App;