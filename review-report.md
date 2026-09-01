# 검수 보고서

- 검수 대상: `storyboard.md`, 학습 브리프, 사실 검증, 교사용 안내서, 학생 활동지, 최종 수업 자료 ZIP
- 검수일: 2026-09-01
- 최종 상태: 교사 최종 승인 완료 · GitHub Pages 공개 및 수업 자료 배포본 QA 완료

## 확인 체크리스트

- [x] 총 22컷, 쪽별 5/6/6/5 컷 구성
- [x] 수금지화목토천해 순서 반영
- [x] 태양은 별이며 스스로 빛을 냄
- [x] 행성은 주로 태양빛을 반사함
- [x] 암석형·기체행성·얼음거대행성 분류 반영
- [x] 거대행성 네 개의 고리와 토성 고리의 두드러짐 반영
- [x] 공전 시간 차이 반영
- [x] 크기·거리의 실제 축척 한계 반복 표기
- [x] 4쪽 원화 생성 완료: `assets/final/raw-page-1.png` ~ `raw-page-4.png`
- [x] 최종 한글 합성 PNG 4장 생성 완료: 각 1240×1754(A4 150dpi급), `assets/final/final-page-1.png` ~ `final-page-4.png`
- [x] 원화 시각 점검: 패널 그리드, 빈 캡션 띠, 캐릭터 의상 연속성, 무문자 원화 확인
- [x] 브라우저에서 한글 오버레이를 합성하고 페이지별 스크린샷으로 최종 PNG 4장을 생성
- [x] `contact-sheet.png` 생성 완료(657×957), 브라우저 스크린샷 방식
- [x] HTML 한글 오버레이와 4쪽 연락시트 섹션 제공
- [x] `alt-text.json`을 실제 원화 장면 기준으로 갱신
- [x] P2 금성은 작은 행성 모형과 구름층 중심의 교과서형 단순화로 기록
- [x] P3 비토성 고리는 실제보다 읽기 쉽도록 시각적으로 강조한 표현임을 오버레이 문구에 명시
- [x] 컷 17 교체 배경 생성 및 광선 경로 교정: `assets/final/panel-17-corrected.png`
- [x] 컷 17 입사광·반사광 방향을 결정론적 SVG로 분리 표시
- [x] 교과서 단원·성취기준 문구 대조 자료 확인
- [x] 교사 사실 검수용 근거·주의 문구 정리
- [x] 스토리보드 승인 기록 확인
- [x] 교사 최종 가독성·연속성 검수용 화면 확인
- [x] 메인 검증: 390px 모바일 레이아웃 및 브라우저 콘솔 확인
- [x] 컷 17 교정 반영 후 3쪽·`contact-sheet.png` 브라우저 재캡처 완료
- [x] 교사 최종 승인 기록(`승인. 작업 진행`) 및 승인 범위 반영
- [x] 보조 자료 6종 최종 동기화 및 자료별 다운로드 링크 확인
- [x] 이미지·연락시트·수업 자료를 명시 파일만 포함한 `grade5-solar-system-classroom-pack.zip`으로 묶고 목록 확인

## 최종 QA 증거 (2026-09-01)

- 브라우저 390px 검증: `innerWidth 390`, `scrollWidth 375`, 가로 넘침 없음
- 3쪽 재출력: 1240×1754, `reflected-ray` endpoint `x=43, y=63`
- 재캡처 연락시트: 657×957, 컷 17 교정 반영 확인
- 4페이지와 컷 구성 `5/6/6/5 = 총 22컷` 확인
- 각 최종 페이지 내부 `page-warning` 4개 확인
- 산출물 다운로드 링크 5개와 수업 자료 다운로드 링크 6개, 전체 묶음 ZIP 링크 1개 확인
- raw/final 이미지 8개 모두 로드 정상
- 브라우저 콘솔 `errors 0 · warnings 0`
- 브라우저 광선 QA: 입사광은 관찰자 뒤쪽에서 행성으로, 반사광은 행성에서 관찰자 눈 방향으로 표시
- 자동 테스트: Node `16/16`, Python `24/24` 통과

## GitHub Pages 배포 증거 (2026-09-01)

- 저장소: [WBmaker2/grade5-solar-system-webtoon](https://github.com/WBmaker2/grade5-solar-system-webtoon)
- 첫 커밋: `b5b2c59`
- 성공한 Pages workflow: [run 33487293496](https://github.com/WBmaker2/grade5-solar-system-webtoon/actions/runs/33487293496)
- 공개 Pages: [https://wbmaker2.github.io/grade5-solar-system-webtoon/](https://wbmaker2.github.io/grade5-solar-system-webtoon/)
- 공개 learner path QA: desktop `innerWidth 1280 / scrollWidth 1265`, mobile `innerWidth 390 / scrollWidth 375`, 4 pages·22 panels, 9 images loaded, 12 downloads, cut17 image+rayDiagram, console errors/warnings 0
- 공개 asset 응답: `panel-17-corrected.png` HTTP 200·`image/png`, `grade5-solar-system-classroom-pack.zip` HTTP 200·`application/x-zip-compressed`

원화와 최종 한글 합성 PNG 4장, `contact-sheet.png`는 브라우저 합성·스크린샷 방식으로 생성되었고, 보조 자료와 전체 묶음 ZIP까지 동기화하여 배포본 QA를 완료했다. GitHub Pages 외부 배포와 공개 learner path 검증도 완료되었으며, 음성·TTS·VoiceOver 산출물은 포함하지 않는다.
