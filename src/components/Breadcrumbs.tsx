'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

import capitalizeText from '@/utils/capitalizeText';

export default function Breadcrumbs() {
  const pathname = usePathname();

  const links = pathname?.split('/').filter(Boolean) ?? [];

  return (
    <div className="flex items-center">
      {links.map((link, index) => {
        const capitalizedLink = capitalizeText(link);

        return (
          <Fragment key={link}>
            {index === links.length - 1 ? (
              <div className="text-gray-500">{capitalizedLink}</div>
            ) : (
              <Link
                href={`/${links.slice(0, index + 1).join('/')}`}
                className="text-indigo-600 hover:underline"
              >
                {capitalizedLink}
              </Link>
            )}
            {index !== links.length - 1 && (
              <ChevronRightIcon className="mx-1.5 h-5 w-5 text-gray-400" />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
