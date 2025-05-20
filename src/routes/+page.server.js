export function load({ cookies, setHeaders }) {
    const visited = cookies.get('visited');

    cookies.set('visited', 'true', { path: '/' });

    setHeaders({
        'Content-type': 'text/plain'
    });

    return {
        visited: visited === 'true'
    }
}
