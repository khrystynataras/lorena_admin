"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderColumnType>[] = [
  {
    accessorKey: "_id",
    header: "Замовлення",
    cell: ({ row }) => {
      return (
        <Link
          href={`/orders/${row.original._id}`}
          className="hover:text-red-1"
        >
          {row.original._id}
        </Link>
      );
    },
  },
  {
    accessorKey: "customer",
    header: "Клієнт",
  },
  {
    accessorKey: "products",
    header: "Товари",
  },
  {
    accessorKey: "totalAmount",
    header: "Загальна сума (₴)",
  },
  {
    accessorKey: "createdAt",
    header: "Час створення",
  },
];
