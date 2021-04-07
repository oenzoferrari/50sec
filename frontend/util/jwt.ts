export function isTokenExpired(exp: number) {
  return Date.now() >= exp * 1000;
}
