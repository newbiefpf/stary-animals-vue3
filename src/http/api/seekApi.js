import service from "../request"

export function seekListByUserId(page, size) {
    return service({
        url: "/endpoint/v1/seek/list_by_user_id",
        method: "POST",
        data: {
            'page': page,
            'size': size
        }
    });
}

export function seekList(page, size) {
    return service({
        url: "/endpoint/v1/seek/list",
        method: "POST",
        data: {
            'page': page,
            'size': size
        }
    });
}

export function seekById(id) {
    return service({
        url: "/endpoint/v1/seek/get",
        method: "POST",
        data: {
            'id': id
        }
    });
}

export function seekModifyById(data) {
    return service({
        url: "/endpoint/v1/seek/modify",
        method: "POST",
        data: data
    });
}

export function seekDeleteById(id) {
    return service({
        url: "/endpoint/v1/seek/delete",
        method: "POST",
        data: {
            'id': id
        }
    });
}

export function seekSearch(search) {
    return service({
        url: "/endpoint/v1/seek/search",
        method: "POST",
        data: search
    });
}

