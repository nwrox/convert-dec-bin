const decToBin = (n) => {
	const log2 = Math.round(Math.log2(n));
	let bin = ''
		, pow;
	
	for(let i = log2; i >= 0; i--){
		pow = Math.pow(2, i)
		
		if(pow <= n){
			n -= pow;
			bin += '1'
		} else 
			bin += '0'
	}
	
	return bin
}

module.exports = decToBin
