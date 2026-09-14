import { defineConfig } from 'astro/config';
import { readFile, writeFile } from 'node:fs/promises';

const editsFile = new URL('./src/data/edits.json', import.meta.url);
const layoutEditsFile = new URL('./src/data/layout-edits.json', import.meta.url);
const editableLayoutProperties = new Set([
  'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'gap', 'row-gap', 'column-gap',
  'width', 'max-width', 'min-width', 'height', 'min-height', 'max-height',
  'align-items', 'align-content', 'justify-items', 'justify-content',
  'grid-template-columns', 'font-size', 'line-height'
]);

function localCopyEditor() {
  return {
    name: 'local-copy-editor',
    configureServer(server) {
      server.middlewares.use('/__copy-editor/save', async (request, response) => {
        if (request.method !== 'POST') {
          response.statusCode = 405;
          return response.end();
        }
        let body = '';
        request.on('data', chunk => body += chunk);
        request.on('end', async () => {
          try {
            const { key, value } = JSON.parse(body);
            if (!/^[a-z0-9._-]+$/i.test(key) || typeof value !== 'string' || value.length > 8000) throw new Error('Invalid edit');
            const edits = JSON.parse(await readFile(editsFile, 'utf8'));
            edits[key] = value;
            await writeFile(editsFile, JSON.stringify(edits, null, 2) + '\n');
            response.setHeader('content-type', 'application/json');
            response.end(JSON.stringify({ ok: true }));
          } catch {
            response.statusCode = 400;
            response.end(JSON.stringify({ ok: false }));
          }
        });
      });
      server.middlewares.use('/__layout-editor/save', async (request, response) => {
        if (request.method !== 'POST') {
          response.statusCode = 405;
          return response.end();
        }
        let body = '';
        request.on('data', chunk => body += chunk);
        request.on('end', async () => {
          try {
            const { selector, property, value } = JSON.parse(body);
            const validSelector = typeof selector === 'string'
              && selector.length <= 600
              && !/[{};\n\r]/.test(selector)
              && (selector.startsWith('[data-page="') || /^\.[a-z][a-z0-9_-]*$/i.test(selector));
            const validValue = typeof value === 'string'
              && value.length <= 160
              && !/[{};\n\r]/.test(value);
            if (!validSelector || !editableLayoutProperties.has(property) || !validValue) throw new Error('Invalid layout edit');
            const edits = JSON.parse(await readFile(layoutEditsFile, 'utf8'));
            const declarations = { ...(edits[selector] ?? {}) };
            if (value.trim()) declarations[property] = value.trim();
            else delete declarations[property];
            if (Object.keys(declarations).length) edits[selector] = declarations;
            else delete edits[selector];
            await writeFile(layoutEditsFile, JSON.stringify(edits, null, 2) + '\n');
            response.setHeader('content-type', 'application/json');
            response.end(JSON.stringify({ ok: true }));
          } catch {
            response.statusCode = 400;
            response.end(JSON.stringify({ ok: false }));
          }
        });
      });
    }
  };
}

export default defineConfig({
  site: 'https://gaigeredd.com',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [localCopyEditor()],
    server: { watch: { ignored: ['**/src/data/layout-edits.json'] } }
  }
});
