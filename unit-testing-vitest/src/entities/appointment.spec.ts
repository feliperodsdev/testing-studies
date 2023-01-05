import { expect, test } from "vitest";
import { startAtPast, endDateBeforeStart } from "../services/errors";
import { Appointment } from "./appointments";

test("create an appointment", () => {
  const startDate = new Date();
  const endDate = new Date();

  endDate.setDate(endDate.getDate() + 1);

  const appointment = new Appointment({
    customer: "Felipe Rodrigues",
    startAt: startDate,
    endAt: endDate,
  });

  expect(appointment).toBeInstanceOf(Appointment);
});

test("cannot an appointment with end date before start date", () => {
  const startDate = new Date();
  const endDate = new Date();

  endDate.setDate(endDate.getDate() - 1);

  expect(
    () =>
      new Appointment({
        customer: "Felipe Rodrigues",
        startAt: startDate,
        endAt: endDate,
      })
  ).toThrow(endDateBeforeStart);
});

test("cannot an appointment with start date before now", () => {
  const startDate = new Date();
  const endDate = new Date();

  startDate.setDate(startDate.getDate() - 2);
  endDate.setDate(endDate.getDate() + 5);

  expect(
    () =>
      new Appointment({
        customer: "Felipe Rodrigues",
        startAt: startDate,
        endAt: endDate,
      })
  ).toThrow(startAtPast);
});
