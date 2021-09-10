import React from 'react';
import classes from './landing.module.css';


export default function Landing(props) {
	return (
		<div className={classes.landing}>
			<img src={props.img} className={classes.landingImg}/>
			<div className={classes.overlay}>
				<h1>{props.header}</h1>
				<p>{props.subHeader}</p>
			</div>
		</div>
	)
}