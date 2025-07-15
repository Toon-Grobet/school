import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const allCards = {
  'Jeugd & Verleden': [
    'Welk vakantiebeeld uit je jeugd is je het meest bijgebleven?',
    'Had je een bijnaam vroeger? Zo ja, wat was die en weet je ook waarom?',
    'Wat wilde je vroeger worden als je later groot was?',
    'Heb je vroeger iets stiekem gedaan waar je nu om kunt lachen?',
    'Had je een idool of beroemdheid waar je fan van was toen je jonger was?',
    'Wat was het eerste dat je ooit fotografeerde?',
    'Had je als kind een bepaalde stijl of fase (bijvoorbeeld gothic, skater, dierenliefhebber)?',
    'Wat was je belangrijkste hobby toen je puber was?',
    'Welke geur, geluid of plek brengt je direct terug naar je jeugd?'
  ],
  'Karakter & Interesse': [
    'Als je een sluitertijd was, welke zou je dan zijn?',
    'Ben jij meer groothoek of een telelens?',
    'Wat is jouw innerlijke camera-instelling: Altijd in automatische stand of liever alles manueel onder controle?',
    'Welk dier zou jou het best kunnen fotograferen – en waarom?',
    'Als je karakter een fotofilter was, welke zou dat dan zijn?',
    'Stel: je moet een jaar lang élke dag hetzelfde fotograferen – wat zou je kiezen?',
    'Als je een fotogeniek probleem was, wat zou je zijn?',
    'Wat zou je fotograferen als je onzichtbaar kon zijn voor één dag?',
    'Als je je gevoeligheid voor kritiek moest uitdrukken in ISO hoeveel ISO zou die dan zijn?'
  ],
  'Motivatie & Inspiratie': [
    'Welke motivatiebron werkt het best voor jou: lof, kritiek of koffie?',
    'Wat zou een “lui, maar toch geniaal” fotoproject zijn dat perfect bij jou past?',
    'Wat is de raarste plek waar je ooit inspiratie vond voor een foto?',
    'Als je één zintuig zou moeten gebruiken om inspiratie te vinden, welk kies je dan?',
    'Wat is een beeld dat je in je hoofd hebt, maar nog nooit in het echt kon fotograferen?',
    'Wat is jouw ultieme motivatie-killer tijdens het fotograferen?',
    'Je moet inspiratie halen uit een alledaags huishoudtoestel. Welk kies je en waarom?',
    'Welke ‘beloning’ geef jij jezelf na een geslaagde fotosessie?',
    'Stel dat je elke keer dat je fotografeert, automatisch een koekje krijgt. Zou je dan méér fotograferen? En wat?'
  ],
  'Doen & Laten': [
    'Wat is het eerste wat je ‘altijd’ doet als je je camera vastpakt?',
    'Wat is jouw fotografische guilty pleasure?',
    'Wat zou jij doen als je per ongeluk een meesterwerk schiet… met een vinger voor de lens?',
    'Wat is het raarste dat je ooit deed voor een goede foto?',
    'Wat zou je echt nooit fotograferen, zelfs niet voor veel geld?',
    'Wat is een regel in fotografie die je het liefst altijd negeert?',
    'Wat is het eerste dat jij doet zodra je thuiskomt na een shoot?',
    'Wat is het stoutste wat je ooit durfde doen om nét dat ene shot te pakken?',
    'Wat laat jij structureel in je cameratas zitten ‘voor het geval dat’, maar gebruik je al jaren niet?'
  ],
  'Werk & Loopbaan': [
    'Wat doe je of deed je als beroep?',
    'Wat was jouw meest onverwachte ‘carrièrewending’?',
    'Wat zou je ideale ‘bijverdien-fotoklus’ zijn, puur voor de fun?',
    'Wat heb je in een beroep geleerd dat je nu toepast als fotograaf?',
    'Wat was een moment waarop je dacht: “Waarom ben ik dit eigenlijk aan het doen?”',
    'Je mag één dag ruilen met een beroemd fotograaf. Wie kies je?',
    'Wat is het leukste compliment dat je ooit kreeg over je fotowerk?',
    'Wat doe je het liefst na een lange werkdag om weer op te laden?',
    'Als je loopbaan een stripverhaal was, welke stripfiguur zou jij dan zijn?'
  ],
  'Wensen & Toekomst': [
    'Als je één magische tool kon wensen die elke foto perfect maakt, wat zou dat zijn?',
    'Welke droomshoot zou je laten plaatsvinden als je onbeperkt budget had?',
    'Als je een tijdmachine had, in welk jaar zou je dan willen fotograferen?',
    'Wat staat op jouw ‘fotografiebucketlist’ voor de komende 3 jaar?',
    'Wat betekent succes voor jou in de context van je fotografie?',
    'Als je één fotografie-expert mocht uitnodigen voor een workshop, wie zou dat zijn en waarom?',
    'Welke trend of welk gadget zou je in de fotografie willen introduceren?',
    'Als je één ding zou kunnen veranderen aan de wereld door je fotografie, wat zou dat zijn?',
    'Over 80 jaar vind een nakomeling een doos met jouw werk van nu – wat hoop je dat je die dan denkt?'
  ]
};

export default function KaartenApp() {
  const [theme, setTheme] = useState('Jeugd & Verleden');
  const [vraag, setVraag] = useState('');

  const trekKaart = () => {
    const vragen = allCards[theme];
    const randomIndex = Math.floor(Math.random() * vragen.length);
    setVraag(vragen[randomIndex]);
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">Fotografen Kaarten Trekker 🎴</h1>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="w-full border rounded p-2"
      >
        {Object.keys(allCards).map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <Button onClick={trekKaart} className="w-full">Trek een kaart</Button>

      {vraag && (
        <Card>
          <CardContent className="p-4 text-lg font-medium text-center">
            {vraag}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
