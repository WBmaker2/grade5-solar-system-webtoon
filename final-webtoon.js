(() => {
  const data = window.WEBTOON_DATA;
  const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  const copyHtml = panel => [panel.dialogue, panel.caption].filter(Boolean).map((text, index) => `<p${index ? ' class="caption"' : ''}>${escapeHtml(text)}</p>`).join('');
  const rayDiagram = panel => panel.cut === 17 ? `<svg class="ray-diagram" viewBox="0 0 100 100" role="img" aria-label="관찰자 뒤쪽의 태양에서 목성으로 가는 입사광과 목성에서 관찰자 눈으로 가는 반사광"><title>빛의 경로: 관찰자 뒤쪽의 태양 → 행성 → 지구의 관찰자</title><defs><marker id="incident-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ffd166"/></marker><marker id="reflected-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff"/></marker></defs><line class="incident-ray" x1="46" y1="99" x2="50" y2="35" marker-end="url(#incident-arrow)"/><line class="reflected-ray" x1="50" y1="35" x2="43" y2="63" marker-end="url(#reflected-arrow)"/></svg>` : '';
  const pages = document.getElementById('pages');
  pages.innerHTML = data.pages.map(page => {
    const gridClass = page.panels.length === 6 ? 'matrix-grid' : 'story-grid';
    return `<section class="page-section" id="final-page-${page.number}" aria-labelledby="page-title-${page.number}">
      <div class="page-heading"><h2 id="page-title-${page.number}">${escapeHtml(page.title)}</h2><span>쪽 ${page.number} · ${page.panels.length}컷 · A4 세로</span></div>
      <div class="page" data-page="${page.number}">
        <figure class="page-art"><img src="${escapeHtml(page.image)}" alt="${escapeHtml(page.title)} 원화"></figure>
        <div class="panel-grid ${gridClass}" aria-label="${page.panels.length}개 패널">
          ${page.panels.map(panel => `<article class="panel${panel.artOverride ? ' has-art-override' : ''}" aria-label="컷 ${String(panel.cut).padStart(2, '0')}">${panel.artOverride ? `<img class="panel-art" src="${escapeHtml(panel.artOverride.image)}" alt="${escapeHtml(panel.artOverride.alt)}">${rayDiagram(panel)}` : ''}<span class="cut-number" aria-hidden="true">${String(panel.cut).padStart(2, '0')}</span><div class="panel-copy">${copyHtml(panel)}</div></article>`).join('')}
        </div>
        <p class="page-warning">학습용 그림 · 행성 크기와 거리는 실제 비례가 아닙니다.</p>
      </div>
      <p class="scale-note">학습용 그림 · 행성 크기와 거리는 실제 비례가 아닙니다.</p>
    </section>`;
  }).join('');
  document.getElementById('contactCards').innerHTML = data.pages.map(page => `<a class="contact-card" href="#final-page-${page.number}"><img src="${escapeHtml(page.finalImage)}" alt="${escapeHtml(page.title)} 최종 합성 연락시트 미리보기">${escapeHtml(page.number)}쪽 · ${page.panels.length}컷</a>`).join('');
  const dialog = document.getElementById('updateDialog');
  const openUpdates = () => dialog.showModal ? dialog.showModal() : dialog.setAttribute('open', '');
  const closeUpdates = () => dialog.close ? dialog.close() : dialog.removeAttribute('open');
  document.querySelectorAll('[data-open-updates]').forEach(button => button.addEventListener('click', openUpdates));
  document.querySelector('[data-close-updates]').addEventListener('click', closeUpdates);
})();
