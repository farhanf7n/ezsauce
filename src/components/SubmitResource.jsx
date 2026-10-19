import { cn } from '../lib/cn';
import { ArrowUpRightIcon } from './icons';

const SUBMIT_URL = 'https://github.com/farhanf7n/ezsauce/issues/new';

export default function SubmitResource({
  className,
  label = 'Submit a resource',
}) {
  return (
    <a
      href={SUBMIT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'inline-flex items-center gap-2 rounded-lg border border-transparent bg-black px-3 py-2 text-sm font-medium text-white transition-colors hover:border-white/30 dark:bg-white/10 dark:hover:border-white/30 sm:px-4',
        className,
      )}
    >
      <span className="hidden sm:inline">{label}</span>
      <ArrowUpRightIcon className="h-4 w-4" />
    </a>
  );
}
