'use client';

import { useState } from 'react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2, ChevronDown } from 'lucide-react';

const statusOptions = [
  'new',
  'contacted',
  'quoted',
  'scheduled',
  'converted',
  'lost',
] as const;

type Status = (typeof statusOptions)[number];

const sampleInquiries = [
  {
    id: '1',
    name: 'Morgon newman',
    email: 'putlawdip123@gmail.com',
    service: 'Window Tinting',
    status: 'new' as Status,
    date: 'Feb 17, 2026',
  },
];

export default function InquiriesPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [inquiryStatuses, setInquiryStatuses] = useState<Record<string, Status>>(
    Object.fromEntries(sampleInquiries.map((i) => [i.id, i.status]))
  );

  const getStatus = (id: string) => inquiryStatuses[id] ?? 'new';
  const setStatus = (id: string, value: Status) => {
    setInquiryStatuses((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Book a shot</h1>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Book a shot</CardTitle>
            <div className="flex gap-2">
              <Input
                placeholder="Search name or email..."
                className="max-w-[240px]"
              />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  {statusOptions.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-[120px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleInquiries.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{row.name}</span>
                      <span className="text-xs text-muted-foreground">{row.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-teal-500/20 text-teal-400 border-teal-500/30">
                      {getStatus(row.id)}
                    </Badge>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuRadioGroup
                            value={getStatus(row.id)}
                            onValueChange={(v) => setStatus(row.id, v as Status)}
                          >
                            {statusOptions.map((opt) => (
                              <DropdownMenuRadioItem key={opt} value={opt}>
                                {opt}
                              </DropdownMenuRadioItem>
                            ))}
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {sampleInquiries.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                    No inquiries yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
