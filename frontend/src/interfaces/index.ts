export interface IUserProfile {
  email: string;
  phone: string;
  website: string;
  is_active: boolean;
  is_superuser: boolean;
  name: string;
  id: number;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IComment{
  id: number;
  email: string;
  name: string;
  body: string;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  comments: IComment[];
}

export interface IPhoto{
  id: number;
  title: string;
  url: string;
  thumbnail_url: string;
}

export interface IAlbum {
  id: number;
  title: string;
  photos: IPhoto[];
}
