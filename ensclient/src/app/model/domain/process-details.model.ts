export interface IProcessDetails {
  eventDate: number;

  superClaimDdList: [{
    val: number;
    desc: string;
  }];

  claimCauseDdList: [{
    val: number;
    desc: string;
  }];

  injuryTypeDdList: [{
    val: number;
    desc: string;
  }];

  submittedByDdList: [{
    val: number;
    desc: string;
  }];

  submissionMethodDdList: [{
    val: number;
    desc: string;
  }];
}
