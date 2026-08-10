import { 
  LuLayoutDashboard, 
  LuPackage, 
  LuShoppingCart, 
  LuUsers, 
  LuChartNoAxesCombined, 
  LuSettings, 
  LuLogOut 
} from "react-icons/lu";

export const countries = [
    { value: "afghanistan", label: "Afghanistan" },
    { value: "bangladesh", label: "Bangladesh" },
    { value: "pakistan", label: "Pakistan" },
    { value: "india", label: "India" },
    { value: "iran", label: "Iran" },
    { value: "usa", label: "USA" },
    { value: "uae", label: "UAE" },
]

export const navLinks = [
    { id: 1, value: "Dashboard", label: "Dashboard", path: "/tailwind-dashboard", icon: LuLayoutDashboard },
    { id: 2, value: "Products", label: "Products", path: "products", icon: LuPackage },
    { id: 3, value: "Orders", label: "Orders", path: "statsistics", icon: LuShoppingCart },
    { id: 4, value: "Customers", label: "Customers", path: "users", icon: LuUsers },
    { id: 5, value: "Analytics", label: "Analytics", path: "analytics", icon: LuChartNoAxesCombined },
    { id: 6, value: "Settings", label: "Settings", path: "settings", icon: LuSettings },
    { id: 7, value: "Logout", label: "Logout", path: "settings", icon: LuLogOut },
]

export const card_details = [
    {id: 1, title: "Revenue", amount: 245000},
    {id: 2, title: "Orders", amount: 1248},
    {id: 3, title: "Customers", amount: 8549},
    {id: 4, title: "Growth", amount: 12.5},
]
