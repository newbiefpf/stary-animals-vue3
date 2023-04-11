import service from "../request"

export function login(userName, passWord) {
    return service({
        url: "/endpoint/v1/user/login",
        method: "POST",
        data: {
            'userName': userName,
            'passWord': passWord
        }
    });
}


export function register(userName, passWord, email) {
    return service({
        url: "/endpoint/v1/user/register",
        method: "POST",
        data: {
            'userName': userName,
            'passWord': passWord,
            'email': email,
        }
    });
}


