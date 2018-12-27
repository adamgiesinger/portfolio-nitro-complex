'use strict';

import { Component, GondelBaseComponent } from '@gondel/core';

const selectors = {
	input: '.js-a-datepicker__input',
};

@Component('Datepicker')
class Datepicker extends GondelBaseComponent {
	start() {
		this.initializeFlatpickr();
	}

	initializeFlatpickr() {
		// Review: props for this!
		import(/* webpackChunkName: "flatpickr" */ './flatpickr').then((flatpickr) => {
			flatpickr.default(this._ctx.querySelector(selectors.input));
		});
	}
}

export default Datepicker;
