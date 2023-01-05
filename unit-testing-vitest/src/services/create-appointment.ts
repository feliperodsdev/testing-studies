import { Appointment, appointmentsArr } from "../entities/appointments";
import { startAtPast, itAlreadyExists } from "./errors";

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

      for (let i = 0; i < appointmentsArr.length; i++) {
        if (appointmentsArr[i].startAt == startAt)
          throw new itAlreadyExists("cannot create in that date");
      }

      const appointment = new Appointment({ customer, startAt, endAt });

      return appointment;
    } catch (e) {
      if (e instanceof startAtPast) {
        return "oops";
      } else {
        return "a";
      }
    }
  }
}
