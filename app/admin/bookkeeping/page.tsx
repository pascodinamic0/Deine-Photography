'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const metricCards = [
  { label: 'Revenue', value: '$0.00' },
  { label: 'COGS', value: '$0.00' },
  { label: 'Gross Profit', value: '$0.00' },
  { label: 'Expenses', value: '$0.00' },
  { label: 'Net Profit', value: '$0.00' },
];

const profitabilityRows = [
  { label: 'Revenue', value: '$0.00' },
  { label: 'Material Costs', value: '-$0.00' },
  { label: 'Labor Costs', value: '-$0.00' },
  { label: 'Gross Profit', value: '$0.00', sub: '0.0%', negative: true },
  { label: 'Operating Expenses', value: '-$0.00' },
  { label: 'Net Profit', value: '$0.00', sub: '0.0%', negative: true },
  { label: 'Jobs completed', value: '0' },
];

export default function BookkeepingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Bookkeeping</h1>

      <Tabs defaultValue="financial-summary" className="w-full">
        <TabsList className="h-10 w-full justify-start rounded-none border-b border-border bg-transparent p-0">
          <TabsTrigger
            value="inventory"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 data-[state=active]:border-teal-500 data-[state=active]:bg-transparent data-[state=active]:text-teal-400 data-[state=active]:shadow-none"
          >
            Inventory & Materials
          </TabsTrigger>
          <TabsTrigger
            value="shop-hours"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 data-[state=active]:border-teal-500 data-[state=active]:bg-transparent data-[state=active]:text-teal-400 data-[state=active]:shadow-none"
          >
            Shop Hours
          </TabsTrigger>
          <TabsTrigger
            value="expenses"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 data-[state=active]:border-teal-500 data-[state=active]:bg-transparent data-[state=active]:text-teal-400 data-[state=active]:shadow-none"
          >
            Expenses
          </TabsTrigger>
          <TabsTrigger
            value="financial-summary"
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 data-[state=active]:border-teal-500 data-[state=active]:bg-transparent data-[state=active]:text-teal-400 data-[state=active]:shadow-none"
          >
            Financial Summary
          </TabsTrigger>
        </TabsList>

        <TabsContent value="financial-summary" className="mt-6 space-y-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold">Financial Summary</h2>
            <Select defaultValue="current-month">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current-month">Current Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {metricCards.map(({ label, value }) => (
              <Card
                key={label}
                className="border-sky-500/30 bg-card/80 shadow-[0_0_12px_rgba(20,184,166,0.08)]"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-teal-400">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-sky-500/30 bg-card/80 shadow-[0_0_12px_rgba(20,184,166,0.08)]">
            <CardHeader>
              <CardTitle>Profitability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {profitabilityRows.map(({ label, value, sub, negative }) => (
                <div
                  key={label}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/50 py-2 last:border-0"
                >
                  <span className="text-sm">{label}</span>
                  <span className="flex items-baseline gap-2 text-sm">
                    <span>{value}</span>
                    {sub != null && (
                      <span
                        className={cn(
                          'text-xs',
                          negative ? 'text-red-500' : 'text-muted-foreground'
                        )}
                      >
                        ({sub})
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground">
            This summary is for reference only. Consult a CPA for official financial reporting.
          </p>
        </TabsContent>

        <TabsContent value="inventory" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Inventory & Materials</CardTitle>
              <p className="text-sm text-muted-foreground">Manage stock and materials.</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No inventory data yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shop-hours" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Shop Hours</CardTitle>
              <p className="text-sm text-muted-foreground">Configure business hours.</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No hours configured yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expenses" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Expenses</CardTitle>
              <p className="text-sm text-muted-foreground">Track operating expenses.</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No expenses recorded yet.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
