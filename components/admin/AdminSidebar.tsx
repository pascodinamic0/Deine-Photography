'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Camera,
  FileText,
  Users,
  Calendar,
  Receipt,
  Banknote,
  BookOpen,
  Mail,
  BarChart3,
  Star,
  Settings,
  Lock,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/inquiries', label: 'Book a shot', icon: Camera },
  { href: '/admin/quotes', label: 'Quotes', icon: FileText },
  { href: '/admin/customers', label: 'Customers', icon: Users },
  { href: '/admin/appointments', label: 'Appointments', icon: Calendar },
  { href: '/admin/invoices', label: 'Invoices', icon: Receipt },
  { href: '/admin/transactions', label: 'Transactions', icon: Banknote },
  { href: '/admin/bookkeeping', label: 'Bookkeeping', icon: BookOpen },
  { href: '/admin/emails', label: 'Emails', icon: Mail },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/reviews', label: 'Reviews', icon: Star },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLockApp() {
    // Clear any client-side admin session so they must log in again
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('admin-session');
    }
    router.push('/admin/login');
  }

  return (
    <aside className="flex h-full w-56 flex-col border-r border-border bg-card">
      <div className="flex h-14 items-center border-b border-border px-4">
        <span className="text-sm font-semibold text-foreground">Admin Panel</span>
      </div>
      <nav className="flex-1 space-y-0.5 p-2">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-teal-600/20 text-teal-400'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border p-2">
        <button
          type="button"
          onClick={handleLockApp}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Lock className="h-5 w-5 shrink-0" />
          Lock App
        </button>
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
