
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './components/search_results';
import MainSearch from './components/search_main';
import Navigation from './components/navigation.js';
import { DropdownBasicExample } from './components/message_settings';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { DialogBasicExample } from './components/dialog_box';
import { DatePickerBasicExample } from '/Users/hallemi/Rovakaira/src/components/date_picker.js';
import Time from './components/time.js';
import { TextField } from 'office-ui-fabric-react/lib/TextField';


var filterFields = [
  { name: "kayttopaikka",
    placeholder: "Käyttöpaikan tunnus" },
  { name: "nimi",
    placeholder: "Nimi" },
  { name: "puhelinnumero",
    placeholder: "Puhelinnumero" },
  { name: "sahkoposti",
    placeholder: "Sähköposti"},
  { name:"osapuolityypit",
    placeholder: "Osapuolityypit" },
  { name: "asiakasnumero",
    placeholder: "Asiakasnumero"},
  { name: "asiakkaanosoite",
    placeholder: "Asiakkaan osoite"},
  { name: "asiakkaanpostinumero",
    placeholder: "Asiakkaan postinumero" },
  { name: "Asiakkaan postitoimipaikka",
    placeholder:"asiakkaanpostitoimipaikka"},
  { name: "tuote",
    placeholder: "Tuote"},
  { name: "kayttopaikannykyinenstatus",
    placeholder: "Käyttöpaikan nykyinen status"},
  { name: "osoite",
    placeholder: "Osoite"},
  { name: "postinumero",
    placeholder: "Postinumero"},
  { name: "postitoimipaikka",
    placeholder: "Postitoimipaikka"},
  { name: "sulakekoko",
    placeholder: "Sulakekoko"},
  { name: "muuntopiste",
    placeholder: "Muuntopiste"},
  { name: "tyyppikayttaja",
    placeholder: "Tyyppikayttaja"},
  { name: "mittarinsijainti",
    placeholder: "Mittarin sijainti"},
  { name: "huoltovarmuusluokka",
    placeholder: "Huoltovarmuusluokka"},
  { name: "etakytkentalaite",
    placeholder: "Etäkytkentälaite"},
  { name: "vastuuyksikko",
    placeholder: "Vastuuyksikko"},
  { name: "mittarinnumero",
    placeholder: "Mittarin numero"},
  { name: "mittarinnumero",
    placeholder: "Mittarin numero"},
  { name: "mittarinmalli",
    placeholder: "Mittarin malli"},
  { name: "liittymantunnus",
    placeholder: "Liittymän tunnus"},
  { name: "myyja",
    placeholder: "Myyjä"},
  { name: "myyntituote",
    placeholder: "Myyntituote"},
  { name: "myyntisopimuksenpaattymispaiva",
    placeholder: "Myyntisopimuksen päättymispäivä"}

    ]


const navigation = [
  {
    href: "#",
    id: "mainsearch",
    title: "Haku"
  },
  {
    href: "#",
    id: "stats",
    title: "Tilastot"
  },
  {
    href: "#",
    id: "log-out",
    title: "Kirjaudu ulos"
  },
]

const App = () => {

  return (
    <div>
      <Navigation />
    <div className="ms-Grid-row ms-Grid-col ms-u-sm12">


    <MainSearch filterFields={filterFields} title="Hae asiakastietokannasta" columns="2"/>

    <SearchResults />
    <DropdownBasicExample />
    <DatePickerBasicExample />
    <Time />

    </div>
    </div>

);
}


ReactDOM.render (<App />, document.querySelector('.container'));
