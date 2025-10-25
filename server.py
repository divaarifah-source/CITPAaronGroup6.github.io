from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys

class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

port = 8080
server = HTTPServer(('127.0.0.1', port), Handler)
print(f'Server running at http://127.0.0.1:{port}/')
print(f'Open http://127.0.0.1:{port}/exec.html in your browser')
try:
    server.serve_forever()
except KeyboardInterrupt:
    print('\nShutting down...')
    sys.exit(0)
