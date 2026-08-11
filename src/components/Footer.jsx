export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Youssef Hassan. Built with React &amp; Tailwind.
        </p>
        <a
          href="#top"
          className="font-mono text-xs text-muted hover:text-accent-2 transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
