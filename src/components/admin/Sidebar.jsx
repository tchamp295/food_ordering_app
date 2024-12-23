"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Users,
  ClipboardList,
  Settings,
  TrendingUp,
  ChefHat,
  LogOut,
  ChevronLeft,
  Menu,
  ChevronDown,
  PlusCircle,
  List,
  UserPlus,
  FileText,
  BarChart3,
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const pathname = usePathname();

  const toggleDropdown = (title) => {
    if (!isCollapsed) {
      setOpenDropdowns((prev) => ({
        ...prev,
        [title]: !prev[title],
      }));
    }
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    {
      title: "Orders",
      icon: <ClipboardList size={20} />,
      submenu: [
        {
          title: "All Orders",
          path: "/admin/orders",
          icon: <List size={18} />,
        },
        {
          title: "Order Reports",
          path: "/admin/orders/reports",
          icon: <FileText size={18} />,
        },
      ],
    },
    {
      title: "Menu Items",
      icon: <UtensilsCrossed size={20} />,
      submenu: [
        { title: "All Items", path: "/admin/menu", icon: <List size={18} /> },
        {
          title: "Add New Item",
          path: "/admin/menu/create",
          icon: <PlusCircle size={18} />,
        },
        {
          title: "Categories",
          path: "/admin/menu/categories",
          icon: <FileText size={18} />,
        },
      ],
    },
    {
      title: "Customers",
      icon: <Users size={20} />,
      submenu: [
        {
          title: "All Customers",
          path: "/admin/customers",
          icon: <List size={18} />,
        },
        {
          title: "Add Customer",
          path: "/admin/customers/create",
          icon: <UserPlus size={18} />,
        },
      ],
    },
    {
      title: "Staff",
      icon: <ChefHat size={20} />,
      submenu: [
        { title: "All Staff", path: "/admin/staff", icon: <List size={18} /> },
        {
          title: "Add Staff",
          path: "/admin/staff/create",
          icon: <UserPlus size={18} />,
        },
      ],
    },
    {
      title: "Analytics",
      icon: <TrendingUp size={20} />,
      submenu: [
        {
          title: "Overview",
          path: "/admin/analytics",
          icon: <BarChart3 size={18} />,
        },
        {
          title: "Reports",
          path: "/admin/analytics/reports",
          icon: <FileText size={18} />,
        },
      ],
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },
  ];

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } min-h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <span className="text-xl font-bold text-gray-800">FoodAdmin</span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg hover:bg-gray-100"
        >
          {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            const hasSubmenu = !!item.submenu;
            const isOpen = openDropdowns[item.title];

            return (
              <li key={item.title}>
                {hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className={`flex items-center w-full ${
                        isCollapsed ? "justify-center" : "justify-between"
                      } p-2 rounded-lg text-gray-600 hover:bg-gray-50`}
                    >
                      <div className="flex items-center">
                        <span className="shrink-0">{item.icon}</span>
                        {!isCollapsed && (
                          <span className="ml-3">{item.title}</span>
                        )}
                      </div>
                      {!isCollapsed && (
                        <ChevronDown
                          size={16}
                          className={`transform transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    {!isCollapsed && isOpen && (
                      <ul className="mt-1 ml-6 space-y-1">
                        {item.submenu.map((subitem) => {
                          const isSubActive = pathname === subitem.path;
                          return (
                            <li key={subitem.path}>
                              <Link
                                href={subitem.path}
                                className={`flex items-center p-2 rounded-lg ${
                                  isSubActive
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                <span className="shrink-0">{subitem.icon}</span>
                                <span className="ml-3">{subitem.title}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`flex items-center ${
                      isCollapsed ? "justify-center" : "justify-start"
                    } p-2 rounded-lg ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="shrink-0">{item.icon}</span>
                    {!isCollapsed && <span className="ml-3">{item.title}</span>}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 w-full p-2 border-t border-gray-200">
        <button
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "justify-start"
          } w-full p-2 text-red-600 rounded-lg hover:bg-red-50`}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
