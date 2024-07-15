"use client";

import { Badge, BadgeProps } from "@/components/ui/badge";
import { Payment } from "@/data/payments.data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const variant =
        {
          pending: "secondary",
          processing: "secondary",
          success: "success",
          failed: "destructive",
        }[status] ?? ("default")  as any
      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
];
