'use client';

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
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Send, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const emailBodyPlaceholder = `Hi {first_name},

It's been a while since your last visit! We'd love to have you back.

As a valued customer, we're offering you an exclusive discount on your
next service. Whether it's window tinting, ceramic coating, or a full
vehicle wrap - we've got you covered.

Book your appointment today and experience the difference.

Best regards,`;

export default function EmailsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Email Campaigns</h1>

      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <Send className="h-5 w-5 text-muted-foreground" />
          <CardTitle>Compose Email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <div className="space-y-2">
                <Label htmlFor="template">Template</Label>
                <Select defaultValue="re-engagement">
                  <SelectTrigger id="template">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="re-engagement">Re-engagement</SelectItem>
                    <SelectItem value="reminder">Reminder</SelectItem>
                    <SelectItem value="promo">Promotion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  defaultValue="We Miss You at Impure Tint!"
                  placeholder="Email subject"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="body">
                  Body (use {'{first_name}'} and {'{last_name}'} for personalization)
                </Label>
                <Textarea
                  id="body"
                  rows={12}
                  className="min-h-[200px] resize-y font-mono text-sm"
                  defaultValue={emailBodyPlaceholder}
                  placeholder="Email body..."
                />
              </div>
            </div>
            <div className="lg:col-span-1">
              <Card className="border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Recipients</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="select-all" />
                    <Label
                      htmlFor="select-all"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Select All (0)
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground">No customers</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Send className="mr-2 h-4 w-4" />
            Send to 0 Customer(s)
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <CardTitle>Recent Email Log</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Feb 16, 11:19 PM</TableCell>
                <TableCell>admin@skyringai.com</TableCell>
                <TableCell>Reminder: Your Appointment at Impure Tint</TableCell>
                <TableCell>reminder</TableCell>
                <TableCell>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    sent
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
