import routes from "../config/routes.js";

// Convert IP to binary string
function ipToBinary(ip) {
  return ip
    .split(".")
    .map((octet) => Number(octet).toString(2).padStart(8, "0"))
    .join("");
}

// Check if IP matches CIDR
function matchesNetwork(ip, network) {
  const [networkIP, prefixLength] = network.split("/");
  const ipBinary = ipToBinary(ip);
  const networkBinary = ipToBinary(networkIP);
  return (
    ipBinary.substring(0, prefixLength) ===
    networkBinary.substring(0, prefixLength)
  );
}

export function findRoute(destinationIP) {
  let bestMatch = null;
  let longestPrefix = -1;

  for (const route of routes) {
    const prefixLength = Number(route.network.split("/")[1]);

    if (matchesNetwork(destinationIP, route.network)) {
      if (prefixLength > longestPrefix) {
        longestPrefix = prefixLength;
        bestMatch = route;
      }
    }
  }

  return bestMatch || "NO_ROUTE";
}
