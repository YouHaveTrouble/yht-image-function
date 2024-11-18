export const ImageInputs: Array<string> = [
  'art',
  'dib',
  'gif',
  'jpg',
  'pict',
  'png',
  'webp',
  'png',
  'svg',
]

export const FileExtensionFormat: {[key:string]: string} = {
  'image/x-jg': 'art',
  'image/bmp': 'dib',
  'image/gif': 'gif',
  'image/jpeg': 'jpg',
  'image/pict': 'pict',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/svg+xml': 'png',
  'application/svg+xml': 'png',
};

export const FileFormatExtension: {[key:string]: string} = {
  'art': 'image/x-jg',
  'dib': 'image/bmp',
  'gif': 'image/gif',
  'jpeg': 'image/jpeg',
  'pict': 'image/pict',
  'png': 'image/png',
  'webp': 'image/webp',
  'svg': 'image/svg+xml',
}

export function setExtension(filename: string, extension: string): string {
  const split = filename.split('.');
  split.pop();
  return split.join('.') + "." + extension;
}