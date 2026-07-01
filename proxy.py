#!/usr/bin/env python3
"""
CV Tailor — Manus proxy server
• Serves index.html at http://localhost:3001
• Forwards /manus/* requests to https://api.manus.ai/*

Usage:
    python3 proxy.py
    Then open: http://localhost:3001
"""

import http.server
import urllib.request
import json
import os

PORT  = 3001
INDEX = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'index.html')

class Handler(http.server.BaseHTTPRequestHandler):

    def log_message(self, fmt, *args):
        print(f"  {fmt % args}")

    def send_cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, x-manus-api-key')

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_cors()
        self.end_headers()

    def do_GET(self):
        if self.path in ('/', '/index.html'):
            try:
                with open(INDEX, 'rb') as f:
                    data = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.send_header('Content-Length', str(len(data)))
                self.send_cors()
                self.end_headers()
                self.wfile.write(data)
            except FileNotFoundError:
                self.send_response(404)
                self.end_headers()
                self.wfile.write(b'index.html not found next to proxy.py')
            return

        if self.path.startswith('/manus/'):
            self._forward('GET')
            return

        self.send_response(404)
        self.end_headers()

    def do_POST(self):
        if self.path.startswith('/manus/'):
            self._forward('POST')
            return
        self.send_response(404)
        self.end_headers()

    def _forward(self, method):
        manus_path = self.path[len('/manus'):]
        url = 'https://api.manus.ai' + manus_path

        api_key = self.headers.get('x-manus-api-key', '')
        length  = int(self.headers.get('Content-Length', 0))
        body    = self.rfile.read(length) if length else None

        req = urllib.request.Request(
            url,
            data=body,
            headers={
                'Content-Type':    'application/json',
                'x-manus-api-key': api_key,
            },
            method=method
        )

        print(f"  -> {method} {url}")
        try:
            with urllib.request.urlopen(req) as resp:
                resp_body = resp.read()
                self.send_response(resp.status)
                self.send_header('Content-Type', 'application/json')
                self.send_cors()
                self.end_headers()
                self.wfile.write(resp_body)
        except urllib.error.HTTPError as e:
            err_body = e.read()
            print(f"  ! Manus {e.code}: {err_body[:200]}")
            self.send_response(e.code)
            self.send_header('Content-Type', 'application/json')
            self.send_cors()
            self.end_headers()
            self.wfile.write(err_body)
        except Exception as e:
            print(f"  ! Proxy error: {e}")
            self.send_response(502)
            self.send_header('Content-Type', 'application/json')
            self.send_cors()
            self.end_headers()
            self.wfile.write(json.dumps({'ok': False, 'error': {'message': str(e)}}).encode())


if __name__ == '__main__':
    server = http.server.HTTPServer(('localhost', PORT), Handler)
    print(f"""
  CV Tailor - Manus Proxy
  Open in browser : http://localhost:{PORT}
  Serving         : {INDEX}
  Forwarding to   : https://api.manus.ai
  Press Ctrl+C to stop.
""")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n  Stopped.")
