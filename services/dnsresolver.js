import dnsTable from "../config/dns.js";

export function resolveDNS(hostname) {
  if (dnsTable[hostname]) {
    return dnsTable[hostname];
  } else {
    return "NXDOMAIN";
  }
}
