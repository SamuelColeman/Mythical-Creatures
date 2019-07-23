class Fairy {
	constructor(name) {
		this.name = name;
		this.dust = 10;
		this.clothes = {dresses: ['Iris']};
		this.disposition = 'Good natured';
		this.humanWards = [];
		this.counter = 0;

	}

	receiveBelief() {
		this.dust++;
	}

	believe() {
		this.dust += 10;
	}

	makeDresses(stringArray) {
		this.clothes.dresses = this.clothes.dresses.concat(stringArray) 
	}

	provoke() {
		this.disposition = 'Vengeful';
	}

	replaceInfant(infant) {
		this.counter++;
		if (this.disposition === 'Vengeful') {
		infant.disposition = 'Malicious';
		this.humanWards.push(infant);
		} else {
			return infant;
		}
		if (this.counter === 3) {
			this.disposition = 'Good natured';
		}
	}
}

module.exports = Fairy;