export default class Activation {
	constructor(type) {
		if(!this[type]) throw new Error('Undefined activation function type.');
		else this.setActivation(type);
	}

	setActivation(type) {
		Object.assign(this, this[type]())
	}	

	sigmoid() {
		return {
			forward: x => 1 / (1 + Math.exp(-x)),
			backward: y => y * (1 - y)
		}
	}
	
	tanh() {
		return {
			forward: x => {
				const exp = Math.exp(2 * x);
				return (exp - 1) / (exp + 1) || 1e-18
			},
			backward: y => 4 / Math.pow(Math.exp(y) + Math.exp(-y), 2) || 1e-18
		}
	}
}