import * as React from "react";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { cn } from "../../lib/utils"; // Make sure you have utils.js with cn()

export function AppNavigationMenu({ colors }) {
    return (
        <NavigationMenu className="relative z-50">
            <NavigationMenuList className="flex gap-4">
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={cn(
                            "px-4 py-2 rounded-md text-white font-semibold",
                            "hover:opacity-80 transition",
                        )}
                        style={{ backgroundColor: colors.primary[400] }}
                    >
                        Components
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="grid grid-cols-2 gap-4 p-4 rounded-lg shadow-lg"
                        style={{ backgroundColor: colors.primary[500], color: "white" }}
                    >
                        <NavigationMenuLink className="block p-2 rounded hover:opacity-80 transition">
                            <div className="font-bold">Alert Dialog</div>
                            <p className="text-sm opacity-80">Interrupts the user with content.</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 rounded hover:opacity-80 transition">
                            <div className="font-bold">Progress</div>
                            <p className="text-sm opacity-80">Shows task completion progress.</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 rounded hover:opacity-80 transition">
                            <div className="font-bold">Tabs</div>
                            <p className="text-sm opacity-80">Layered sections of content.</p>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="block p-2 rounded hover:opacity-80 transition">
                            <div className="font-bold">Tooltip</div>
                            <p className="text-sm opacity-80">Display extra info on hover.</p>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className={cn(
                            "px-4 py-2 rounded-md text-white font-semibold",
                            "hover:opacity-80 transition",
                        )}
                        style={{ backgroundColor: colors.greenAccent[500] }}
                    >
                        Docs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="p-4 rounded-lg shadow-lg"
                        style={{ backgroundColor: colors.greenAccent[600], color: "white" }}
                    >
                        <NavigationMenuLink className="block p-2 rounded hover:opacity-80 transition">
                            <div className="font-bold">Getting Started</div>
                            <p className="text-sm opacity-80">Quick intro to the dashboard.</p>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
