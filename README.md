# 🌐 Virtual Network Simulator for Packet Tracing

## 📌 Project Overview

The **Virtual Network Simulator for Packet Tracing** is a backend-focused simulation tool that models how a network packet travels through a configurable virtual network.

It simulates real-world networking concepts such as **DNS resolution, IP routing (Longest Prefix Match), firewall rule processing, and TTL (Time-To-Live)**, producing a **clear, step-by-step trace** of every decision made during the packet’s journey.

This project demonstrates a **deep, practical understanding of networking fundamentals**, system design, and modular backend architecture.

---

## 🎯 Objective

To build a simulator that:
- Accepts a packet definition
- Simulates its journey through a virtual network
- Produces a detailed, hop-by-hop trace explaining each routing, firewall, and TTL decision

---

## 🧩 Core Features

### ✅ Packet Simulation Engine
- Simulates a network packet with:
  - Source IP
  - Destination hostname or IP
  - Protocol (TCP / UDP)
  - Destination port
  - Initial TTL
- Produces an ordered trace of packet processing steps

### ✅ DNS Resolver
- Loads DNS records from configuration files
- Supports **A (IPv4) records**
- Handles **NXDOMAIN** errors for unknown hostnames

### ✅ Routing Engine
- Loads routing table from configuration
- Implements **Longest Prefix Match (LPM)** algorithm
- Determines correct next-hop
- Handles **No route to host** errors

### ✅ Firewall Engine
- Loads ordered firewall rules
- Supports:
  - Allow / Deny actions
  - Protocol filtering
  - Source IP matching
  - Destination port filtering
- Terminates trace on firewall block

### ✅ TTL (Time-To-Live) Simulation
- TTL decremented at each hop
- Packet dropped when TTL reaches zero
- TTL changes clearly logged

### ✅ Full Packet Trace Simulation
- DNS → Routing → Firewall → TTL
- Produces a human-readable trace

---

## 🏗️ Project Architecture

```text
virtual-network-simulator/
│
├── config/
│   ├── dns.js
│   ├── routes.js
│   └── firewall.js
│
├── services/
│   ├── dnsresolver.js
│   ├── routingService.js
│   ├── ttlSimulator.js
│   └── packetSimulator.js
│
├── index.js
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

* Node.js (ES Modules)
* JavaScript
* In-memory data structures
* Modular service-based architecture

---

## 🚀 How to Run the Project

### Install Dependencies

```bash
npm install
```

### Run the Simulator

```bash
node index.js
```

---

## 📊 Sample Output

```text
DNS resolved → 8.8.8.8
Routing matched → Internet Gateway
Hop 1: TTL = 4
Hop 2: TTL = 3
Hop 3: TTL = 2
Hop 4: TTL = 1
Hop 5: TTL = 0
Packet dropped (TTL reached 0)
```

---

## ✅ Expected Outcomes (All Achieved)

* ✔ Accurate DNS resolution
* ✔ Correct longest prefix match routing
* ✔ Firewall rule enforcement
* ✔ TTL decrementing and termination
* ✔ Proper handling of network errors:

  * NXDOMAIN
  * No route to host
  * Firewall block
  * TTL exceeded

---

## 📈 Learning Outcomes

* Strong understanding of packet flow in networks
* Practical implementation of routing algorithms
* Firewall rule evaluation logic
* Stateless simulation design
* Modular backend architecture

---

## 👤 Author

**B. N. S. Harshitha**
Virtual Network Simulator – Packet Tracing Project

---

## 🏁 Final Notes

This project is intentionally backend-focused and can be extended with:

* REST API endpoint (`/trace`)
* Frontend visualization
* Persistent configuration storage





