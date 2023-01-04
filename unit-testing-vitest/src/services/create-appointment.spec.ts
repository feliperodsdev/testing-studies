import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointments";
import { CreateAppointment } from "./create-appointment";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const createAppointment = new CreateAppointment();

    const startDate = new Date();
    const endDate = new Date();

    endDate.setDate(endDate.getDate() + 1);

    expect(
      createAppointment.execute({
        customer: "Felipe",
        startAt: startDate,
        endAt: endDate,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
