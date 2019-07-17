class Vampire {
	constructor (name,pet,thirsty) {
		this.name = name;
		this.pet = pet;
		this.thirsty = true;
		if (this.pet === undefined) {
			this.pet = 'bat';
		} 		
	}
	drink () {
		this.thirsty = false;
	}
}

module.exports = Vampire;