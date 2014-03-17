describe('dateRangePicker directive', function () {

    describe('the components form the template must be correctly displayed', function () {
        var compile, scope, template;

        beforeEach(module('scheduleAppointmentDateRangePickerApp'));

        beforeEach(inject(function ($rootScope, $compile, $templateCache) {
            template = '<div id="selectTimeframe" class="inlineBox">'+
                '<p> {{headermessage}} </p>'+
                '<span class="angular-datepicker">'+
                    '<input type="text" is-open="startDateOptions.opened" ng-model="startDate" min="now" max="endDate" show-weeks="false" datepicker-popup="dd-MMMM-yyyy" readonly/>'+
                    '<i class="icon-calendar small add-on" ng-click="startDateOptions.open($event)" ></i>'+
                    '<a id="clearStartDatePicker" ng-click="startDateOptions.clear($event)">Clear</a>'+
                '</span>' +
                '<span class="angular-datepicker">'+
                    '<input type="text" is-open="endDateOptions.opened"  ng-model="endDate" min="startDate || now" show-weeks="false" datepicker-popup="dd-MMMM-yyyy" readonly/>'+
                    '<i class="icon-calendar small add-on" ng-click="endDateOptions.open($event)"></i>'+
                    '<a id="clearEndDatePicker" ng-click="endDateOptions.clear($event)">Clear</a>'+
                '</span>'+
            '</div>';

            $templateCache.put('../ms/uiframework/resource/appointmentschedulingui/partials/daterangepicker.html', template);

            scope = $rootScope;
            compile= $compile;
        }));

        it('should add two icons, two inputs and two links in the view when the directive is added', function () {
            var startDatePickerInput = '<input type="text" is-open="startDateOptions.opened" ng-model="startDate" min="now" max="endDate"';
            var startDatePickerIcon = '<i class="icon-calendar small add-on" ng-click="startDateOptions.open($event)"';
            var startDatePickerLink = '<a id="clearStartDatePicker" ng-click="startDateOptions.clear($event)">Clear</a>'
            var endDatePickerInput = '<input type="text" is-open="endDateOptions.opened" ng-model="endDate" min="startDate || now"';
            var endDatePickerIcon = '<i class="icon-calendar small add-on" ng-click="endDateOptions.open($event)"';
            var endDatePickerLink = '<a id="clearEndDatePicker" ng-click="endDateOptions.clear($event)">Clear</a>'

            var element = compile(angular.element('<daterangepicker/>'))(scope);
            scope.$digest();

            expect(element.html()).toContain(startDatePickerInput);
            expect(element.html()).toContain(startDatePickerIcon);
            expect(element.html()).toContain(startDatePickerLink);
            expect(element.html()).toContain(endDatePickerInput);
            expect(element.html()).toContain(endDatePickerIcon);
            expect(element.html()).toContain(endDatePickerLink);
        })

        it('should display the custom header message according to the headermessage parameter', function () {

            var element = compile(angular.element('<daterangepicker headermessage="Custom header"/>'))(scope);
            scope.$digest();

            expect(element.html()).toContain('Custom header');
        })

    });

})