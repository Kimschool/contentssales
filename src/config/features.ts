/**
 * Feature flags
 * ----------------------------------------------
 * 페이지/메뉴/섹션의 공개 여부를 한 곳에서 토글합니다.
 * 코드를 삭제하지 않고 노출만 제어하므로, 향후 복구 시
 * 이 파일의 값만 true 로 바꾸면 즉시 다시 보이게 됩니다.
 *
 * 환경변수 기반 토글이 필요해지면
 *   showPortfolio: process.env.NEXT_PUBLIC_SHOW_PORTFOLIO === "true"
 * 형태로 확장 가능.
 */
export const features = {
  /**
   * 포트폴리오 메뉴 + Hero "우리의 작품 보기" CTA + 포트폴리오 페이지 노출 여부.
   * 빨라야 6월 이후 공개 예정이므로 현재는 false.
   * 복구 시: true 로 변경 (다른 수정 불필요).
   */
  showPortfolio: false
} as const;
