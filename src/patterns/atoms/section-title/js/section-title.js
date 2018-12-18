'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * section-title module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-section-title__button' };
// const stateClasses = { disabled: 'state-section-title--disabled' };

T.Module.SectionTitle = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
