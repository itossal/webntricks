import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const htmlDir = path.join(rootDir, 'html');
const viewsDir = path.join(rootDir, 'src', 'views');

function toComponentName(file) {
  const base = file.replace(/\.html$/, '');
  return base
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function toRoutePath(file) {
  if (file === 'index.html') return '/index';
  const base = file.replace(/\.html$/, '');
  return `/${base}`;
}

function removeDivByClass(html, className) {
  const startRegex = new RegExp(`<div[^>]*class=["'][^"']*${className}[^"']*["'][^>]*>`, 'i');
  const match = startRegex.exec(html);
  if (!match) return html;
  const startIndex = match.index;
  const pattern = /<div[^>]*>|<\/div>/gi;
  pattern.lastIndex = startIndex;
  let depth = 0;
  let endIndex = html.length;
  let result;
  while ((result = pattern.exec(html)) !== null) {
    if (result.index < startIndex) continue;
    if (result[0].startsWith('<div')) {
      depth += 1;
    } else {
      depth -= 1;
      if (depth === 0) {
        endIndex = pattern.lastIndex;
        break;
      }
    }
  }
  return html.slice(0, startIndex) + html.slice(endIndex);
}

async function main() {
  await fs.mkdir(viewsDir, { recursive: true });
  const files = (await fs.readdir(htmlDir)).filter((file) => file.endsWith('.html'));

  const routeMeta = [];

  for (const file of files) {
    const filePath = path.join(htmlDir, file);
    const raw = await fs.readFile(filePath, 'utf8');

    const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) {
      console.warn(`Skipping ${file} - no body tag`);
      continue;
    }
    let body = bodyMatch[1];

    const blocksToRemove = [
      'preloader',
      'popup-search-box',
      'sidemenu-wrapper',
      'mobile-menu-wrapper',
      'scroll-top',
    ];

    for (const cls of blocksToRemove) {
      let previous;
      do {
        previous = body;
        body = removeDivByClass(body, cls);
      } while (body !== previous);
    }

    const headerRegex = /<header[\s\S]*?<\/header>/i;
    const headerMatch = headerRegex.exec(body);
    if (headerMatch) {
      body = body.slice(headerMatch.index + headerMatch[0].length);
    }

    const footerRegex = /<footer[\s\S]*$/i;
    const footerMatch = footerRegex.exec(body);
    if (footerMatch) {
      body = body.slice(0, footerMatch.index);
    }

    body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

    body = body.replace(/(["'])assets\//g, (_, quote) => `${quote}/assets/`);
    body = body.replace(/data-mask-src="\/assets\/(.*?)"/g, (_match, assetPath) => `:data-mask-src="asset('/assets/${assetPath}')"`);
    body = body.replace(/data-mask-src='\/assets\/(.*?)'/g, (_match, assetPath) => `:data-mask-src="asset('/assets/${assetPath}')"`);
    body = body.replace(/data-bg-src="\/assets\/(.*?)"/g, (_match, assetPath) => `:data-bg-src="asset('/assets/${assetPath}')"`);
    body = body.replace(/data-bg-src='\/assets\/(.*?)'/g, (_match, assetPath) => `:data-bg-src="asset('/assets/${assetPath}')"`);
    body = body.replace(/src="\/assets\/(.*?)"/g, (_match, assetPath) => `:src="asset('/assets/${assetPath}')"`);
    body = body.replace(/src='\/assets\/(.*?)'/g, (_match, assetPath) => `:src="asset('/assets/${assetPath}')"`);

    body = body.trim();

    const componentName = toComponentName(file) + 'Page';
    const friendlyName = componentName
      .replace(/Page$/, '')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([a-zA-Z])(\d+)/g, '$1 $2');

    const vueContent = `<!-- Auto-generated from ${file} -->\n<template>\n  <div class=\"page-content\">\n${body}\n  </div>\n</template>\n\n<script setup>\nimport { onMounted } from 'vue'\nimport { usePageMetadata } from '@/composables/usePageMetadata'\n\nconst asset = (path) => path\n\nusePageMetadata(${JSON.stringify(friendlyName)})\n\nonMounted(() => {\n  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })\n})\n</script>\n`;

    const outPath = path.join(viewsDir, `${componentName}.vue`);
    await fs.writeFile(outPath, vueContent, 'utf8');

    routeMeta.push({
      file,
      component: componentName,
      path: toRoutePath(file),
      title: friendlyName,
    });
  }

  const routesContent = `export const pages = ${JSON.stringify(routeMeta, null, 2)}\n`;
  await fs.writeFile(path.join(viewsDir, 'pages.generated.js'), routesContent, 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
