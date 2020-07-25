var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }
  

  //NUMBER 1
  const addSpeaker = (() =>  nestedObject.speakers.push({name: 'John'}))();

  //NUMBER 2
  const addLanguage = (() => nestedObject.data.languages['German'] = {hello: 'Hallo'})();

  //NUMBER 3
  const addCountry = (() => nestedObject.data.continents.europe.countries['England'] = {capital: 'London',population: 56000000})();
