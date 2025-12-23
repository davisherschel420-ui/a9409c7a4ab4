import { Button } from "@/components/ui/button";
import { StatsGrid } from "@/components/stats-grid";
import { BlockList } from "@/components/block-list";
import { TransactionFeed } from "@/components/transaction-feed";
import { Search, Globe, ChevronRight } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_blockchain_network_visualization_with_glowing_nodes.png";

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
              <Globe className="w-5 h-5 text-black" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">NEXUS<span className="text-primary">SCAN</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="text-white hover:text-primary transition-colors">Dashboard</a>
            <a href="#" className="hover:text-primary transition-colors">Blocks</a>
            <a href="#" className="hover:text-primary transition-colors">Transactions</a>
            <a href="#" className="hover:text-primary transition-colors">Tokens</a>
            <a href="#" className="hover:text-primary transition-colors">NFTs</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:flex border-primary/20 hover:bg-primary/10 hover:text-primary text-primary-foreground font-mono text-xs h-9">
              Mainnet
            </Button>
            <Button className="bg-primary text-black hover:bg-primary/90 font-medium">
              Connect Wallet
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <div 
             className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: `url(${heroBg})` }}
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
           <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              The Future of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text-primary">Decentralized</span> Data
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Explore blocks, transactions, and metrics on the Nexus Chain. Real-time insights for the next generation of web3.
            </p>
            
            <div className="relative max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-4 border border-white/10 rounded-lg leading-5 bg-black/40 backdrop-blur-md text-white placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm shadow-xl" 
                placeholder="Search by Address, Txn Hash, Block, or Token" 
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                 <kbd className="inline-flex items-center border border-white/10 rounded px-2 text-xs font-sans font-medium text-muted-foreground">CMD + K</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 -mt-10 relative z-20 space-y-6">
        <StatsGrid />
        
        <div className="grid lg:grid-cols-2 gap-6">
          <BlockList />
          <TransactionFeed />
        </div>

        {/* Chart Section Placeholder */}
        <div className="glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
             <Globe className="w-8 h-8 text-secondary" />
          </div>
          <h3 className="text-2xl font-display font-bold">Global Network Activity</h3>
          <p className="text-muted-foreground max-w-md">
            View real-time node distribution and transaction propagation across the globe.
          </p>
          <Button variant="outline" className="mt-4 group border-white/10 hover:bg-white/5">
            View Network Map <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </main>
      
      <footer className="border-t border-white/5 mt-20 bg-black/40 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
           <p>© 2024 Nexus Chain Foundation. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-primary">Documentation</a>
             <a href="#" className="hover:text-primary">API</a>
             <a href="#" className="hover:text-primary">Status</a>
             <a href="#" className="hover:text-primary">Terms</a>
           </div>
        </div>
      </footer>
    </div>
  );
}