import {
  EmptyState,
  FreePlanEmptyState,
  DashboardShell,
  SiteTable,
} from '../components';
import { useAuth } from '../lib/auth';
import fetcher from '../utils/fetcher';
import useSWR from 'swr';

export default function Dashboard() {
  const auth = useAuth();
  const { data } = useSWR('api/sites', fetcher);

  if (!data) {
    return 'Loading...';
  }

  return (
    <DashboardShell>
      {data.sites.length > 0 ? (
        <SiteTable sites={data.sites} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
}
