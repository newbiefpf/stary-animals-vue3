import service from "../request"

export function animalsCategoryList() {
    return service({
        url: "/endpoint/v1/common/animal_category_list",
        method: "POST",
        data: {}
    });
}

export function newsCategoryList() {
    return service({
        url: "/endpoint/v1/common/news_category_list",
        method: "POST",
        data: {}
    });
}

export function cityList() {
    return service({
        url: "/endpoint/v1/common/city_list",
        method: "POST",
        data: {}
    });
}

export function hotNewsList(type) {
    return service({
        url: "/endpoint/v1/common/hot_news_list",
        method: "POST",
        data: {
            "type": type
        }
    });
}

export function hotAdoptList() {
    return service({
        url: "/endpoint/v1/common/hot_adopt_list",
        method: "POST",
        data: {
            "page": 1,
            "size": 10,
        }
    });
}

export function hotSeekList() {
    return service({
        url: "/endpoint/v1/common/hot_seek_list",
        method: "POST",
        data: {
            "page": 1,
            "size": 10,
        }
    });
}


