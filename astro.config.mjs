import { defineConfig } from 'astro/config';
import { readFile, writeFile } from 'node:fs/promises';

const editsFile = new URL('./src/data/edits.json', import.meta.url);

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
    }
  };
}

export default defineConfig({
  site: 'https://gaigeredd.com',
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [localCopyEditor()] }
});
