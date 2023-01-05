import { startAtPast, endDateBeforeStart } from "../services/errors";

interface AppointmentProps {
  customer: string;
  startAt: Date;
  endAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  get customer() {
    return this.props.customer;
  }

  get startAt() {
    return this.props.startAt;
  }

  get endAt() {
    return this.props.endAt;
  }

  constructor(props: AppointmentProps) {
    const { startAt, endAt } = props;

    if (startAt < new Date()) {
      throw new startAtPast("Start date must be future");
    }

    if (endAt < startAt) {
      throw new endDateBeforeStart("End date must be after start date");
    }

    this.props = props;
  }
}

const startAtFuture = new Date();
startAtFuture.setDate(startAtFuture.getDate() + 1);

const past = new Date();
past.setDate(past.getDate() + 8);

export const appointmentsArr: Appointment[] = [
  new Appointment({
    customer: "Felipe",
    startAt: startAtFuture,
    endAt: past,
  }),
];
