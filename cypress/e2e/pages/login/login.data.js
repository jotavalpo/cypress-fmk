export class LoginData{
    static get validCredentials(){
        return{
            username: 'jmontero',
            password: 'jrma2012'
        };
    }

    static get invalidCredentials(){
        return{
            invalidUsername: 'holaaa',
            invalidPassword: 'chaooo'
        };
    };
}