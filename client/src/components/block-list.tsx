import { motion } from "framer-motion";
import { Box, Clock, User, Layers } from "lucide-react";

const blocks = [
  { height: 18492012, miner: "0x3f...9a21", txns: 142, time: "12s ago", reward: "2.1 ETH" },
  { height: 18492011, miner: "0x82...b1c4", txns: 89, time: "24s ago", reward: "1.8 ETH" },
  { height: 18492010, miner: "0x1d...e3f1", txns: 256, time: "36s ago", reward: "3.2 ETH" },
  { height: 18492009, miner: "AntPool", txns: 112, time: "48s ago", reward: "1.9 ETH" },
  { height: 18492008, miner: "0x4a...c2d1", txns: 178, time: "1m ago", reward: "2.0 ETH" },
];

export function BlockList() {
  return (
    <div className="glass-card rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display font-bold text-lg flex items-center gap-2">
          <Layers className="w-5 h-5 text-primary" />
          Latest Blocks
        </h3>
        <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">Live</span>
      </div>

      <div className="space-y-4">
        {blocks.map((block, i) => (
          <motion.div 
            key={block.height}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group flex items-center justify-between p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary/20 transition-colors">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono font-bold text-sm text-primary group-hover:text-primary-foreground transition-colors">#{block.height}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {block.time}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm font-medium">{block.txns} txns</div>
              <div className="text-xs text-muted-foreground flex items-center justify-end gap-1 font-mono">
                 Miner: {block.miner}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}