export type AdminLoginTypes = {
  email: string;
  password: string;
};

export type LoginResponseTypes = {
  data: UserType
  access_token: string
  token_type: string
  hasError: boolean
}

export type UserType = {
  id: number
  first_name: string
  last_name: string
  username: string
  email: string
  phone_number: string
  dob: any
  selfie: any
  bvn: string
  bvn_phone_number: any
  security_code: any
  security_question: any
  security_answer: any
  bvn_phone_number_verified: any
  is_private: number
  is_id_verified: number
  referrer_id: any
  referral_code: string
  device_name: any
  circle_points: any
  fcm_token: any
  middle_name: any
  address: any
  face_id_token: any
  face_id_verified: number
}



