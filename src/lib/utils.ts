import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
    const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";
    return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
