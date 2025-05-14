import dayjs from "dayjs";

export function findDueDate(requestedDate) {
  const currentDate = dayjs();
  const requested = dayjs(requestedDate);

  if (!requested.isValid()) {
    throw new Error("Invalid requested date");
  }

  // Calculate the difference in days
  const differenceInDays = requested.diff(currentDate, "day");

  // Return the due date or any other logic you want to implement
  return differenceInDays;
}
