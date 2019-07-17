class Hobbit {
	constructor (name,disposition,age,adult,isShort,old) {
		this.name = name;
		this.age = 0;
		this.counter = 0;
		this.isShort = true;
		this.old = false;
		this.hasRing = true;
		if (disposition === undefined) {
			this.disposition = 'homebody';
		}
		if (this.name !== 'Frodo') {
			this.hasRing = false;
		}
	}
	celebrateBirthday () {
		this.counter++
		this.age += 1;
		if (this.age >= 33) {
			this.adult = true;
		} else {
			this.adult = false;
			}
		if (this.age >= 101) {
			this.old = true;
		} 
		}
	}
	

	


module.exports = Hobbit;