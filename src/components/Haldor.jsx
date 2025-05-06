import Timetag from "./tag/Timetag"

const Haldor = () => {
  return (
    <div className='content-text'>
      <Timetag name="LIA-Period" time="2024-2025" />
      <h2 className='info-title'>Haldor AB – Utveckling för framtidens digitala lärande</h2>
      <p>Haldor AB är ett svenskt EdTech-företag som utvecklar innovativa lösningar för skolor och utbildningsmiljöer. Deras produkter integreras direkt i Microsoft Teams och andra Microsoft 365-tjänster, vilket ger elever och lärare en sömlös och modern plattform för kommunikation, planering och lärande. Fokus ligger på att förenkla skolvardagen genom smart teknik som är lätt att använda och anpassningsbar efter olika pedagogiska behov.</p>

      <p>Företaget har en stark teknisk profil med fokus på modern webbutveckling. Utvecklingsteamet arbetar med React och JavaScript i frontend och använder .NET Web API i backend för att bygga robusta, skalbara och integrerade lösningar. Haldor prioriterar tillgänglighet, säkerhet och prestanda i alla sina produkter och utvecklar enligt agila principer.</p>

      <h4>Min roll under LIA (Lärande i arbete) hos Haldor</h4>
      <ul>
        <li>Förbättrade en intern översättningsapplikation, med fokus på användargränssnitt, struktur och hantering av språkfiler i React och JavaScript.</li>
        <li>Byggde en mikro-frontend-komponent i form av en notifikation som integrerades i den befintliga React-arkitekturen.</li>
        <li>Utvecklade backend-funktionalitet med .NET Web API för att hantera notifieringar och dataflöde mellan klient och server.</li>
        <li>Arbetade i en CI/CD-miljö med kodgranskning, versionshantering (Git) och agila arbetsmetoder.</li>
        <li>Deltog i dagliga standups och fick praktisk erfarenhet av samarbete i ett tvärfunktionellt utvecklingsteam.</li>
      </ul>

      <p>Praktiken gav mig värdefull erfarenhet inom både frontend- och backendutveckling i en professionell miljö. Jag fick arbeta med verkliga problem och lösningar som används i produktion, vilket utvecklade både min tekniska kompetens och min förståelse för hur moderna digitala produkter byggs och underhålls.</p>
    </div>
  )
}

export default Haldor
