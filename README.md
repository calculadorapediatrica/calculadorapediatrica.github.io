# Calculadora Pediátrica UY

Calculadora pediátrica profesional para **dosis por peso (mg/kg/día)**, posología y conversión de **mg a ml**, optimizada para Uruguay con referencia al MSP.

🌐 **Live:** https://calculadorapediatrica.github.io/

## ✨ Funciones
- Cálculo por peso: `posología × peso = dosis total / tomas`
- Intervalos: cada 4h (6 dosis), 6h, 8h, 12h, 24h
- Dosis máxima permitida (tope diario)
- Conversión mg ↔ ml con equivalencia de prospecto (ej: 250 mg / 5 ml)
- 100% local, sin guardar datos de pacientes
- Tema claro/oscuro, 100% responsive, accesible

## 🧮 Fórmula
```
dosis_total_dia = posologia_mg_kg_dia * peso_kg
si dosis_total_dia > dosis_max: dosis_total_dia = dosis_max
dosis_por_toma = dosis_total_dia / cantidad_dosis
ml = mg * mlBase / mgBase
```

## 🇺🇾 Uso en Uruguay
Optimizada para vademécum UY: ibuprofeno 100mg/5ml, 200mg/5ml, amoxicilina 250mg/5ml, 500mg/5ml, paracetamol 120mg/5ml, azitromicina 200mg/5ml, etc.
Referencia: [Listado MSP](https://listadomedicamentos.msp.gub.uy/ListadoMedicamentos/servlet/com.listadomedicamentos.listadomedicamentos)

## 🚀 Deploy GitHub Pages
Este repo ya está listo para GitHub Pages:
1. Branch `main` / root
2. Archivos incluidos: `index.html`, `sitemap.xml`, `robots.txt`, `og-whatsapp.jpg`
3. Settings → Pages → Deploy from branch

## 📁 Estructura
```
/
├── index.html          # Calculadora + SEO + JSON-LD
├── sitemap.xml         # Sitemap para Google
├── robots.txt          # Robots + referencia sitemap
├── og-whatsapp.jpg     # Imagen 1200x630 para WhatsApp/FB/Twitter
├── README.md           # Este archivo
└── LICENSE             # MIT + disclaimer médico
```

## 🔍 SEO incluido
- Title optimizado, meta description, canonical
- Open Graph + Twitter Card (1200x630)
- JSON-LD: MedicalWebPage, FAQPage, HowTo
- Contenido natural con keywords: dosis pediátrica UY, cálculo por peso, conversión mg ml, etc.

## ⚠️ Disclaimer médico
Esta herramienta **no sustituye el criterio médico**. Siempre verificar caja, prospecto y normativa vigente. Uso bajo responsabilidad del profesional. Los autores no se responsabilizan por decisiones clínicas.

## 📄 Licencia
MIT License - ver `LICENSE`. Uso libre, incluso comercial, con atribución.

## 👨‍⚕️ Créditos
Desarrollado por profesionales de la salud de Uruguay. Herramienta gratuita y sin fines de lucro.
