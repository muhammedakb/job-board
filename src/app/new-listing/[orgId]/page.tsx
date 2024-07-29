import { getUser } from '@workos-inc/authkit-nextjs';
import { WorkOS } from '@workos-inc/node';

import '@radix-ui/themes/styles.css';
import 'react-country-state-city/dist/react-country-state-city.css';
import JobForm from '@/app/components/JobForm';

type PageProps = {
  params: {
    orgId: string;
  };
};

export default async function CompanyDetailPage({ params }: PageProps) {
  const { user } = await getUser();
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  if (!user) return <h1>Please log in</h1>;

  console.log('params', params);

  const orgId = params?.orgId;
  const oms = await workos.userManagement.listOrganizationMemberships({
    userId: user.id,
    organizationId: orgId,
  });
  const hasAccess = oms.data.length > 0;

  if (!hasAccess) return <h1>No access!</h1>;

  return <JobForm orgId={orgId} />;
}
