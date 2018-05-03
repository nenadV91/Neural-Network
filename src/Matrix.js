export default class Matrix {
	constructor(rows = 2, columns = 2) {
		this.rows = rows;
		this.columns = columns;
		this.data = Array.from(Array(rows), () => Array(columns).fill(0));
	}

	static fromArray(array, multiDim) {
		if(!multiDim) {
			const matrix = new Matrix(array.length, 1);
			array.forEach((e, i) => matrix.data[i][0] = e);
			return matrix;
		} else {
			Matrix.checkArrayDimension(array);
			const matrix = new Matrix(array.length, array[0].length);
			array.forEach((row, i) => matrix.data[i] = row.slice());
			return matrix;
		}
	}
	
	static checkArrayDimension(matrix) {
		const lengthCheck = matrix.every(row => row.length == matrix[0].length);
		if(!lengthCheck) throw new Error("All rows must be same length.");
	}

	static mapMatrix(matrix, callback) {
		const result = matrix.clone();
		result.mapMatrix(callback);
		return result;
	}

	static clone(matrix) {
		return matrix.clone();
	}

	static transpose(matrix) {
		const result = new Matrix(matrix.columns, matrix.rows);
		matrix.data.forEach((row, i) => row.forEach((e, j) => result.data[j][i] = e));
		return result
	}

	static checkSize(matrix_1, matrix_2) {
		if(matrix_1.rows != matrix_2.rows || matrix_1.columns != matrix_2.columns) {
			throw new Error("Matrix sizes do not match!");
		}
	}

	static subtract(param_1, param_2) {
		const result = Matrix.clone(param_1);
		if(param_2 instanceof Matrix) {
			Matrix.checkSize(param_1, param_2);
			result.subtract(param_2);
			return result;
		} else {
			Matrix.mapMatrix(result, e => e - param_2);
		}
	} 

	static dot(matrix_1, matrix_2) {
	    if(!(matrix_1 instanceof Matrix) || !(matrix_2 instanceof Matrix)) {
	      throw new Error('Both parameters must be instance of Matrix.');
	    }

	    if(matrix_1.columns !== matrix_2.rows) {
	      throw new Error('Matrix sizes do not match.');
	    }

	    let result = new Matrix(matrix_1.rows, matrix_2.columns);
	    
	    matrix_1.data.forEach((row, i) => {
	      row.forEach((e, j) => {
	        for(var k = 0; k < result.columns; k++) {
	          result.data[i][k] += e * matrix_2.data[j][k]
	        }
	      })
	    })

	    return result;
	}

	clone() {
		const result = new Matrix(this.rows, this.columns);
		this.data.forEach((row, i) => result.data[i] = row.slice());
		return result;
	}

	mapMatrix(callback) {
		this.data.forEach((row, i) => {
			row.forEach((element, j) => row[j] = callback(element, i, j));
		});
	}

	toArray() {
		return [].concat(...this.data);
	}
	
	rand(min = -1, max = 1) {
		return Math.random() * (max - min) + min; 
	}

	randomize(min, max) {
		this.mapMatrix(() => {
			const number = this.rand(min, max);
			return Math.round(number * 1000) / 1000;
		})
	}

	checkSize(matrix_1, matrix_2) {
		if(matrix_1.rows != matrix_2.rows || matrix_1.columns != matrix_2.columns) {
			throw new Error("Matrix sizes do not match!");
		}
	}

	add(value) {
		if(value instanceof Matrix) {
			this.checkSize(this, value);
			this.mapMatrix((e, i, j) => e + value.data[i][j]);
		} else this.mapMatrix(e => e + value);
	}

	subtract(value) {
		if(value instanceof Matrix) {
			this.checkSize(this, value);
			this.mapMatrix((e, i, j) => e - value.data[i][j]);
		} else this.mapMatrix(e => e + value);
	}

	multiply(value) {
		if(value instanceof Matrix) {
			this.checkSize(this, value);
			this.mapMatrix((e, i, j) => e * value.data[i][j]);
		} else this.mapMatrix(e => e * value);
	}

	print() {
		console.table(this.data);
	}
}