# Neural-Network
Simple neural network using matrix.

Set number of input and output nodes as a number and hidden layers as an array of numbers where each number is hidden layer.
One way to initialize the network is to pass layers property to constructor:
```javascript
const options = {layers: {iNodes: 2, hNodes: [6, 9], oNodes: 1}}
const brain = new NeuralNetwork(options);
```

The other way is to use `setInput`, `setOutput` and `setHidden` methods and pass instance of `Layer` class as a parameter.
```javascript
const brain = new NeuralNetwork();

brain.setInput(new Layer({size: 2}));
brain.setHidden(new Layer({size: 6}));
brain.setHidden(new Layer({size: 9}));
brain.setOutput(new Layer({size: 1}));
```

[**XOR example**](https://nenadv91.github.io/Neural-Network/) with two hidden layers `[6, 9]` and 30000 training iterations.
