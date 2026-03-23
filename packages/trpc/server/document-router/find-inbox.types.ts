// import type { OpenApiMeta } from 'trpc-to-openapi';
import { z } from 'zod';

import { ZDocumentManySchema } from '@documenso/lib/types/document';
import { ZFindResultResponse, ZFindSearchParamsSchema } from '@documenso/lib/types/search-params';

export const ZInboxFilterStatus = z.enum(['ALL', 'ACTION_REQUIRED', 'COMPLETED']);

export type TInboxFilterStatus = z.infer<typeof ZInboxFilterStatus>;

export const ZFindInboxRequestSchema = ZFindSearchParamsSchema.extend({
  status: ZInboxFilterStatus.optional(),
});

export const ZFindInboxResponseSchema = ZFindResultResponse.extend({
  data: ZDocumentManySchema.array(),
});

export type TFindInboxResponse = z.infer<typeof ZFindInboxResponseSchema>;
