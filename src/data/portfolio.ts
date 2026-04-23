/**
 * 포트폴리오 썸네일 이미지.
 * public/portfolio/ 폴더에 실제 웹툰 썸네일 이미지를 넣고
 * 아래 src를 파일명으로 지정하면 자동으로 포스터 대신 표시됩니다.
 *
 * 예:
 *   public/portfolio/midnight.jpg  →  src: "/portfolio/midnight.jpg"
 *
 * src를 빈 문자열로 두면 디자인 포스터(PosterArt)가 대신 사용됩니다.
 */
export const portfolioAssets: { src: string }[] = [
  { src: "" }, // MIDNIGHT STAGE
  { src: "" }, // ECHO OF YOU
  { src: "" }, // VILLAINESS NOTE
  { src: "" }  // NEON HEART
];
