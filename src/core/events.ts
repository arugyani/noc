export function createListener(event: string, callback: () => void) {
    window.addEventListener(event, callback);
}