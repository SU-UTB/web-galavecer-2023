import { DISABLE_VOTING_DATE } from '../lib/constants';

const currentDate = new Date();

export const displayVoteSection: boolean =
  currentDate.getTime() <= DISABLE_VOTING_DATE.getTime();
