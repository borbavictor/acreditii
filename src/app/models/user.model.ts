export interface IUser {
    name: String,
    birth_date: String,
    city: String,
    state: String,
    country: String,
    notify: Boolean,
    phone: String,
    profile_picture: String,
    status: String,
    user_name: String,
    chats: Array<any>,
    gender: String
}

export class User implements IUser {
    name: String = null
    birth_date: String = null
    city: String= null
    state: String= null
    country: String= null
    notify: Boolean= null
    phone: String= null
    profile_picture: String= null
    status: String= null
    user_name: String= null
    chats: Array<any> = []
    gender: String = null
}