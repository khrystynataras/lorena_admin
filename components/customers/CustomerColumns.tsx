"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: "clerkId",
    header: "ID Клієнта",
  },
  {
    accessorKey: "name",
    header: "Ім'я",
  },
  {
    accessorKey: "email",
    header: "Ел.пошта",
  },
];
