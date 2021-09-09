import React from 'react'
import {Link} from 'react-router-dom'
import classes from './header.module.css'

export default function Header(props) {
	return (
		<header className={classes.navbar}>
			<Link to='/home'>Portfolio</Link>
			<Link to='/about'>About</Link>
		</header>
	)
}
