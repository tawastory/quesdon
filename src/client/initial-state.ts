import { APIUser } from '../api-interfaces';

const w = window as any;

export const me: APIUser | undefined = w.USER;
export const csrfToken: string = w.CSRF_TOKEN;

export const usingDarkTheme = !!localStorage.getItem('using-dark-theme');

export const upstreamUrl = 'https://github.com/byulmaru/quesdon';
export const gitVersion = w.GIT_VERSION;
