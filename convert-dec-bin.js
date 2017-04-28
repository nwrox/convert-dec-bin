const binToDec = (b) => {
	const arr = b.toString().split('')

	let exp = arr.length - 1
	  , sum = 0
	 
	for(let c of arr){	  
	  if(c === '1' || c === 1) sum += Math.pow(2, exp)
	  exp--
	}
		  
  return sum
}

const decToBin = (n) => {
	const log2 = Math.round(Math.log2(n));
	let bin = ''
		, pow
	
	for(let i = log2; i >= 0; i--){
		pow = Math.pow(2, i)
		
		if(pow <= n){
			n -= pow
			bin += '1'
		} else 
			bin += '0'
	}
	
	return bin
}

module.exports = { binToDec, decToBin }
