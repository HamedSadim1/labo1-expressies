# Labo 1 - Expressies

Een interactieve React applicatie voor het oefenen van wiskundige berekeningen met willekeurige getallen. Dit project is ontwikkeld als onderdeel van de Webframeworks cursus aan de AP Hogeschool.

## ✨ Features

- **Willekeurige berekeningen**: Genereert automatisch willekeurige getallen en operaties
- **Meerdere operaties**: Ondersteuning voor som, vermenigvuldiging, aftrekking, deling en machtsverheffing
- **Dark/Light mode**: Schakel tussen donkere en lichte thema
- **Aanpasbaar bereik**: Stel het maximum getal in via een slider (5-100)
- **Geschiedenis**: Bewaar en bekijk de laatste 10 berekeningen
- **CSV export**: Exporteer je berekeningsgeschiedenis naar een CSV bestand
- **Responsive design**: Werkt perfect op desktop en mobiele apparaten
- **Geoptimaliseerde weergave**: Willekeurige waarden worden als gehele getallen weergegeven (1-1000)

## 🚀 Technologieën

- **React 19** - Moderne React met de nieuwste features
- **TypeScript** - Type-safe JavaScript voor betere ontwikkelervaring
- **Vite** - Snelle build tool en development server
- **Tailwind CSS v4** - Utility-first CSS framework met custom theming
- **React Icons** - Mooie iconen voor de UI
- **LocalStorage** - Client-side data persistence
- **Custom Utilities** - Gecentraliseerde business logica in utils modules

## 📦 Installatie

1. **Clone het project**

   ```bash
   git clone <repository-url>
   cd labo1-expressies
   ```

2. **Installeer dependencies**

   ```bash
   npm install
   ```

3. **Start de development server**

   ```bash
   npm run dev
   ```

4. **Open je browser**
   Ga naar [http://localhost:5173](http://localhost:5173)

## 📜 Beschikbare Scripts

- `npm run dev` - Start de development server
- `npm run build` - Bouw de applicatie voor productie
- `npm run preview` - Preview de productie build lokaal

## 🔨 Build & Deployment

### Productie Build

```bash
npm run build
```

Dit creëert een `dist/` folder met geoptimaliseerde bestanden voor productie.

### Lokale Preview

```bash
npm run preview
```

Test de productie build lokaal voordat je deployt.

## 🐛 Troubleshooting

### Veelvoorkomende Problemen

- **Port al in gebruik**: Vite kiest automatisch een andere port als 5173 bezet is
- **TypeScript fouten**: Controleer `npx tsc --noEmit` voor type checking
- **Build fouten**: Zorg ervoor dat alle dependencies geïnstalleerd zijn met `npm install`
- **LocalStorage problemen**: Geschiedenis wordt automatisch opgeslagen in browser storage

## 🏗️ Project Structuur

```text
src/
├── components/          # Herbruikbare UI componenten
│   ├── Button.tsx       # Herbruikbare button component
│   ├── Header.tsx       # Titel en dark mode toggle
│   ├── RandomDisplay.tsx # Willekeurige waarde display (geheel getal)
│   ├── NumberCards.tsx  # Getal kaarten
│   ├── OperationDisplay.tsx # Berekening weergave
│   ├── Controls.tsx     # Slider en actie buttons
│   ├── History.tsx      # Geschiedenis container
│   ├── HistoryHeader.tsx # Geschiedenis header
│   ├── HistoryItem.tsx  # Individuele geschiedenis entry
│   └── HistoryList.tsx  # Geschiedenis lijst container
├── hooks/               # Custom React hooks
│   └── useHistory.ts    # History state management met localStorage
├── utils/               # Utility functies
│   ├── helpers.ts       # Algemene hulp functies (random, timestamps, etc.)
│   └── operations.ts    # Operatie-specifieke utilities
├── types.ts             # TypeScript interfaces en types
├── ui.ts               # Theme configuratie systeem
├── options.ts          # Operations configuratie array
└── App.tsx             # Hoofdcomponent (logica naar utils verplaatst)
```

## 🎯 Gebruik

1. **Berekeningen genereren**: Klik op "Genereer Nieuwe Berekening" voor een nieuwe willekeurige berekening
2. **Bereik aanpassen**: Gebruik de slider om het maximum getal aan te passen (5-100)
3. **Thema wisselen**: Klik op het maan/zon icoon om tussen dark en light mode te schakelen
4. **Geschiedenis bekijken**: Scroll door je vorige berekeningen (laatste 10 worden bewaard)
5. **Exporteren**: Klik op het download icoon om je geschiedenis als CSV te exporteren
6. **Willekeurige waarde**: Bekijk de gegenereerde seed waarde als geheel getal (1-1000)

## 🔧 Ontwikkeling

Dit project volgt moderne React best practices en clean architecture principes:

- **Component compositie**: Grote componenten zijn opgesplitst in kleinere, herbruikbare componenten
- **Custom hooks**: Business logica is geabstraheerd in custom hooks voor state management
- **Utility functies**: Alle hulp functies zijn gecentraliseerd in de `utils/` folder voor herbruikbaarheid
- **TypeScript**: Volledige type safety door het hele project met uitgebreide interfaces
- **Modulaire configuratie**: Thema, operaties en utilities zijn apart georganiseerd
- **DRY principe**: Geen herhaling van code - alles is georganiseerd in herbruikbare modules
- **Scheiding van verantwoordelijkheden**: UI componenten bevatten alleen presentatie logica, business logica zit in utils en hooks

### 🏛️ Architectuur

```text
App.tsx (Orchestration)
├── Components (UI/Presentation)
├── Hooks (State Management)
├── Utils (Business Logic)
├── Types (Type Definitions)
├── UI Config (Theming)
└── Options (Configuration)
```

### 📚 Utility Modules

- **`utils/helpers.ts`**: Algemene hulp functies voor random waarden, timestamps, IDs, CSV export
- **`utils/operations.ts`**: Operatie-specifieke utilities voor iconen, kleuren en informatie
- **`hooks/useHistory.ts`**: Custom hook voor geschiedenis management met localStorage persistence

## 🆕 Recente Verbeteringen

- **Utils Architecture**: Alle business logica verplaatst naar gecentraliseerde utility modules
- **Component Splitting**: History component opgesplitst in Header, Item en List componenten
- **Random Display**: Willekeurige waarden worden nu als gehele getallen (1-1000) weergegeven
- **Code Organization**: App.tsx gefocust op orchestration, logica naar utils verplaatst
- **Type Safety**: Uitgebreide TypeScript interfaces en type checking
- **Performance**: Geoptimaliseerde rendering en state management

## 📄 Licentie

Dit project is ontwikkeld als onderdeel van een cursus en is bedoeld voor educatieve doeleinden.

## 👥 Bijdragers

- Ontwikkeld als labo opdracht voor Webframeworks cursus
- AP Hogeschool Antwerpe
