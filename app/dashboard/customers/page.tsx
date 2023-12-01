import { Metadata } from 'next';

export default function Page() {
  return <p>Custormers Page</p>;
}

export const metadata: Metadata = {
  title: 'Customers',
};

import Pagination from '@/app/ui/invoices/pagination';
