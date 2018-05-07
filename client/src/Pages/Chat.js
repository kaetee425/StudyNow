import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ChatComp from './ChatBox/ChatComp'

class Chat extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<ChatComp />

				<Footer />
			</div>
		)
	}
}
export default Chat