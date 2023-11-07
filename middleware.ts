export { default } from "next-auth/middleware";

export const config = {
  // ログインページ（/login）とトップページ(/)以外を対象にする
  // matcher: ["/((?!login|).*)"],
  matcher: ["/profile"],
};
