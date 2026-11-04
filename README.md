# CIEL Subnet Lab

[**Essayer le calculateur en ligne**](https://itztov4r.github.io/ciel-subnet-lab/)

**Comprendre une adresse IPv4, son réseau et son découpage.**

Interface responsive, calcul en JavaScript natif et visualisation binaire. Projet pédagogique de portfolio, préparé avec assistance IA.

## Démarrage

Ouvrir `index.html` dans un navigateur récent. Aucun paquet requis. Exemple initial : `192.168.10.42/24` → réseau `192.168.10.0`, masque `255.255.255.0`, 254 hôtes utilisables.

## Fonctionnalités

- CIDR /0 à /32, masque, wildcard, réseau, dernière adresse et plage des hôtes.
- Convention point à point /31 (2 hôtes) et route hôte /32 (1 hôte).
- Bits réseau et hôte colorés ; calcul du nombre d’adresses.
- Reconnaissance des plages privées RFC 1918. « Hors plages privées » ne signifie pas forcément une adresse publique routable.
- Découpage en sous-réseaux égaux ; seuls les 16 premiers sont affichés si nécessaire.
- Export JSON explicitant si le découpage est tronqué.
- Entrées invalides refusées ; adresses à zéros initiaux refusées pour éviter toute ambiguïté.

## Structure et tests

`network.js` contient les fonctions pures. `script.js` gère le formulaire et le rendu DOM. `style.css` contient la mise en page et les adaptations mobiles.

```bash
node --test tests/network.test.js
node --check script.js
```

8 tests : /24, /0, /31, /32, entrées invalides, découpage /26, limite des résultats et bornes des adresses privées. CI GitHub Actions incluse.

## Limites et apprentissage

Calcul IPv4 uniquement, sans scan réseau ni VLSM. La convention /31 suppose un lien point à point. Les capacités calculées ne garantissent pas qu’un réseau existe ou soit joignable.

Pour expliquer le projet : montrer comment un bloc vaut `2 ** (32 - prefix)`, pourquoi on retire habituellement deux adresses, et comment le passage /24 → /26 produit quatre sous-réseaux.

Mehdi Hmaiss · Projet pédagogique avec assistance IA · Licence MIT.
