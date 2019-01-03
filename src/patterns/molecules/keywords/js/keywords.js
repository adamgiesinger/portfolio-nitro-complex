'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * keywords module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-keywords__button' };
// const stateClasses = { disabled: 'state-keywords--disabled' };

T.Module.Keywords = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
