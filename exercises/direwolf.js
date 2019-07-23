class Direwolf {
	constructor(name, home, size) {
		this.name = name;
		this.home = home || 'Beyond the Wall';
		this.size = size || 'Massive';
		this.starksToProtect = [];
		this.huntsWhiteWalkers = true;
	}
	protect(stark) {
		this.huntsWhiteWalkers = false;
		stark.safe = true;
		if (this.home === stark.location) {
		this.starksToProtect.push(stark);
		}
		if (this.starksToProtect > 2) {
			this.starksToProtect.shift();
		}
	}
	leave(stark) {
		this.starksToProtect = [];
		stark.safe = false;
	}

}

module.exports = Direwolf;