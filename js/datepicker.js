 ($ => {
     const monthes = [
         'Январ',
         'Февраль',
         'март',
         'Апрель',
         'Май',
         'Июнь',
         'Июль',
         'Август',
         'Сентябрь',
         'Октябрь',
         'Ноябрь',
         'Декабрь'
     ];
     const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

     const createDatepickerHeader = (year, monthNumber, monthes) => {
         const month = monthes[monthNumber];
         return $(`<div class="datepicker__header">
        <button class="datepicker__button" id="prev_month"><i class"arrow arrow_left"></i></button>
        <h3 class="datepicker__title">${month} ${year}  г.</h3>
        <button class="datepicker__button" id="next_month"><i class"arrow arrow_right"></i></button>
    </div>`)
     }
     const createDatepickerWeekRow = (weekDays) => {
         const weekDaysDiv = $(`<div class="datepicker__week-days">`)
         for (let day of weekDays) {
             const daySpan = $(`<span class="datepicker__week-day">`).text(day);
             weekDaysDiv.append(daySpan);
         }
         return weekDaysDiv
     }
     const createDatepickerCell = (value) => {
         return value ? $(`<span class="datepicker__day-number">${value}</span>`): $(`<span class="datepicker__empty-day"></span>`) } 

     $.fn.datepicker = function () {
         let choosenDate = new Date(),
             choosenYear = choosenDate.getFullYear(),
             choosenMonth = choosenDate.getMonth(),
             choosenDateNumber = choosenDate.getDate(),
             dayQuantity = new Date(choosenYear, choosenMonth + 1, 0);
         const firstDayOfMonth = new Date(choosenYear, choosenMonth, 1).getDay();

         const weekRow = createDatepickerWeekRow(weekDays);
         const header = createDatepickerHeader(choosenYear, choosenMonth, monthes);
         const datepicker = $(`<div class="datepicker"></div>`);
         datepicker.append(header, weekRow);
         this.attr({
             disabled: true
         });
         this.after(datepicker);

     }
 })(jQuery)