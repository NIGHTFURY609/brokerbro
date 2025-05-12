export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserLocation {
  country: string;
  city: string;
  street: {
    number: number;
    name: string;
  };
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  name: UserName;
  email: string;
  phone: string;
  gender: string;
  location: UserLocation;
  picture: UserPicture;
}

export interface RandomUserApiResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}