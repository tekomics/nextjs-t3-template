import { tv } from 'tailwind-variants';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { type FieldError, type UseFormRegisterReturn } from 'react-hook-form';

const style = tv({
  base: 'block w-full rounded-md border-0 !outline-none py-1.5 px-2 ring-1 focus:ring-2 ring-inset focus:ring-inset transition-all',
  variants: {
    color: {
      default:
        'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600',
      error:
        'text-red-900 ring-red-300 pr-10 placeholder:text-red-300 focus:ring-red-500',
    },
  },
});

export default function Textarea({
  registration,
  error,
  label,
  placeholder,
  ...props
}: {
  registration: UseFormRegisterReturn;
  error?: FieldError;
  label?: string;
  placeholder?: string;
  props?: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
}) {
  return (
    <div>
      <label
        htmlFor={registration.name}
        className="mb-2 block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative rounded-md">
        <textarea
          className={style({ color: error ? 'error' : 'default' })}
          placeholder={placeholder}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${registration.name}-error`}
          {...props}
          {...registration}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && (
        <p
          className="mt-2 text-sm text-red-600"
          id={`${registration.name}-error`}
        >
          {error.message}
        </p>
      )}
    </div>
  );
}
