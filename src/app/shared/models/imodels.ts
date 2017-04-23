/**
 * Created by konstantin on 08.04.17.
 */
export interface IParty {
  id: number;
  cost: number;
  name: string;
  datetime: Date;
  place: string;
  participants: number;
  persons: Array<Object>;
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
  payments: Array<Object>;
}

export interface IProfileItem {
  id: string;
  photo: string;
  name: string;
}

export interface IPayment {
  datetime: Date;
  party: string;
  party_id: number;
  description: string;
  cost: number;
}

export interface IChooseParty {
  id: number;
  name: string;
}

///////////////////////////////////////////////////////////////////////
/////                                                           ///////
/////                         POST                              ///////
/////                                                           ///////
///////////////////////////////////////////////////////////////////////


export interface ILogin {
  csrfmiddlewaretoken?: string;
  username: string;
  password: string;
}

export interface IPostParty {
  name: string;
  date: Date;
  time: Date;
  place: string;
}

export interface IPostPayment {
  id: number;
  description: string;
  cost: number;
}
