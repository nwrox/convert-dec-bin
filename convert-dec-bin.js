let n = 255, r = '', p
const log2 = Math.round(Math.log2(n));
	
for(let i = log2; i >= 0; i--){
	p = Math.pow(2, i)
	if(p <= n){
		n -= p;
		r += '1'
	} else 
		r += '0'
}

console.log('\n' + r)

