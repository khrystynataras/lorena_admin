"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export const columns: ColumnDef<OrderItemType>[] = [
  {
    accessorKey: "product",
    header: "Товар",
    cell: ({ row }) => {
      return (
        <Link
          href={`/products/${row.original.product._id}`}
          className="hover:text-red-1"
        >
          {row.original.product.title}
        </Link>
      );
    },
  },
  {
    accessorKey: "color",
    header: "Колір",
  },
  {
    accessorKey: "size",
    header: "Розмір",
  },
  {
    accessorKey: "quantity",
    header: "Кількість",
  },
];
