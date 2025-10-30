import Link from "next/link"

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 mt-20">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-30" />

      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="mx-auto max-w-3xl mb-8">
            <img src="/AR-Wordmark.svg" alt="Arevei" className="w-20 h-auto mx-auto" />
          </div>

          <div className="flex justify-center gap-6">
            <Link
              href="https://www.instagram.com/arevei_official?igsh=MW5ranhrd2J5Njg2aQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="   transition-colors duration-300"
              aria-label="Instagram"
            >
            <svg width="28px" height="28px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5Z" fill="#ffffff"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0C2.01472 0 0 2.01472 0 4.5V10.5C0 12.9853 2.01472 15 4.5 15H10.5C12.9853 15 15 12.9853 15 10.5V4.5C15 2.01472 12.9853 0 10.5 0H4.5ZM4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5ZM11 4H12V3H11V4Z" fill="#ffffff"/>
</svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/vinaykumarshakyawar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
                <svg
          height="28px"
          width="28px"
          viewBox="0 0 382 382"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          className="fill-white  transition-colors"
        >
          <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
          C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844
          c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403
          c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432
          c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666
          S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
          c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021
          c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426
          c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
          c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912
          c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z" />
        </svg>
            </Link>
          </div>

          {/* Footer text */}
          <p className="text-muted-foreground">© 2025 Arevei. Crafted with strategy, precision, and trust.</p>

          {/* Contact */}
          <div className="pt-4">
            <a
              href="mailto:contact@arevei.com"
              className="text-accent hover:text-foreground transition-colors duration-300 font-medium"
            >
              contact@arevei.com
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm pt-8 border-t border-border/30">
            <Link href="https://www.arevei.com/terms" className="text-muted-foreground hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
            <Link href="https://www.arevei.com/privacypolicy" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            {/* <Link href="/cookies" className="text-muted-foreground hover:text-accent transition-colors">
              Cookies Policy
            </Link> */}
            <Link href="https://www.arevei.com/refundpolicy" className="text-muted-foreground hover:text-accent transition-colors">
              Refund & Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
