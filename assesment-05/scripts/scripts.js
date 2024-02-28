    // Function to get holidays for each month
    function getHolidays(month) {
      switch (month) {
        case 1:
          return ["New Year's Day", "Martin Luther King Jr. Day"];
        case 2:
          return ["Valentine's Day", "President's Day"];
        case 3:
          return ["St. Patrick's Day", "International Women's Day"];
        case 4:
          return ["April Fools' Day", "Earth Day"];
        case 5:
          return ["Cinco de Mayo", "Mother's Day"];
        case 6:
          return ["Father's Day", "Summer Solstice"];
        case 7:
          return ["Independence Day", "World Population Day"];
        case 8:
          return ["Labor Day", "International Youth Day"];
        case 9:
          return ["International Day of Peace", "World Tourism Day"];
        case 10:
          return ["Halloween", "World Food Day"];
        case 11:
          return ["Veterans Day", "Thanksgiving"];
        case 12:
          return ["Christmas Day", "New Year's Eve"];
        default:
          return [];
      }
    }

    function getMonthName(month) {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months[month - 1];
    }

    const holidaysList = document.getElementById("holidays-list");
    for (let month = 1; month <= 12; month++) {
      const holidays = getHolidays(month);
      const monthName = getMonthName(month);
      const listItem = document.createElement("li");
      listItem.textContent = `${monthName}: ${holidays.join(", ")}`;
      holidaysList.appendChild(listItem);
    }