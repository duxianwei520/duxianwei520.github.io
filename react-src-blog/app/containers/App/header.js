import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


@connect(
  (state, props) => ({ config: state.config })
)
export default class Header extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <header id="navbar">
        <div id="navbar-container" className="boxed">
          <div className="navbar-header">
            <Link to={'/'} className="navbar-brand">
              <div className="brand-title">
                <span className="brand-text">肚小肚的git</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}
