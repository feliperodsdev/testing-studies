import { Appointment } from "../entities/appointments";
import { startAtPast } from "./errors";

interface CreateAppointmentRequest {
  customer: string;
  startAt: Date;
  endAt: Date;
}

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  async execute(
    request: CreateAppointmentRequest
  ): Promise<CreateAppointmentResponse | string> {
    try {
      const { customer, startAt, endAt } = request;

      const appointment = new Appointment({ customer, startAt, endAt });

      return appointment;
    } catch (e) {
      if (e instanceof startAtPast) {
        return "oops";
      }
      return "tome";
    }
  }
}
