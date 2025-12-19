const routes = [
  {
    network: "192.168.1.0/24",
    nextHop: "Local Network"
  },
  {
    network: "10.0.0.0/8",
    nextHop: "Private Network"
  },
  {
    network: "0.0.0.0/0",
    nextHop: "Internet Gateway"
  }
];

export default routes;
