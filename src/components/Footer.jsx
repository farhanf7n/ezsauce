import BackToTopButton from './BackToTopButton';
import SubmitResource from './SubmitResource';

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-screen-xl px-5 pb-24 pt-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-6 dark:border-line-dark md:flex-row">
        <p className="text-center text-sm font-medium text-ink dark:text-zinc-300 md:text-left">
          © {new Date().getFullYear()} EZSauce · Built by{' '}
          <a
            href="https://www.linkedin.com/in/farhanf7n/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-4 transition-colors hover:text-muted dark:hover:text-white"
          >
            Farhan Ahmed
          </a>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/farhanf7n/ezsauce"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-white"
          >
            GitHub
          </a>
          <SubmitResource />
        </div>
      </div>
      <BackToTopButton />
    </footer>
  );
}
