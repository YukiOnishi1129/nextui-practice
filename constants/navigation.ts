export const NAVIGATION_LINK = {};

/**
 * 認証済みページ
 */
export const AUTHENTICATED_NAVIGATION_LINK = {
  PROFILE: "/profile",
};

/**
 * 非認証ページ
 */
export const UN_AUTHENTICATED_NAVIGATION_LINK = {
  TOP: "/",
  LOGIN: "/login",
};

export const AUTHENTICATED_NAVIGATION_LINK_ARRAY = Object.values(
  AUTHENTICATED_NAVIGATION_LINK
);
