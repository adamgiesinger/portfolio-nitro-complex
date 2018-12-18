'use strict';

import * as T from 'terrific';
import '../js/arrow-image';

describe('arrow-image module', () => {
	let mod;

	beforeEach(() => {
		const application = new T.Application();
		mod = new T.Module.ArrowImage(document.createElement('div'), application._sandbox);
	});

	it('should have a .start() method', () => {
		expect(mod.start).toBeDefined();
	});

	it('should execute promise.resolve callback in the .start() method', () => {
		const resolve = jasmine.createSpy('resolve');
		mod.start(resolve);
		expect(resolve).toHaveBeenCalled();
	});
});
