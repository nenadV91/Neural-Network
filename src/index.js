import Matrix from './Matrix';
import NeuralNetwork from './NeuralNetwork';
import Layer from './Layer';

const data = [
	{input: [1, 1], target: [0]},
	{input: [1, 0], target: [1]},
	{input: [0, 1], target: [1]},
	{input: [0, 0], target: [0]}
]

const options = {layers: {iNodes: 2, hNodes: [6, 9], oNodes: 1}}
const brain = new NeuralNetwork(options);

// brain.setInput(new Layer({size: 2}));
// brain.setHidden(new Layer({size: 6}));
// brain.setHidden(new Layer({size: 9}));
// brain.setOutput(new Layer({size: 1}));

for(var i = 0; i < 30000; i++) {
	const number = Math.floor(Math.random() * data.length);
	const {input, target} = data[number];
	brain.train(input, target);
}



console.log('Training finished');
console.log('-----------------------------------------------------------')

const test = [[1, 1], [0, 1], [1, 0], [0, 0]];
test.forEach(input => console.log(brain.query(input).toArray()))
