'use client';

import TimeAgo from 'react-timeago';

export default function CustomTimeAgo({ createdAt }: { createdAt: string }) {
  return <TimeAgo date={createdAt} />;
}
