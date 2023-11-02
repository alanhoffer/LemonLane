export function base64ToUrl(img: any) {
    const arrayBuffer = new Uint8Array(img.data).buffer;
    const blob = new Blob([arrayBuffer], { type: img.type });
    const url = URL.createObjectURL(blob);
    return url;
}