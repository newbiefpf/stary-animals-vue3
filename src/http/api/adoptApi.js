import service from "../request"

export function adoptListByUserId(page, size) {
    return service({
        url: "/endpoint/v1/adopt/list_by_user_id",
        method: "POST",
        data: {
            'page': page,
            'size': size
        }
    });
}

export function adoptList(page, size) {
    return service({
        url: "/endpoint/v1/adopt/list",
        method: "POST",
        data: {
            'page': page,
            'size': size
        }
    });
}

export function adoptById(id) {
    return service({
        url: "/endpoint/v1/adopt/get",
        method: "POST",
        data: {
            'id': id
        }
    });
}

export function adoptModifyById(data) {
    return service({
        url: "/endpoint/v1/adopt/modify",
        method: "POST",
        data: data
    });
}

export function adoptDeleteById(id) {
    return service({
        url: "/endpoint/v1/adopt/delete",
        method: "POST",
        data: {
            'id': id
        }
    });
}

export function adoptSearch(search) {
    return service({
        url: "/endpoint/v1/adopt/search",
        method: "POST",
        data: search
    });
}
