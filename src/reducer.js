const initialState = {
    
	modals: {
		landingPage: true,
		addSpot: false,
		mySpots: false,
		singleResult: false
    },
    
	resultList: [{
		name: 'Panera Bread',
		location: '34 Fitty Street, Georgetown AK 75734',
		environment: 'Peace and Quiet'
	}, {
		name: 'Winding River Picnic Area',
		location: '44 River Street, Dallas TX 92943',
		environment: 'Peace and Quiet'
	}, {
		name: 'Downtown Coworking',
		location: '834 Brick Boulevard',
		environment: 'Somewhat Distracting'
    }],
    
	singleResult: {
		name: 'Panera Bread',
		location: '34 Fitty Street, Georgetown AK 75734',
		environment: 'Peace and Quiet',
		internet: 'WiFi',
		services: ['Coffee', 'Desks or Tables']
	}
};

export default(state, action)=>{
	state = state || initialState;
	
return state;
}