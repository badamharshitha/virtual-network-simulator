import firewallRules from "../config/firewall.js";
import { resolveDNS } from "./dnsResolver.js";
import { findRoute } from "./routingService.js";
import { simulateTTL } from "./ttlSimulator.js";

function checkFirewall(sourceIP, protocol, port) {
  for (const rule of firewallRules) {
    const sourceMatch =
      rule.sourceIP === "ANY" || rule.sourceIP === sourceIP;
    const protocolMatch = rule.protocol === protocol;
    const portMatch = rule.port === port;

    if (sourceMatch && protocolMatch && portMatch) {
      return rule.action; // ALLOW or DENY
    }
  }
  return "ALLOW"; // default allow
}

export function simulatePacket({
  hostname,
  sourceIP,
  protocol,
  port,
  ttl
}) {
  const trace = [];

  // 1️⃣ DNS
  const destinationIP = resolveDNS(hostname);
  if (destinationIP === "NXDOMAIN") {
    trace.push("DNS failed → NXDOMAIN");
    return trace;
  }
  trace.push(`DNS resolved → ${destinationIP}`);

  // 2️⃣ Routing
  const route = findRoute(destinationIP);
  if (route === "NO_ROUTE") {
    trace.push("Routing failed → No route to host");
    return trace;
  }
  trace.push(`Routing matched → ${route.nextHop}`);

  // 3️⃣ TTL
  const ttlTrace = simulateTTL(ttl, 10);
  trace.push(...ttlTrace);

  if (ttlTrace.some((t) => t.includes("dropped"))) {
    return trace;
  }

  // 4️⃣ Firewall
  const firewallResult = checkFirewall(sourceIP, protocol, port);
  if (firewallResult === "DENY") {
    trace.push("Firewall blocked the packet ❌");
    return trace;
  }

  // 5️⃣ Success
  trace.push("Firewall allowed → Packet delivered successfully ✅");
  return trace;
}
