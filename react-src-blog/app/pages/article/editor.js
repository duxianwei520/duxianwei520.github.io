/*
 * @Author: dupi
 * @Date: 2017-06-28 17:16:12
 * @Last Modified by: duxianwei
 * @Last Modified time: 2017-08-14 17:44:24
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col } from 'antd'


@connect(
  (state, props) => ({
    config: state.config,
  })
)
export default class app extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {

      },
    }
  }

  render() {
    return (
      <div className=" page-editor">
        <h2>前端几大流行编辑器的个人看法</h2>
        <div className="intro">国内前端目前最流行的几个编辑器,可能就属Sublime text、Atom、Visual Studio Code这三者了，那么对这几个编辑器，作为一枚前端开发人员，应该怎么选择才比较合适呢，如果是一个团队呢？</div>
        <p>下面的这个数据是对这几个编辑器的一些性能的评价，转自<a href="http://blog.jobbole.com/109756/" target="_blank">编辑器性能测试：Atom 、VS Code、Sublime Text</a></p>
        <div className="img-wrap">
          <img src="../../images/editor/1.jpg" />
        </div>
        <div className="img-wrap">
          <img src="../../images/editor/2.jpg" />
        </div>
        <div className="img-wrap">
          <img src="../../images/editor/3.jpg" />
        </div>
        <div className="img-wrap">
          <img src="../../images/editor/4.jpg" />
        </div>
        <p>我用了5年的sublime，用了几个月的vscode，团队有其他人用过atom，所以就从自己的角度分析下这三者的优劣势</p>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="sublime text">
              <p>界面美观</p>
              <p>小巧灵活打开速度快</p>
              <p>插件库比较丰富</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="atom">
              <p>开源，社区驱动，插件库最为丰富</p>
              <p>和git的深度配合</p>
              <p>跨平台</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="vscode">
              <p>源免费，插件库现在越来越丰富</p>
              <p>打开超大文件非常快</p>
              <p>跟git的配合，甚至好于atom</p>
              <p>自定义配置比较简单，比如eslint</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="sublime text">
              <p>个人作品，更新看作者心情</p>
              <p>插件多了不知原因的易崩溃</p>
              <p>闭源，收费，虽然可以一直试用，但一天谈几十次弹窗也是有点烦躁的</p>
              <p>本身插件模块就需要安装，插件源地址各种被强，安装插件麻烦</p>
              <p>对超大文件表示亚历山大</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="atom">
              <p>卡，底层基于chromium和node，吃内存</p>
              <p>安装包非常大，有170多兆吧，实在很大，国内也就是HBuilder这么大了</p>
              <p>跨平台</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="vscode">
              <p>启动程序比较慢</p>
              <p>内存占用较大</p>
              <p>跟git的配合，甚至好于atom</p>
              <p>同一窗口不能打开多个项目文件</p>
            </Card>
          </Col>
        </Row>
        <h3>所以结论是：</h3>
        <ul>
          <li>Sublime text是速度快，占用内存小，但定制化不够强，易崩溃</li>
          <li>Atom定制化最强，但是占用内存高，易卡</li>
          <li>Vscode各方面都在中等，而且越来越往好的方向发展</li>
        </ul>
        <p className="tip">因为我们公司的前端团队有10来个人，所以非常有必要要对代码风格进行统一，不能有强烈的个人风格，那样会导致自己写的代码别人难以维护，所以我们编辑器统一的工作显得尤为重要了，在我试用了vscode两天后，就决定选择它了。
        当然，想要达到上面的要求，就必然要配上那些必不可少的插件，下面就给大家推荐一些用vscode的好用得不得了的插件</p>
        <Row className="plugin" gutter={16}>
          <Col span={24}>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img src="../../images/editor/p0.gif" />
              </div>
              <div className="custom-card">
                <h3>Eslint</h3>
                <p>语法检查</p>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img src="../../images/editor/p1.gif" />
              </div>
              <div className="custom-card">
                <h3>Vscode-icons</h3>
                <p>资源树目录加上图标</p>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img src="../../images/editor/p2.gif" />
              </div>
              <div className="custom-card">
                <h3>Path interlisence </h3>
                <p>路径自动补全</p>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img src="../../images/editor/p3.gif" />
              </div>
              <div className="custom-card">
                <h3>Npm interliscence </h3>
                <p>引入node包时候的自动提示</p>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img src="../../images/editor/p4.gif" />
              </div>
              <div className="custom-card">
                <h3>Auto close tag </h3>
                <p>自动闭合标签</p>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img src="../../images/editor/p2.gif" />
              </div>
              <div className="custom-card">
                <h3>Auto rename tag </h3>
                <p>自动命名标签</p>
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img src="../../images/editor/p3.gif" />
              </div>
              <div className="custom-card">
                <h3>Document this </h3>
                <p>统一添加文档头部注释</p>
              </div>
            </Card>
          </Col>
        </Row>
        <div className="footer">关于eslint的配置，大家可以看这里，<a href="https://github.com/duxianwei520/react/blob/master/.eslintrc.json" target="_blank">eslint配置文件</a>，然后，以上仅代表个人观点，对了，关于<a href="https://github.com/duxianwei520/react" target="_blank">react+redux+fetch+antd+webpack+es6/7</a>的框架的源码点击这里噢</div>
      </div>
    )
  }
}
