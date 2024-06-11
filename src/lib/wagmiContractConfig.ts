import { WagmiAbi } from '@/abis/WagmiAbi';

const wagmiContractConfig = {
  address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
  abi: WagmiAbi,
};

export { wagmiContractConfig };
