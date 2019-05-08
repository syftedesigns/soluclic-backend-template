export class UserAdminModel {
    constructor(
        public username: string,
        public password: string,
        public user_id?: number,
        public user_group_id?: number,
        public salt?: string,
        public firstname?: string,
        public lastname?: string,
        public email?: string,
        public image?: string,
        public code?: string,
        public ip?: string,
        public status?: number | boolean,
        public date_added?: Date
    ) {}
}
