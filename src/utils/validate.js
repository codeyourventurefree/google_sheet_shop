export function colorCheck(colorCode){
	const isColorCode = /^#[0-9A-F]{6}$/i.test(colorCode);
	let s = new Option().style;
	s.color = colorCode;
	const isColorString = (s.color == colorCode);
	return isColorCode || isColorString;
}

