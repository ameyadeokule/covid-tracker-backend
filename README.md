## US Covid-19 Tracker in Nodejs

### Deployed using HEROKU [HERE](https://covid-19-tracker-backend.herokuapp.com/)

### Technology Used

-   Express.JS
-   Axios

### Endpoint Structure

#### All Information about the US - ${baseURL}/api/country

-   [{
    updatedAt,
    country,
    cases,
    todayCases,
    death,
    todayDeaths,
    recoverd,
    todayRecovered,
    active,
    critical,
    tests,
    population,
    }]

#### All Information about the US States and Teritories - ${baseURL}/api/states

-   [{
    name,
    positiveCases,
    totalTestResults,
    notes:{
    casesPerOneMillion,
    testsPerOneMillion
    }
    }]

baseURL is the link to the deployed appliation and localhost in case of local usage
