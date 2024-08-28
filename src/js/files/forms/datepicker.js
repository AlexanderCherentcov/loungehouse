/* Календарь */

// Подключение функционала "Чертоги фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
	const picker = datepicker('[data-datepicker]', {
		customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
		customMonths: ["Янв", "Фев", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сент", "Окт", "Ноябрь", "Декабрь"],
		overlayButton: 'Применять',
		overlayPlaceholder: 'Год (4 цифры)',
		startDay: 1,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		},
		onSelect: function (input, instance, date) {

		}
	});
	flsModules.datepicker = picker;
}
