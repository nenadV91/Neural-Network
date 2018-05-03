import Matrix from './Matrix';
import Activation from './Activation';

export default class Layer {
	constructor({
		size, 
		prev, 
		activation, 
		learning_rate,
		isInput, 
		isOutput
	}) {

		this.signal = null;
		this.output = null;
		this.error = null;
		this.gradient = null;
		this.deltas = null;

		this.size = size;
		this.prev = prev;
		this.isInput = isInput;
		this.isOutput = isOutput;
		this.activation = activation;
		this.learning_rate = learning_rate

		this.init();
	}

	init() {
		if(!this.isInput) {
			this.initWeights();
			this.initBias();
		}	
	}

	initBias() {
		this.bias = new Matrix(this.size, 1);
		this.bias.randomize();
	}

	initWeights() {
		this.weights = new Matrix(this.size, this.prev);
		this.weights.randomize();
	}

	activate(inputs) {
		if(this.isInput) {
			this.signal = Matrix.fromArray(inputs);
			this.output = this.signal;
		} else {
			this.signal = Matrix.dot(this.weights, inputs);
			this.signal.add(this.bias);
			this.output = Matrix.mapMatrix(this.signal, this.activation.forward);
		}
	}

	getError(targets, error) {
		if(this.isOutput) this.error = Matrix.subtract(targets, this.output);
		else this.error = Matrix.dot(Matrix.transpose(targets), error);
	}

	backPropagate(prev_layer) {
		this.gradient = Matrix.mapMatrix(this.output, this.activation.backward);
		this.gradient.multiply(this.error);

		this.deltas = Matrix.dot(this.gradient, Matrix.transpose(prev_layer));
		this.deltas.multiply(this.learning_rate);
	}

	applyChanges() {
		this.weights.add(this.deltas);
		this.bias.add(this.gradient);
	}

	connect(layer) {
		this.prev = layer.size;
		this.initWeights();
	}
}