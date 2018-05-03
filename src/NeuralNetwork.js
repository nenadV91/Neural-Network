import Matrix from './Matrix';
import Activation from './Activation';
import Layer from './Layer';

export default class NeuralNetwork {
	constructor(options) {
		this.layers = {}
		this.hidden = [];
		this.init(options);		
	}

	get lastHidden() {
		return this.hidden[this.hidden.length - 1];
	}

	init(options = {}) {
		this.learning_rate = options.learning_rate || 0.1;
		this.activation = new Activation(options.activation || 'sigmoid');
		this.initLayers(options.layers || {});
	}

	query(inputs_array) {
		this.checkLayers();
		this.activateLayer(this.layers.input, inputs_array);
		this.activateHidden(this.layers.input.output);
		this.activateLayer(this.layers.output, this.lastHidden.output);

		return this.layers.output.output;
	}

	train(inputs_array, targets_array) {		
		this.inputs  = Matrix.fromArray(inputs_array);
		this.targets = Matrix.fromArray(targets_array);
		
		this.query(inputs_array);
		
		this.layers.output.getError(this.targets);
		this.layers.output.backPropagate(this.lastHidden.output);
		this.layers.output.applyChanges();

		this.trainHidden(this.layers.output);
	}

	trainHidden(output) {
		let hidden = this.layers.hidden, 
			index = hidden.length, 
			prev = output;

		while(index--) {
			let layer = hidden[index];
			let next = hidden[index - 1] || this.layers.input;
			layer.getError(prev.weights, prev.error);
			layer.backPropagate(next.output);
			layer.applyChanges();
			prev = layer;		
		}
	}

	checkLayers() {
		if(!this.input) throw new Error('Missing input layer.');
		if(!this.hidden.length) throw new Error('Network must have minimum one hidden layer.');
		if(!this.output) throw new Error('Missing output layer.');
	}

	initLayers({iNodes, hNodes, oNodes}) {
		if(iNodes) this.setInput(new Layer({size: iNodes}));
		if(hNodes) hNodes.forEach(size => this.setHidden(new Layer({size})));
		if(oNodes) this.setOutput(new Layer({size: oNodes}));	
	}

	addLayer(object) {
		let {input, hidden, output} = object;
		let layers = [];
	
		if(input) layers.push(input)
		if(output) layers.push(output);
		if(hidden) layers.push(...hidden);
		
		layers.forEach(layer => this.setProps(layer))
		Object.assign(this.layers, object);
	}

	setInput(input) {
		input.isInput = true;
		this.input = input;
		this.addLayer({input});
	}

	setOutput(output) {
		output.isOutput = true;
		this.output = output;
		if(this.lastHidden) output.connect(this.lastHidden)
		this.addLayer({output});
	}

	setHidden(hidden) {
		this.connectHidden(hidden);
		this.hidden.push(hidden);
		this.addLayer({hidden: this.hidden});
	}

	connectHidden(layer) {
		if(this.output) this.output.connect(layer);
		if(!this.lastHidden) layer.connect(this.input);
		else layer.connect(this.lastHidden);
	}

	activateLayer(layer, input) {
		layer.activate(input);
	}

	activateHidden(input) {
		this.hidden.forEach((layer, index, arr) => {
			if(index == 0) layer.activate(input);
			else layer.activate(arr[index - 1].output);
		})
	}

	setProps(layer, otherProps = {}) {
		Object.assign(layer, otherProps, {
			activation: this.activation,
			learning_rate: this.learning_rate
		})
	}
}