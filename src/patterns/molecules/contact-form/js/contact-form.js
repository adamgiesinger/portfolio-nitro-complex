'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * contact-form module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-contact-form__button' };
// const stateClasses = { disabled: 'state-contact-form--disabled' };

T.Module.ContactForm = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
