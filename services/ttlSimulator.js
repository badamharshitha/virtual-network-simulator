export function simulateTTL(initialTTL, hops) {
  let ttl = initialTTL;
  const trace = [];

  for (let i = 1; i <= hops; i++) {
    ttl--;

    if (ttl < 0) {
      trace.push(`Hop ${i}: TTL expired ❌`);
      return trace;
    }

    trace.push(`Hop ${i}: TTL = ${ttl}`);

    if (ttl === 0) {
      trace.push("Packet dropped (TTL reached 0)");
      return trace;
    }
  }

  trace.push("Packet delivered successfully ✅");
  return trace;
}
