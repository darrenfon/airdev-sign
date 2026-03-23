import { msg } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';
import { InboxIcon } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';

import type { TInboxFilterStatus } from '@documenso/trpc/server/document-router/find-inbox.types';
import { Tabs, TabsList, TabsTrigger } from '@documenso/ui/primitives/tabs';

import { OrganisationInvitations } from '~/components/general/organisations/organisation-invitations';
import { InboxTable } from '~/components/tables/inbox-table';
import { appMetaTags } from '~/utils/meta';

export function meta() {
  return appMetaTags(msg`Personal Inbox`);
}

const INBOX_STATUS_TABS: Array<{ label: () => JSX.Element; value: TInboxFilterStatus }> = [
  { label: () => <Trans>All</Trans>, value: 'ALL' },
  { label: () => <Trans>Action Required</Trans>, value: 'ACTION_REQUIRED' },
  { label: () => <Trans>Completed</Trans>, value: 'COMPLETED' },
];

export default function InboxPage() {
  const [searchParams] = useSearchParams();
  const currentStatus = (searchParams.get('status') as TInboxFilterStatus) || 'ALL';

  const getTabHref = (value: TInboxFilterStatus) => {
    const params = new URLSearchParams(searchParams);

    params.set('status', value);

    if (value === 'ALL') {
      params.delete('status');
    }

    if (params.has('page')) {
      params.delete('page');
    }

    const queryString = params.toString();
    return queryString ? `/inbox?${queryString}` : '/inbox';
  };

  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 md:px-8">
      <div className="mb-8">
        <h1 className="flex flex-row items-center gap-2 text-3xl font-bold">
          <InboxIcon className="h-8 w-8 text-muted-foreground" />

          <Trans>Personal Inbox</Trans>
        </h1>
        <p className="mt-1 text-muted-foreground">
          <Trans>Any documents that you have been invited to will appear here</Trans>
        </p>

        <OrganisationInvitations className="mt-4" />
      </div>

      <div className="mb-6">
        <Tabs value={currentStatus} className="overflow-x-auto">
          <TabsList>
            {INBOX_STATUS_TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                className="min-w-[60px] hover:text-foreground"
                value={tab.value}
                asChild
              >
                <Link to={getTabHref(tab.value)} preventScrollReset>
                  {tab.label()}
                </Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <InboxTable />
    </div>
  );
}
