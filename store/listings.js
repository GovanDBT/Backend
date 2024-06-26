const listings = [
  {
    id: 201,
    title: "BHC's Palapye House",
    images: [{ fileName: "bhc-house03" }],
    price: 5000,
    categoryId: 5,
    userId: 1,
    location: "Tsere Ward, Palapye",
    tag: "Rent",
    description: "What an amazing house",
  },
  {
    id: 1,
    title: "BHC's Palapye House",
    images: [{ fileName: "bhc-house02" }],
    price: 6000,
    categoryId: 5,
    userId: 1,
    location: "Tsere Ward, Palapye",
    tag: "Rent",
    description: "What an amazing house",
  },
];

const maintenance = [
  {
    id: 1,
    firstname: 'Govan',
    surname: 'Dibotelo',
    plotNumber: 3434,
    telephone: 940394,
    mobile: 74738495,
    category: 'Normal',
    problem: 'Damaged Gate',
    description: 'The gate broke',
    images: [{ filename: "bhc-house01" }],
    userId: 1,
  }
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const addMaintenance = (maintain) => {
  maintain.id = maintenance.length + 1;
  maintenance.push(maintain);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
  addMaintenance,
};
