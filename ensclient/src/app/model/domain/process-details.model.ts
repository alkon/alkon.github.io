export interface IProcessDetails {
  eventDate: number;

  superClaimDdList: [{
    code: number;
    value: string;
  }];

  claimCauseDdList: [{
    code: number;
    value: string;
  }];

  injuryTypeDdList: [{
    code: number;
    value: string;
  }];

  submittedByDdList: [{
    code: number;
    value: string;
  }];

  submissionMethodDdList: [{
    code: number;
    value: string;
  }];
}
