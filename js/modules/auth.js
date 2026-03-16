const SESSION_KEY = 'mt_session';
const EMAIL_KEY   = 'mt_user_email';

export function getSession() {
  return localStorage.getItem(SESSION_KEY);
}

export function getEmail() {
  return localStorage.getItem(EMAIL_KEY);
}

export function checkAuth() {
  if (!getSession()) {
    window.location.replace('login.html');
  }
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(EMAIL_KEY);
  window.location.href = 'login.html';
}
