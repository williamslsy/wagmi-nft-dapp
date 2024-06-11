import { useReadContract, useReadContracts } from 'wagmi';
import { wagmiContractConfig } from '@/lib/wagmiContractConfig';

export default function ReadContract() {
  const { data, error, isError, isPending } = useReadContracts({
    contracts: [
      {
        ...wagmiContractConfig,
        functionName: 'balanceOf',
        args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
      },
      {
        ...wagmiContractConfig,
        functionName: 'ownerOf',
        args: [BigInt(69)],
      },
      {
        ...wagmiContractConfig,
        functionName: 'totalSupply',
      },
    ],
  });

  const balance = data?.[0]?.result?.toString() || 'N/A';
  const ownerOf = data?.[1]?.result?.toString() || 'N/A';
  const totalSupply = data?.[2]?.result?.toString() || 'N/A';

  return (
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg mb-10 p-8">
      <h3 className="text-xl font-semibold mb-4">Read from Contract</h3>
      <div className="space-y-2">
        {isPending ? (
          <div className="font-medium">Loading Details...</div>
        ) : isError ? (
          <div className="font-medium text-red-500">Error: {(error as Error)?.message}</div>
        ) : (
          <>
            <div className="font-medium">Balance: {balance}</div>
            <div className="font-medium">Owner of Token 69: {ownerOf}</div>
            <div className="font-medium">Total Supply: {totalSupply}</div>
          </>
        )}
      </div>
    </div>
  );
}
