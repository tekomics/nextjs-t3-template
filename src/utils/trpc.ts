// I've broken from the typical t3 util here in order to support client side trpc because tRPC does not yet have officla support for Next 13 App Router.
// https://github.com/trpc/trpc/issues/3297
// https://github.com/trpc/trpc/issues/3297#issuecomment-1423905894

import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';

import { type AppRouter } from '@/server/api/root';

import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();

/**
 * Inference helper for inputs.
 *
 * @elements type HelloInput = RouterInputs['elements']['list']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @elements type HelloOutput = RouterOutputs['example']['list']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;
