class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
		this.counter = 0;
	}

	shoot() {
		this.counter++;
		if (this.counter > 2 || this.layingDown === true) {
			this.cranky = true;
			return 'NO!'
		} else {
		return 'Twang!!!';
		}
	}

	run() {
		this.counter++;
		if (this.counter > 2 || this.layingDown === true) {
			this.cranky = true;
			return 'NO!'
		} else {
		return 'Clop clop clop clop!!!';
		}
	}

	sleep() {
		if (this.standing === true) {
			return 'NO!';
		} else {
			this.cranky = false;
			this.counter = 0;
			return 'ZZZZ';
		}
	}

	layDown() {
		this.standing = false;
		this.layingDown = true;
	}

	standUp() {
		this.standing = true;
		this.layingDown = false;
	}
	
	drinkPotion() {
		if (this.layingDown === false) {
			this.cranky = false;
		} else {
			return 'Not while I\'m laying down!';
		}
		if (this.counter < 1) {
			this.cranky = true;
		}
	}	
}

module.exports = Centaur;