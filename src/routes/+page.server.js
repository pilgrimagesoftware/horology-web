export function load({ cookies, setHeaders }) {
    const visited = cookies.get('visited');

    cookies.set('visited', 'true', { path: '/' });

    setHeaders({
    });

    return {
        visited: visited === 'true'
    }
}
