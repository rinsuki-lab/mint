export function apiCall(path: string, params: {[key: string]: any} = {}) {
    return fetch("https://misskey.xyz/api/"+path, {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    })
}