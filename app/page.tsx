import { Metadata } from 'next';
import { WorkspaceBuilderApp } from '@/components/organisms/workspace-builder-app';

export const metadata: Metadata = {
  title: 'Workspace Builder | monis.rent - Bali Office Equipment Rental',
  description:
    'Design your dream workspace in Bali. Rent standing desks, ergonomic mesh chairs, 4K monitors, and tropical accessories delivered directly to your villa.'
};

export default function HomePage() {
  return <WorkspaceBuilderApp />;
}
