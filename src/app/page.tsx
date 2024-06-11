'use client';

import ReadContract from '@/components/read-contract';
import WriteContract from '@/components/write-contract';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <ReadContract />
      <WriteContract />
    </main>
  );
}
