export abstract class Coin{ // abstract coin class, coin must have value
	constructor(public value: number){
		this.value = value;
	}
}

export class Quarter extends Coin{ // class extends abstract coin class, constructor use's coin's constructor
	constructor(){
		super(.25);
	}
		getImageUrl(){ // returns png file for quarter 
		return "img/Quarter.png";
	}
}
export class Dime extends Coin{
	constructor(){
		super(.10);
	}
	getImageUrl(){
		return "img/Dime.png";
	}
}

export class Half extends Coin{
	constructor(){
		super(.5);
	}
	getImageUrl(){
		return "img/Half.png";
	}
}

export class Dollar extends Coin{
	constructor(){
		super(1);
	}
	getImageUrl(){
		return "img/Dollar.jpg";
	}
}
