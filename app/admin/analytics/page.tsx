'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const dateRangeOptions = ['Today', 'This Week', 'This Month', 'This Year'] as const;
const kpiCards = [
  { label: 'New Customers', value: '3' },
  { label: 'Inquiries', value: '1' },
  { label: 'Converted', value: '0' },
  { label: 'Conversion Rate', value: '0.0%' },
  { label: 'Repeat Customers', value: '0' },
];
const topCustomers = [
  { name: 'Connor Hinton', revenue: '$1,400' },
  { name: 'Aiden Palmer', revenue: '$700' },
  { name: 'KK', revenue: '$300' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="h-10 w-full justify-start rounded-none border-b border-border bg-transparent p-0">
          <TabsTrigger
            value="overview"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 data-[state=active]:border-teal-500 data-[state=active]:bg-transparent data-[state=active]:text-teal-400 data-[state=active]:shadow-none"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="services"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 data-[state=active]:border-teal-500 data-[state=active]:bg-transparent data-[state=active]:text-teal-400 data-[state=active]:shadow-none"
          >
            Services
          </TabsTrigger>
          <TabsTrigger
            value="expenses-profit"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 data-[state=active]:border-teal-500 data-[state=active]:bg-transparent data-[state=active]:text-teal-400 data-[state=active]:shadow-none"
          >
            Expenses & Profit
          </TabsTrigger>
          <TabsTrigger
            value="clients"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 data-[state=active]:border-teal-500 data-[state=active]:bg-transparent data-[state=active]:text-teal-400 data-[state=active]:shadow-none"
          >
            Clients
          </TabsTrigger>
          <TabsTrigger
            value="activity"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 data-[state=active]:border-teal-500 data-[state=active]:bg-transparent data-[state=active]:text-teal-400 data-[state=active]:shadow-none"
          >
            Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">Time range</span>
            <div className="flex rounded-lg border border-border bg-muted/30 p-0.5">
              {dateRangeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={cn(
                    'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                    option === 'This Month'
                      ? 'bg-teal-600/20 text-teal-400'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {kpiCards.map(({ label, value }) => (
              <Card key={label}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Customers by Revenue</CardTitle>
              <p className="text-sm text-muted-foreground">Ranked by total revenue.</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {topCustomers.map(({ name, revenue }, i) => (
                  <li
                    key={name}
                    className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm">
                      {i + 1}. {name}
                    </span>
                    <span className="font-medium text-teal-400">{revenue}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Services</CardTitle>
              <p className="text-sm text-muted-foreground">Analytics by service.</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No service data yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses-profit" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Expenses & Profit</CardTitle>
              <p className="text-sm text-muted-foreground">Breakdown of costs and profit.</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No data yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clients" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Clients</CardTitle>
              <p className="text-sm text-muted-foreground">Client-level analytics.</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No data yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Activity</CardTitle>
              <p className="text-sm text-muted-foreground">Recent activity log.</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No activity yet.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
