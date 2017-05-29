import React, { Component } from 'react'
import classNames from 'classnames'
import menu from '../asset/menu.png'
import '../asset/style/com/Menu.css'

class Menu extends Component {

    state = {
        timelineType: 'public',
        menuElement: null,
        menuHidden: true,
    }

    async toggleMenu() {
        if (!this.state.menuElement) {
            const menuElement = await document.querySelector('.menu')
            this.setState({ menuElement })
        }
        const menu = this.state.menuElement
        menu.style.height = '100%'

        this.state.menuHidden || setTimeout(() => {
            menu.style.height = '48px'
        }, 300)

        this.setState({ menuHidden: !this.state.menuHidden })
    }

    render() {
        return (
            <div className={classNames({ 'menu': true, 'menu_show': !this.state.menuHidden })}>
                <aside>
                    <div className="head">
                        <img alt="DreamsAchieved" src="http://tva3.sinaimg.cn/crop.0.0.180.180.180/7896a011jw1e8qgp5bmzyj2050050aa8.jpg" />
                        <div className="username">DreamsAchieved</div>
                    </div>
                    <ul>
                        <li onClick={this.toggleMenu.bind(this)}>
                            <router-link to="/timeline/public">公共微博</router-link>
                        </li>
                        <li onClick={this.toggleMenu.bind(this)}>
                            <router-link to="/timeline/friends">朋友微博</router-link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <header>
                        <img onClick={this.toggleMenu.bind(this)} src={menu} alt="" />
                        <div className="title">
                            <span>{this.state.timelineType === 'public' ? '公共微博' : '朋友微博'}</span>
                        </div>
                    </header>
                    <div className="shade" onClick={this.toggleMenu.bind(this)} />
                </main>
            </div>
        )
    }
}

export default Menu