import http.server
import socketserver
import os
import sys

PORT = 3000

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Redirect root to exec.html
        if self.path == '/':
            self.path = '/exec.html'
        
        try:
            # Try to serve the file
            return http.server.SimpleHTTPRequestHandler.do_GET(self)
        except Exception as e:
            # Log the error
            print(f"Error serving {self.path}: {str(e)}")
            self.send_error(500, f"Server error: {str(e)}")

    def log_message(self, format, *args):
        # Override to print to stdout instead of stderr
        print(f"{self.address_string()} - {format%args}")

try:
    # Change to the directory containing this script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Create the server
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"\nServer started!")
        print(f"Open this URL in your browser: http://localhost:{PORT}/exec.html")
        print("Press Ctrl+C to stop the server\n")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nShutting down server...")
    sys.exit(0)
except Exception as e:
    print(f"\nError starting server: {str(e)}")
    sys.exit(1)