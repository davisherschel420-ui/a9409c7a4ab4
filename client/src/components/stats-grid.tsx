import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Box, Cpu, Zap, ArrowUpRight, TrendingUp } from "lucide-react";

export function StatsGrid() {
  const stats = [
    {
      title: "Network Hashrate",
      value: "482.5 EH/s",
      change: "+2.4%",
      icon: Activity,
      trend: "up"
    },
    {
      title: "Latest Block",
      value: "#18,492,012",
      change: "12s ago",
      icon: Box,
      trend: "neutral"
    },
    {
      title: "Difficulty",
      value: "67.31 T",
      change: "+1.1%",
      icon: Cpu,
      trend: "up"
    },
    {
      title: "Avg Gas Price",
      value: "24 Gwei",
      change: "-5.2%",
      icon: Zap,
      trend: "down"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Card key={i} className="glass-card border-white/5 bg-black/40 backdrop-blur-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono tracking-tight">{stat.value}</div>
            <p className={`text-xs flex items-center mt-1 ${
              stat.trend === 'up' ? 'text-green-400' : 
              stat.trend === 'down' ? 'text-red-400' : 'text-muted-foreground'
            }`}>
              {stat.trend === 'up' && <TrendingUp className="w-3 h-3 mr-1" />}
              {stat.change}
              <span className="text-muted-foreground ml-1">last 24h</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}