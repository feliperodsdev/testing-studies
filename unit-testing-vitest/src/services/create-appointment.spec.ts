import { describe, expect, it } from "vitest";
import { Appointment, appointmentsArr } from "../entities/appointments";
import { CreateAppointment } from "./create-appointment";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const createAppointment = new CreateAppointment();

    const startDate = new Date();
    const endDate = new Date();

    endDate.setDate(endDate.getDate() + 2);
    startDate.setDate(startDate.getDate() + 1);

    expect(
      createAppointment.execute({
        customer: "Felipe",
        startAt: startDate,
        endAt: endDate,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });

  it("should not be able to create an appointment", () => {
    const createAppointment = new CreateAppointment();

    const startDate = new Date();
    const endDate = new Date();

    startDate.setDate(startDate.getDate() + 1);
    endDate.setDate(endDate.getDate() + 8);

    expect(
      createAppointment.execute({
        customer: "Felipe",
        startAt: appointmentsArr[0].startAt,
        endAt: appointmentsArr[0].endAt,
      })
    ).resolves.toEqual("a");
  });
});
