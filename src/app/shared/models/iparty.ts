/**
 * Created by konstantin on 08.04.17.
 */
export interface IParty {
  id: number;
  name: string;
  datetime: Date;
  place: string;
  participants: number;
}

export interface IPartyDetail {
  id: number;
  name: string;
  datetime: Date;
  place: string;
  cost: number;
  likes: number;
  dislikes: number;
  persons: Array<Object>;
}

export interface IProfileItem {
  id: string;
  photo: string;
  first_name: string;
  last_name: string;
}
