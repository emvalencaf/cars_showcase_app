# CAR SHOWCASE APP

This webapp was built using react.js, next.js (13) and also typescript. The main goal of this project was to created a car catalogue with data fetched from the API [Cars by API-Ninjas](https://api-ninjas.com/api/cars) and images fetched from the API [Car images API](https://www.imagin.studio/car-image-api).

## FEATURES

- Search cars using filters as type of fuel, year, model and maker;
- Simple card for each car that has some data and also the rental price of the car;
- Modal for each car with all details and more images;
- Simple pagination that works by clicking Show More's button;

## HOW TO USE

1. Open up the terminal at the root and ``npm install``;
2. Subscribe to the API [Cars by API-Ninjas](https://api-ninjas.com/api/cars) at the [Rapid API](https://rapidapi.com/hub);
3. Register your business email at the [Car Images API](https://www.imagin.studio/car-image-api) for get the API key for generate the cars images;
4. Create a file at project root named ``.env.local``. There put thoses env variables: ``NEXT_PUBLIC_IMAGIN_API_KEY``
``NEXT_PUBLIC_RAPID_API_KEY``;
5. In the terminal use the command ``npm run dev`` or ``npm start``;

## (DEMO)[]