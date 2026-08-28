# COZABAL — Marketing site UI kit

Recreation of the COZABAL marketing site from the supplied reference artwork
(`uploads/28d39aa324291cc3a2e349a12d4a3f3e.jpg`, a full-page desktop comp).
Design width 1280; no responsive breakpoints were provided, so none are implemented.

## Screens
| File | Screen | Notes |
| --- | --- | --- |
| `HomeScreen.jsx` | Home | Every band from the reference comp: hero, floating stat bar, project mosaic, services on ink, process rail, insights, footer |
| `ProjectsScreen.jsx` | Projects index | Extrapolated from the reference's project mosaic + filter pills (pills are an addition — see readme "Intentional additions") |
| `ProjectDetailScreen.jsx` | Project detail | Not present in the reference; built only from existing patterns (serif lead paragraph, facts panel, image grid) |
| `InsightsScreen.jsx` | Insights index | Three-up card row from the reference plus a hairline article list |
| `ContactScreen.jsx` | Contact | Form styling extrapolated; the reference showed no form controls |

`Chrome.jsx` holds the `Section` band wrapper; `data.jsx` holds sample content.

## Interaction
`index.html` is click-through: nav links and every card/CTA switch screens, project
filters work, and the contact form has a success state. Everything else is cosmetic.

## Known gaps
* **No photography.** The only image source was a low-resolution composite screenshot,
  so every photo slot renders `ImageFrame`'s placeholder plate. Supply real imagery to finish the kit.
* Icons are Lucide (CDN) standing in for the reference's hairline line icons.
