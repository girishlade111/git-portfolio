import { Mail, GitFork, ExternalLink } from "lucide-react";
import Container from "@/components/ui/container";

const links = [
  { icon: GitFork, label: "GitHub", href: "https://github.com/girishladegit0" },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    href: "https://linkedin.com/in/girishlade",
  },
  { icon: Mail, label: "Mail", href: "mailto:girish@example.com" },
];

export default function Footer() {
  return (
    <footer className="border-muted/20 border-t">
      <Container>
        <div className="flex items-center justify-between py-6">
          <p className="text-muted text-xs">&copy; 2026 Girish Lade</p>
          <div className="flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
