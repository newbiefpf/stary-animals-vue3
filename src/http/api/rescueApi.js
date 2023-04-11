import service from "../request"

export function rescueListByUserId(page, size) {
    return service({
        url: "/endpoint/v1/rescue/list_by_user_id",
        method: "POST",
        data: {
            'page': page,
            'size': size
        }
    });
}

export function rescueList(page, size) {
    return service({
        url: "/endpoint/v1/rescue/list",
        method: "POST",
        data: {
            'page': page,
            'size': size
        }
    });
}

export function rescueById(id) {
    return service({
        url: "/endpoint/v1/rescue/get",
        method: "POST",
        data: {
            'id': id
        }
    });
}

export function rescueModifyById(data) {
    return service({
        url: "/endpoint/v1/rescue/modify",
        method: "POST",
        data: data
    });
}

export function rescueDeleteById(id) {
    return service({
        url: "/endpoint/v1/rescue/delete",
        method: "POST",
        data: {
            'id': id
        }
    });
}

export function rescueSearch(search) {
    return service({
        url: "/endpoint/v1/rescue/search",
        method: "POST",
        data: search
    });
}
