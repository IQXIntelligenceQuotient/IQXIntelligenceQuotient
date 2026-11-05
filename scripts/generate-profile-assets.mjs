import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const assets = new URL('../assets/', import.meta.url);
await mkdir(assets, { recursive: true });
const logo = (await readFile(new URL('iqx-official-avatar.png', assets))).toString('base64');
const tralionexLogo = (await readFile(new URL('tralionex-official-logo.webp', assets))).toString('base64');
const click2printLogo = (await readFile(new URL('click2print-official-logo.webp', assets))).toString('base64');
const font = 'Segoe UI, Arial, sans-serif';
const svg = (width, height, title, description, content) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc"><title id="title">${title}</title><desc id="desc">${description}</desc>${content}</svg>\n`;
for (const dark of [false, true]) {
  const suffix = dark ? '-dark' : '';
  const bg = dark ? '#111922' : '#f3f6f8';
  const ink = dark ? '#f0f5fa' : '#122438';
  const muted = dark ? '#a7b8c9' : '#4f6274';
  const line = dark ? '#2e3e50' : '#d4dee6';
  const accent = dark ? '#91bff0' : '#315f91';
  for (const mobile of [false, true]) {
    const width = mobile ? 800 : 1280;
    const height = mobile ? 510 : 400;
    const illustration = mobile
      ? `<circle cx="660" cy="105" r="72" fill="none" stroke="${line}"/><image href="data:image/png;base64,${logo}" x="603" y="48" width="114" height="114"/>`
      : `<circle cx="1064" cy="200" r="155" fill="none" stroke="${line}"/><circle cx="1064" cy="200" r="137" fill="none" stroke="${line}" stroke-dasharray="2 12"/><image href="data:image/png;base64,${logo}" x="948" y="84" width="232" height="232"/>`;
    const text = mobile
      ? `<text x="46" y="74" fill="${ink}" font-size="26" font-weight="700" letter-spacing="3">IQX SOLUTIONS</text>
         <text x="42" y="240" fill="${ink}" font-size="88" font-weight="650" letter-spacing="-4">Intelligence,</text>
         <text x="42" y="333" fill="${accent}" font-size="88" font-weight="650" letter-spacing="-4">applied.</text>
         <text x="46" y="400" fill="${muted}" font-size="25">Web development · Search · Digital experiences</text>
         <path d="M46 439H754" stroke="${line}"/>
         <text x="46" y="478" fill="${muted}" font-size="23">Lahore, Pakistan · Working remotely with UK businesses</text>`
      : `<text x="54" y="66" fill="${ink}" font-size="22" font-weight="700" letter-spacing="3">IQX SOLUTIONS</text>
         <text x="49" y="179" fill="${ink}" font-size="78" font-weight="650" letter-spacing="-3.7">Intelligence,</text>
         <text x="49" y="262" fill="${accent}" font-size="78" font-weight="650" letter-spacing="-3.7">applied.</text>
         <text x="54" y="312" fill="${muted}" font-size="23">Web development · Search · Digital experiences</text>
         <path d="M54 348H795" stroke="${line}"/>
         <text x="54" y="378" fill="${muted}" font-size="18">Lahore, Pakistan · Working remotely with UK businesses</text>`;
    const content = `<rect width="${width}" height="${height}" rx="16" fill="${bg}"/><rect x=".5" y=".5" width="${width-1}" height="${height-1}" rx="15.5" fill="none" stroke="${line}"/><path d="M0 0H190" stroke="${accent}" stroke-width="5"/>${illustration}<g font-family="${font}">${text}</g>`;
    const name = mobile ? `iqx-profile-mobile${suffix}.svg` : `iqx-profile-banner${suffix}.svg`;
    await writeFile(new URL(name, assets), svg(width, height, 'IQX Solutions — Intelligence, applied.', 'Web development, search and digital experiences. The original IQX logo appears beside the headline.', content));
  }
  const brandCards = [
    {
      file: 'tralionex', title: 'Tralionex', label: 'DIGITAL &amp; BUSINESS', number: '02', plateX: 468,
      artwork: `<image href="data:image/webp;base64,${tralionexLogo}" x="480" y="43" width="90" height="90"/>`,
    },
    {
      file: 'click2print', title: 'Click2Print', label: 'PRINT &amp; PACKAGING', number: '03', plateX: 366,
      // Frame the supplied mark tightly without changing the original WebP.
      artwork: `<svg x="377" y="41" width="194" height="94" viewBox="360 42 775 416" overflow="hidden"><image href="data:image/webp;base64,${click2printLogo}" width="1497" height="498"/></svg>`,
    },
  ];
  for (const brand of brandCards) {
    const logoPlate = `<rect x="${brand.plateX}" y="34" width="${582 - brand.plateX}" height="108" rx="8" fill="#fff" stroke="${line}"/>`;
    const content=`<rect width="600" height="176" rx="10" fill="${bg}"/><g font-family="${font}"><text x="27" y="41" fill="${muted}" font-size="16" font-weight="600" letter-spacing="2">${brand.number} / ${brand.label}</text><text x="25" y="113" fill="${ink}" font-size="51" font-weight="650" letter-spacing="-1.6">${brand.title}</text><path d="M28 142H74" stroke="${accent}" stroke-width="3"/></g>${logoPlate}${brand.artwork}`;
    await writeFile(new URL(`${brand.file}-card${suffix}.svg`, assets), svg(600,176,brand.title,brand.label.replaceAll('&amp;','and'),content));
  }
}
for (const button of [
  { file:'visit-iqx', text:'Explore IQX', width:133, bg:'#245d9c', ink:'#ffffff' },
  { file:'start-project', text:'Start a project', width:145, bg:'#eaf1f8', ink:'#173b65' },
]) {
  const content=`<rect x=".5" y=".5" width="${button.width-1}" height="41" rx="7" fill="${button.bg}"/><text x="18" y="26" fill="${button.ink}" font-family="${font}" font-size="14" font-weight="600">${button.text}</text><path d="M${button.width-30} 16H${button.width-23}V23M${button.width-31} 24L${button.width-23} 16" fill="none" stroke="${button.ink}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>`;
  await writeFile(new URL(button.file+'.svg', assets), svg(button.width,42,button.text,'Link button',content));
}
console.log('Generated 4 responsive IQX headers, 4 brand cards, and 2 link buttons in '+fileURLToPath(assets));
