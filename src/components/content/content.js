import React from 'react';
import {Switch, Route} from 'react-router-dom';
import classes from './content.module.css';
import Landing from '.././landing/landing.js';

export default function Content(props) {

	const experience = [
		{
			id: 1,
			image: '/assets/images/notetaker.png',
			title: 'Notetaker Web Application',
			description: 'A frontend web application that allows a user to store notes',
			url: 'https://infinite-hamlet-26058.herokuapp.com/notes'
		},
		{
			id: 2,
			image: '/assets/images/mezcal.png',
			title: 'Web Application for finding Inspirational Quotes',
			description: 'This frontend react application is powered by an API called ZenQuotes, that provides categorized quotes by many different authors, this application also allows users to requreset to create quotes through the 3rd party package EmailJS',
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
		<Landing header='Erik Lew' subHeader='Frontend Web Developer' img='/assets/images/bkg.jpg'/>
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
			<h3>{props.data.title}</h3>
			<p>{props.data.description}</p>
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