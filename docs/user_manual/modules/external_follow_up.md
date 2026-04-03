---
sidebar_label: 'External Follow-up'
sidebar_position: 4
---

# External Follow-up

## What is it for ?

Certains de vos partenaires, clients ou sous traitants peuvent voir et entrer directement des informations dans Yuzu, grâce à ces "External Follow-up".

Ils ont vocation à être "minimalistes", ne comporter que les informations que vous voulez transmettre à ces parties prenantes.

Les personnes ayant ces accès exterieurs n'auront accès qu'a cette partie du projet.
Ils pourront entrer directement leur statuts et commentaire dans les Dynamic approval prévues pour eux.

Chaque externe aura son propre External Follow-up.
L'ensemble des données "external" pourront être rassemblées pour votre suivi central, dans un Follow-up classique.

## Créer un accès à un externe vers un External Follow-up

Attention : pour pouvoir effectuer les étapes 4 et 5, vous devez avoir accès au panneau Admin de Yuzu.

Pour ajouter un accès à une personne externe sur un projet :

0. Créez dans l'ADMIN un utilisateur pour cette personne (Admin > Offices & Users)
1. Créez un groupe "ext-follow-up-access" dans votre projet (Settings - Groups & Users)
![Permission external project](/img/permission_external_follow-up_project.png)

Ces droits sont une proposition, vous pouvez en ajouter selon vos besoins.

2. Ajoutez l'utilisateur dans le groupe ext-follow-up-access de votre projet.

3. Retirez l'utilisateur de tout autre groupe de votre projet (y compris le groupe de plus bas niveau)
4. Dans admin > groups, ajoutez l'utilisateur dans un groupe "external-users" (à Créer si il n'existe pas, avec les droits suivants)
![Permission external project](/img/permissions_external_follo-up_admin.png)

5. Dans admin > groups, retirez l'utilisateur de tous les autres groupes

## Send a follow-up link to Client

Maintenant que votre utilisateur externe a ses accès, il peut se connecter via l'url de votre server Yuzu.
Vous pouvez lui envoyer un lien vers le follow-up externe.
Ce lien peut utiliser une selectionn d'asset, un ou plusieurs filtres, auquel il aura également accès via l'url que vous lui enverrez.
