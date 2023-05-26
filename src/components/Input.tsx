import { tv } from 'tailwind-variants';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { type FieldError, type UseFormRegisterReturn } from 'react-hook-form';

const style = tv({
  base: 'block w-full rounded-md border-0 py-1.5 px-2 ring-1 focus:ring-2 ring-inset focus:ring-inset',
  variants: {
    color: {
      default:
        'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600',
      error:
        'text-red-900 ring-red-300 pr-10 placeholder:text-red-300 focus:ring-red-500',
    },
  },
});

export default function Input({
  label,
  placeholder,
  registration,
  error,
}: {
  label: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}) {
  return (
    <div>
      <label
        htmlFor={registration.name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md">
        <input
          className={style({ color: error ? 'error' : 'default' })}
          placeholder={placeholder}
          aria-invalid="true"
          aria-describedby="form-error"
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
        <p className="mt-2 text-sm text-red-600" id="form-error">
          {error.message}
        </p>
      )}
    </div>
  );
}
