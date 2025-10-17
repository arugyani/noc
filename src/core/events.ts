export function createListener(event: string, callback: EventListenerOrEventListenerObject) {
    window.addEventListener(event, callback);
}