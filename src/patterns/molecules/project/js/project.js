'use strict';

import * as T from 'terrific';
import $ from 'jquery';

// Review: not needed, delete

/**
 * project module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-project__button' };
// const stateClasses = { disabled: 'state-project--disabled' };

T.Module.Project = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
