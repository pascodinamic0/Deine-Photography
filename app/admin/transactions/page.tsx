import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Pencil, Trash2 } from 'lucide-react';

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight text-teal-400">Transactions</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Entry</CardTitle>
            <p className="text-sm text-muted-foreground">Record a new transaction.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1">
              <div className="space-y-2">
                <Label htmlFor="customer">Customer (optional)</Label>
                <Select>
                  <SelectTrigger id="customer">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="connor">Connor Hinton</SelectItem>
                    <SelectItem value="kk">KK</SelectItem>
                    <SelectItem value="aiden">Aiden Palmer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" step="0.01" placeholder="0.00" defaultValue="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reference">Reference #</Label>
                <Input id="reference" placeholder="Reference" />
              </div>
            </div>
            <Button className="w-full bg-teal-600 hover:bg-teal-700">Record Transaction</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>By Payment Method</CardTitle>
            <p className="text-sm text-muted-foreground">Summary of transactions by method.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Cash</span>
                <span>$1,000 (42%)</span>
              </div>
              <Progress value={42} className="h-2 [&>div]:bg-teal-500" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Card</span>
                <span>$1,400 (58%)</span>
              </div>
              <Progress value={58} className="h-2 [&>div]:bg-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <p className="text-sm text-muted-foreground">View and manage transaction history.</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Feb 18, 2026</TableCell>
                <TableCell>Aiden Palmer</TableCell>
                <TableCell>$700.00</TableCell>
                <TableCell>cash</TableCell>
                <TableCell>sale</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Feb 18, 2026</TableCell>
                <TableCell>KK</TableCell>
                <TableCell>$300.00</TableCell>
                <TableCell>cash</TableCell>
                <TableCell>sale</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Feb 18, 2026</TableCell>
                <TableCell>Connor Hinton</TableCell>
                <TableCell>$1,400.00</TableCell>
                <TableCell>card</TableCell>
                <TableCell>sale</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
