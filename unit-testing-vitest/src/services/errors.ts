export class startAtPast extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class endDateBeforeStart extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class itAlreadyExists extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
