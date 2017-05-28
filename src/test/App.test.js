import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

describe('Rendering', () => {

    it('render succeeds with logo', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div)
        expect(div.innerHTML).toMatch(/src="logo.svg"/)
    })
})