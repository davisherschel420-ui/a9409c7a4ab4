import { motion } from "framer-motion";
import { ArrowRightLeft, FileText, ExternalLink } from "lucide-react";

const transactions = [
  { hash: "0x7a...3b21", from: "0x12...34", to: "Uniswap V3", value: "4.2 ETH", type: "Swap" },
  { hash: "0x8b...4c32", from: "Binance 2", to: "0x98...76", value: "150.0 ETH", type: "Transfer" },
  { hash: "0x9c...5d43", from: "0xab...cd", to: "OpenSea", value: "0.45 ETH", type: "Sale" },
  { hash: "0x0d...6e54", from: "0xef...01", to: "Aave Pool", value: "10.0 ETH", type: "Deposit" },
  { hash: "0x1e...7f65", from: "BlockFi", to: "0x23...45", value: "52.1 ETH", type: "Transfer" },
];

export function TransactionFeed() {
  return (
    <div className="glass-card rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-bold text-lg flex items-center gap-2">
          <ArrowRightLeft className="w-5 h-5 text-secondary" />
          Recent Transactions
        </h3>
        <button className="text-xs text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
          View All <ExternalLink className="w-3 h-3" />
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((tx, i) => (
          <motion.div 
            key={tx.hash}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/20">
                <FileText className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <div className="font-mono text-sm text-secondary truncate w-24 md:w-32">{tx.hash}</div>
                <div className="text-xs text-muted-foreground">
                  From <span className="text-white/80">{tx.from}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm font-bold font-mono text-white">{tx.value}</div>
              <div className="text-xs text-muted-foreground bg-white/5 px-2 py-0.5 rounded-full inline-block mt-1">
                {tx.type}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}