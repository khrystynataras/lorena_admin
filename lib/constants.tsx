import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    icon: <LayoutDashboard />,
    label: "Інформаційна панель",
  },
  {
    url: "/collections",
    icon: <Shapes />,
    label: "Колекції",
  },
  {
    url: "/products",
    icon: <Tag />,
    label: "Товари",
  },
  {
    url: "/orders",
    icon: <ShoppingBag />,
    label: "Замовлення",
  },
  {
    url: "/customers",
    icon: <UsersRound />,
    label: "Клієнти",
  },
];
