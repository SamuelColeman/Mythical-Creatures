class Pirate {
	constructor (name,job) {
		this.name = name;
		this.job = job;
		this.cursed = false;
		this.counter = 0;
		this.booty = 0;
		if (this.job === undefined) {
			this.job = "Scallywag";
		} 
	}
	commitHeinousAct() {
		this.counter++;
		if (this.counter>2) {
			this.cursed = true;
		}
	}
	robShip () {
		this.booty = 100;
		return "YAARRR!";
	}
}
module.exports = Pirate;