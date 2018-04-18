import { Component } from 'react'
import { render } from 'react-dom'

class Display extends Component {
	render() {
		return (
			<div>Important Announcement</div>
		)
	}
}

render(<Display />, document.getElementById('react-container'))