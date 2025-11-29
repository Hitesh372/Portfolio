export default function Footer() {
    return (
        <footer className="py-8 border-t border-border bg-secondary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
                <p>© {new Date().getFullYear()} Hitesh. All rights reserved.</p>
                <p className="mt-2">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
            </div>
        </footer>
    );
}
