import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { wagmiContractConfig } from '@/lib/wagmiContractConfig';

export default function WriteContract() {
  const { data: hash, isPending, writeContract } = useWriteContract();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tokenId = formData.get('tokenId');
    if (tokenId === null) {
      console.error('Token ID is missing from the form data.');
      return;
    }
    const tokenIdValue = parseInt(tokenId.toString());
    writeContract({
      ...wagmiContractConfig,
      functionName: 'mint',
      args: [tokenIdValue],
    });
  };
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  return (
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-xl font-semibold mb-4">Write to Contract</h3>
      <form onSubmit={submitHandler} className="space-y-4">
        <Input type="text" name="tokenId" placeholder="Enter Token ID e.g., 69420" className="w-full p-2 border rounded" required />
        <Button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {isPending ? 'confirming' : 'Mint'}
        </Button>
        {hash && <div>Tx hash: {hash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Transaction confirmed.</div>}
      </form>
    </div>
  );
}
