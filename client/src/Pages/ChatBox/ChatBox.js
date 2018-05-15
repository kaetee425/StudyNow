import React, { Component } from 'react'
import './ChatBox.css'

export default ({ text, username, handleTextChange }) => (

	<div>
		<div className="row">

		<h4 className="greetings">Hello, {username} </h4>
		
		<div className="col-xs-12">

			<div className="chat">
				<div>
					<input
						className="chatbox"
						type="text"
						value={text}
						placeholder="chat here..."
						onChange={handleTextChange}
						onKeyDown={handleTextChange}
					/>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>

		
		</div>
	</div>
);

//message typing section