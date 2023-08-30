var startDate, endDate, startInstance, endInstance;
var fillInputs = function () {
if (startDate) startInstance.$elem.val(startDate.locale(startInstance.config.locale).format(startInstance.config.format));
if (endDate) endInstance.$elem.val(endDate.locale(endInstance.config.locale).format(endInstance.config.format));
};
var beforeShow = function (instance) {
if (startDate) {
startInstance.config.startDate = startDate.clone();
endInstance.config.startDate = startDate.clone();
}
if (endDate) {
startInstance.config.endDate = endDate.clone();
endInstance.config.endDate = endDate.clone();
}
fillInputs();
instance.updateHeader();
instance.reDrawCells();
instance.updateTimePickerDisplay();
};
$("#calentim-ex-6-5-start").calentim({
showFooter: false,
showTimePickers: false,
format: "L",
autoCloseOnSelect: true,
minDate: moment(),
locale: 'tr',
startOnMonday: true,
showOn:"bottom",
autoAlign: true,
cancelLabel: "İptal",
applyLabel: "Tamam",
isHotelBooking: true,
continuous: true,
startEmpty: true,
minSelectedDays: 1,
startEmpty: $("#calentim-ex-6-5-start").val() === "",
startDate: $("#calentim-ex-6-5-start").val(),
endDate: $("#calentim-ex-6-5-end").val(),
enableKeyboard: false,
oninit: function (instance) {
startInstance = instance;
if (!instance.config.startEmpty && instance.config.startDate) {
instance.$elem.val(instance.config.startDate.locale(instance.config.locale).format(instance.config.format));
startDate = instance.config.startDate.clone();
}
},
onaftershow: beforeShow,
ontimechange: function (instance, start, end) {
if(start) startDate = start.clone();
if(end) endDate = end.clone();
fillInputs();
},
onfirstselect: function (instance, start) {
startDate = start.clone();
endDate = null;
startInstance.globals.startSelected = false;
startInstance.hideDropdown();
endInstance.showDropdown();
endInstance.setDisplayDate(start.clone());
endInstance.config.minDate = startDate.clone();
endInstance.config.startDate = startDate.clone();
endInstance.config.endDate = null;
endInstance.globals.startSelected = true;
endInstance.globals.endSelected = false;
endInstance.globals.firstValueSelected = true;
if (endDate && startDate.isAfter(endDate)) {
endInstance.config.endDate = endDate.clone();
}
fillInputs();
endInstance.updateHeader();
endInstance.reDrawCells();
endInstance.updateTimePickerDisplay();
}
});
$("#calentim-ex-6-5-end").calentim({
showFooter: false,
showTimePickers: false,
format: "L",
autoCloseOnSelect: true,
minDate: moment(),
locale: 'tr',
startOnMonday: true,
showOn:"bottom",
autoAlign: true,
cancelLabel: "İptal",
applyLabel: "Tamam",
isHotelBooking: true,
continuous: true,
startEmpty: true,
minSelectedDays: 1,
startEmpty: $("#calentim-ex-6-5-end").val() === "",
startDate: $("#calentim-ex-6-5-start").val(),
endDate: $("#calentim-ex-6-5-end").val(),
enableKeyboard: false,
autoCloseOnSelect: true,
oninit: function (instance) {
endInstance = instance;
if (!instance.config.startEmpty && instance.config.endDate) {
instance.$elem.val(instance.config.endDate.locale(instance.config.locale).format(instance.config.format));
endDate = instance.config.endDate.clone();
}
},
onaftershow: beforeShow,
ontimechange: function (instance, start, end) {
if(start) startDate = start.clone();
if(end) endDate = end.clone();
fillInputs();
},
onafterselect: function (instance, start, end) {
startDate = start.clone();
endDate = end.clone();
endInstance.hideDropdown();
startInstance.config.endDate = endDate.clone();
startInstance.globals.firstValueSelected = true;
fillInputs();
endInstance.globals.startSelected = true;
endInstance.globals.endSelected = false;
}
});