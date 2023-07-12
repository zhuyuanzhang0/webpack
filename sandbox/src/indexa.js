import c from './c.js';
import e from './e.js';

const getLazyD = () => import('./lazy-d.js');

function main() {
	console.log('This is entrypoint indexa.js');
	console.log(c);
	console.log(e);

	setTimeout(() => {
		getLazyD().then(d => {
			console.log(d.default);
		});
	}, 3000);
}

main();
