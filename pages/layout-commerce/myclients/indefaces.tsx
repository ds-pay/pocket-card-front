export interface DataUserProps{
  id: string,
  name: string,
  email: string,
  state: string,
  card: string,
  number: string,
  img: string,
  department: string,
  city: string,
  phone: string,
  coverage: string,
  expiration: string,
  pointspocket: number,
};

export interface UserCommerceData {
  data: DataUserProps[],
  terms: any
}