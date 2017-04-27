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

export interface IMyProfile {
  name: string;
  favourite_goods: Array<string>;
  photo: string;
}

export interface IRepayment {
  id?: number;
  who_pays: Object;
  which_party: Object;
  price: number;
  is_payed: boolean;
}

export interface IProfile {
  id?: number;
  name: string;
  friend_status?: boolean;
  favourite_goods: Array<string>;
  photo: string;
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
  participants: Array<number>;
  place: string;
}

export interface IPostPayment {
  id: number;
  payers: Array<number>;
  description: string;
  cost: number;
}
