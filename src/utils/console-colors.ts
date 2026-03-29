const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const CYAN = "\x1b[36m";
const BOLD = "\x1b[1m";
const RESET = "\x1b[0m";

export const yellow = (str: string | number) => `${YELLOW}${str}${RESET}`;
export const red = (str: string | number) => `${RED}${str}${RESET}`;
export const cyan = (str: string | number) => `${CYAN}${str}${RESET}`;
export const bold = (str: string | number) => `${BOLD}${str}${RESET}`;
