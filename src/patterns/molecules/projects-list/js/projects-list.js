'use strict';

import * as T from 'terrific';
import $ from 'jquery';

// Review: delete if not needed

/**
 * projects-list module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-projects-list__button' };
// const stateClasses = { disabled: 'state-projects-list--disabled' };

T.Module.ProjectsList = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
