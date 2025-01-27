import { UserAttributes } from "../interfaces/user.interface";


export interface CreateUserDto extends Omit<UserAttributes, "_id"> {}
