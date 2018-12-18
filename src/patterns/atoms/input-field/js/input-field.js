'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * input-field module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-input-field__button' };
// const stateClasses = { disabled: 'state-input-field--disabled' };

T.Module.InputField = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
