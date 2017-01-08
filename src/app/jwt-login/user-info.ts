export class Authority {
    authority: string;
}

export class UserInfo {
    authorities: Authority[];
    email: string;
    enabled: boolean;
    firstname: string;
    lastname: string;
    username: string;
}