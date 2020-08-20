import React from 'react';
import Card from './Card';

const CardList=({robots})=>{
	// Testing error boundry for build mode
	// if(true){
	// 	throw new Error('Nooooo!');
	// }
	return(
		<div>
    		{robots.map((user)=>{
				return (
					<Card
						key={user.id}
						id={user.id} 
						name={user.name}
						email={user.email}
					/>
				)})}
    	</div>
	);
}

export default CardList;