const API_BACKEND_URL = "http://localhost:8080";
const API_PAGES_URL = API_BACKEND_URL + "/pages";
const API_SECTIONS_URL = API_BACKEND_URL + "/sections";
const API_ITEMS_URL = API_BACKEND_URL + "/items";
const API_REQUEST_HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

export function getPages() {
    return fetch(API_PAGES_URL, {
        method: 'GET',
        headers: API_REQUEST_HEADERS
    }).then((response) => response.json());
}

export function postPage(pageTitle) {
    const page = {
        title: pageTitle
    }
    return fetch(API_PAGES_URL, {
        method: 'POST',
        headers: API_REQUEST_HEADERS,
        body: JSON.stringify(page)
    }).then((response) => response.json());
}

export function getSections(page) {
    return fetch(API_SECTIONS_URL + "?page=" + page, {
        method: 'GET',
        headers: API_REQUEST_HEADERS
    }).then((response) => response.json());
}
export function getItems(sectionId) {
    return fetch(API_ITEMS_URL + "?section=" + sectionId, {
        method: 'GET',
        headers: API_REQUEST_HEADERS
    }).then((response) => response.json());
}