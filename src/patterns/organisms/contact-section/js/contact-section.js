'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * contact-section module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-contact-section__button' };
// const stateClasses = { disabled: 'state-contact-section--disabled' };

T.Module.ContactSection = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
