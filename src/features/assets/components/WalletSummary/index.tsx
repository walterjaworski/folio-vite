import SummaryCard from "./SummaryCard";

interface IWalletSummaryProps {
  children: React.ReactNode;
}

const WalletSummaryRoot = ({ children }: IWalletSummaryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {children}
    </div>
  )
}

export const WalletSummary = Object.assign(WalletSummaryRoot, {
  Card: SummaryCard,
});
