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
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, MessageSquare } from 'lucide-react';

// Placeholder data until backend is connected
const pendingReviews = [
  {
    id: '1',
    customerName: 'Jane Doe',
    email: 'jane@example.com',
    rating: 5,
    body: 'Absolutely stunning photos. Professional and a pleasure to work with!',
    submittedAt: 'Feb 18, 2026',
  },
];
const approvedReviews = [
  {
    id: '2',
    customerName: 'Alex Smith',
    rating: 5,
    body: 'Best photographer in Dubai. The Burj Khalifa shoot was incredible.',
    approvedAt: 'Feb 15, 2026',
  },
];

export default function ReviewsPage() {
  const [pending, setPending] = useState(pendingReviews);
  const [approved, setApproved] = useState(approvedReviews);

  function handleApprove(id: string) {
    const review = pending.find((r) => r.id === id);
    if (!review) return;
    setPending((prev) => prev.filter((r) => r.id !== id));
    setApproved((prev) => [
      ...prev,
      { ...review, approvedAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) },
    ]);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Reviews</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Approve reviews to show as testimonials on the frontend. Request reviews from Customers after a confirmed shoot.
        </p>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="h-10">
          <TabsTrigger value="pending" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Pending ({pending.length})
          </TabsTrigger>
          <TabsTrigger value="approved" className="gap-2">
            <Check className="h-4 w-4" />
            Approved / On frontend ({approved.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending review</CardTitle>
              <p className="text-sm text-muted-foreground">
                Approve to publish as testimonials on the site.
              </p>
            </CardHeader>
            <CardContent>
              {pending.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">
                  No pending reviews. Request a review from a customer after confirming their shoot.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Review</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pending.map((r) => (
                      <TableRow key={r.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{r.customerName}</p>
                            <p className="text-xs text-muted-foreground">{r.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>{r.rating} ★</TableCell>
                        <TableCell className="max-w-md truncate">{r.body}</TableCell>
                        <TableCell>{r.submittedAt}</TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700"
                            onClick={() => handleApprove(r.id)}
                          >
                            <Check className="mr-1 h-4 w-4" />
                            Approve
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approved" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Approved reviews (testimonials)</CardTitle>
              <p className="text-sm text-muted-foreground">
                These appear on the frontend automatically. Remove or unapprove from Settings if needed.
              </p>
            </CardHeader>
            <CardContent>
              {approved.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">
                  No approved reviews yet. Approve pending reviews to show them on the site.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Review</TableHead>
                      <TableHead>Approved</TableHead>
                      <TableHead>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">On frontend</Badge>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {approved.map((r) => (
                      <TableRow key={r.id}>
                        <TableCell className="font-medium">{r.customerName}</TableCell>
                        <TableCell>{r.rating} ★</TableCell>
                        <TableCell className="max-w-md">{r.body}</TableCell>
                        <TableCell className="text-muted-foreground">{r.approvedAt}</TableCell>
                        <TableCell>—</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
