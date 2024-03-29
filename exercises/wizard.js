class Wizard {
 constructor (object) {
 	this.name = object.name;
	this.bearded = true;
	this.isRested = true;
	this.counter = 0;
 	if (object.bearded !== undefined) {
 		this.bearded = object.bearded;
 	}
 }
 incantation (spellInput) {
 	var spell = spellInput.toUpperCase();
 	return spell;
 }
 cast() {
 	this.counter++;
 	if (this.counter >= 3) {
 		this.isRested = false;
 		return "I SHALL NOT CAST!";
 	}
 	return "MAGIC BULLET";
 }
}

module.exports = Wizard;