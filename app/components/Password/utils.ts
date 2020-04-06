import md5 from 'md5';

const salt = md5('ethan');

export function mixin(website: string): string {
  return Date.now() + salt + website;
}

export function generatePasswordByName(website: string): string {
  return md5(mixin(website));
}
