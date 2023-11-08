
$(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  var latestHour = dayjs().hour();
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id"));
    if (timeBlock < latestHour) {
      $(this).addClass("past").removeClass("present").removeClass("future");
    } else if (timeBlock === latestHour) {
      $(this).addClass("present").removeClass("past").removeClass("future");
    } else {
      $(this).addClass("future").removeClass("past").removeClass("present");
    }
  });

  $(".saveBtn").on("click", function () {
    var scheduleEntry = $(this).siblings('.description').val();
    var timeBlockId = $(this).closest(".time-block").attr("id");
    localStorage.setItem(timeBlockId, scheduleEntry);
  });

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var scheduleEntry = localStorage.getItem(timeBlockId)
    $(this).find(".description").val(scheduleEntry);
  });


});
