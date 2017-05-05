const binToDec = (b) => {
	const arr = b.toString().split('')
	let exp = arr.length - 1;

	return arr.reduce(
		(acc, curr) => (curr === '1') ? acc + Math.pow(2, exp--) : ( exp--, acc + 0 ), 0
	)
}

const decToBin = (n) => {
	return reverseSeq(getLog2(n)).reduce(
		(acc, curr) => {
			const pow = Math.pow(2, curr)

			return (pow <= n) ? ( n -= pow, acc + '1' ) : acc + '0'
		}, ''
	)
}

const getLog2 = (n) => Math.round(Math.log2(n))

const reverseSeq = (n) => Array.from(Array(n + 1).keys()).reverse()

module.exports = { binToDec, decToBin }
