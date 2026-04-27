export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                <span className="text-white font-black text-sm">SNK</span>
              </div>
              <span className="font-bold">SNK MULTIPLAYER</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The official gaming community for SNK multiplayer enthusiasts. Join us on Facebook and be part of the action.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3 text-zinc-300">Quick Links</h4>
            <div className="space-y-2">
              {["Facebook Group", "Registration", "Tournaments", "Community Rules"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3 text-zinc-300">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://www.facebook.com/share/g/1B31ncUpo9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook Group
              </a>
              <p className="text-sm text-zinc-500">
                © {new Date().getFullYear()} SNK Multiplayer Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 pt-6 text-center text-xs text-zinc-600">
          This is an unofficial community page for SNK game fans.
        </div>
      </div>
    </footer>
  );
}
