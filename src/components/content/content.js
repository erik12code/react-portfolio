import React from 'react';
import {Switch, Route} from 'react-router-dom';
import classes from './content.module.css';

export default function Content(props) {

	const experience = [
		{
			id: 1,
			image: '/assets/images/notetaker.png',
			title: 'Notetaker Web Application',
			description: 'A command line application that allows a user to create and manage employees',
			url: 'https://infinite-hamlet-26058.herokuapp.com/notes'
		},
		{
			id: 2,
			image: '/assets/images/mezcal.png',
			title: 'Web Application for finding Inspirational Quotes',
			description: 'A command line application that allows a user to create and manage employees',
			url: 'https://mezcal-lol-4am.herokuapp.com/'
		},
		{
			id: 3,
			image: '/assets/images/notetaker.png',
			title: 'Employee Management System',
			description: 'A command line application that allows a user to create and manage employees'
		}
	]

	return (
		<div className={classes.content}>
			<Switch>
				<Route path='/home'>
				<Portfolio data={experience}/>
				</Route>
				<Route path='/about'>
				<About/>
				</Route>
			</Switch>
		</div>
		)
}

const Portfolio = (props) => {
	return (
		<div className={classes.portfolio}>
			{props.data.map(item => {
				return (
					<PastWorks data={item}/>
				)
			})}
		</div>
	)
}
const PastWorks = (props) => {
	return (
		<a href={props.data.url} target='_blank' className={props.data.id === 2 ? classes.experience1 : classes.experience}>
		<div className={classes.contentWrapper}>
			<h3>Past work</h3>
			<p>Description of past work</p>
		</div>
		<div className={classes.imgContainer}><img src={props.data.image} alt={props.data.image}/>
			<div className={classes.imgOverlay}></div>
		</div>

		</a>
	)
}

const About = (props) => {
	return (
	<div>About</div>
	)
}