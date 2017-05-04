const binToDec = (b) => {
	const arr = b.toString().split('')
	let exp = arr.length - 1;

	return arr.map((elem, index) => {
		let dec = 0;

		(elem === '1') ? dec = Math.pow(2, exp--) : (exp--, dec = 0)

		return dec
	}).reduce((acc, elem) => acc + elem, 0)
}

const decToBin = (n) => {
	return reverseSeq(getLog2(n)).map(elem => {
		const pow = Math.pow(2, elem)
		let bin = '';
		
		(pow <= n) ? (n -= pow, bin = '1') : bin = '0'

		return bin
	}).join('')
}

const getLog2 = (n) => Math.round(Math.log2(n))

const reverseSeq = (n) => Array.from(Array(n + 1).keys()).reverse()

module.exports = { binToDec, decToBin }
