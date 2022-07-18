import bcrypt from 'bcrypt';

const password = 'test123';
const hash = '$2b$10$Xk65miMKSsJ3G76vgdiLYuFJBrGk9gxM8HytKctByNtDe74r55u46';

console.log(password);
console.log(hash);
const passwordIsCorrect = await bcrypt.compare(
		password, hash	
		);

console.log(passwordIsCorrect);