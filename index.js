// index.js

import dns from "./config/dns.js";
import routes from "./config/routes.js";
import firewall from "./config/firewall.js";
import { resolveDNS } from "./services/dnsResolver.js";
import { findRoute } from "./services/routingService.js";
import { simulateTTL } from "./services/ttlSimulator.js";
import { simulatePacket } from "./services/packetSimulator.js";

console.log("=================================");
console.log(" Virtual Network Simulator START ");
console.log("=================================\n");

// STEP 8: Load configurations
console.log("Loaded DNS Configuration:");
console.log(dns, "\n");

console.log("Loaded Routing Table:");
console.log(routes, "\n");

console.log("Loaded Firewall Rules:");
console.log(firewall, "\n");

console.log("=================================");
console.log(" STEP 8 COMPLETED SUCCESSFULLY ");
console.log("=================================");
console.log("\nDNS Resolution Tests:");
console.log("google.com →", resolveDNS("google.com"));
console.log("youtube.com →", resolveDNS("youtube.com"));
console.log("unknown.com →", resolveDNS("unknown.com"));
console.log("\nRouting Tests:");
console.log("192.168.1.25 →", findRoute("192.168.1.25"));
console.log("10.2.3.4 →", findRoute("10.2.3.4"));
console.log("8.8.8.8 →", findRoute("8.8.8.8"));
console.log("\nTTL Simulation Test:");
const ttlResult = simulateTTL(3, 5);
ttlResult.forEach((line) => console.log(line));
console.log("\nFull Packet Simulation Test:");

const result = simulatePacket({
  hostname: "google.com",
  sourceIP: "10.0.0.5",
  protocol: "TCP",
  port: 80,
  ttl: 5
});

result.forEach((line) => console.log(line));
