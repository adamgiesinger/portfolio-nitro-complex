'use strict';

import * as T from 'terrific';
import $ from 'jquery';

// Review: delete if not needed

/**
 * projects-section module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-projects-section__button' };
// const stateClasses = { disabled: 'state-projects-section--disabled' };

T.Module.ProjectsSection = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
