export function handleLoginRedirect(
  url: URL,
  message: string = "You must be logged in to access this page"
) {
  const redirectTo = url.pathname + url.search;
  return `/login?redirectTo=${redirectTo}&message=${message}`;
}
