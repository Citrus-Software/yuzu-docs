---
sidebar_label: 'Project'
sidebar_position: 2
---

# Project

## Layout

The project workspace is composed by two distinct areas:

1. **The sidebar menu** : give you acces to all modules within this workspace.
2. **The display area** : display the selected module.

![Project workspace layout](/img/project_home.png)

Vous pouvez à tout moment réduire la barre latérale pour afficher plus de données dans la zone d'affichage en cliquant sur le bouton `collapse` en bas.


## Production workflow

Pre-production Workflow - Breakdown and Annotate your project’s scripts

### Models production notes

Ajoutez des notes pour chaque élément de votre production. Ces notes peuvent être générales ou spécifiques et seront distribuées aux acteurs une fois le tournage commencé.

### Shots production notes

Ajoutez des notes pour chaque plan : artistiques, techniques ou organisationnelles.
Ajoutez des références visuelles ou des liens vers d’autres parties de votre projet.

### Breakdown

Cette étape constituera la base de votre production.
Saisissez des descriptions complètes du contenu de chaque plan.
Utilisez les raccourcis de Yuzu pour gagner en rapidité et en précision.

## Production management

### Follow-up

Accédez aux tableaux de suivi de votre service pour les ressources sélectionnées, l'épisode en cours ou un suivi global du projet couvrant tous les épisodes.

C'est l'une des fonctionnalités les plus puissantes de Yuzu !

Selectionnez dabord dans l'asset liste le dossier ou élément qui vous interesse.
Choisissez ensuite dans le menu déroulant le Follow-up visé.
Selon le type d'asset sur lequel porte votre Follow-up (model, episode, shot) l'ensemble des enfants  de votre selection qui on le type visé apparaîtrons dans les lignes de votre Tableau.

Les colonnes de votre Tableau sont configurable dans la partie Settings > Follow-up.
Cliquez sur le bouton "Config" de votre Follow-up pour y acceder directement.


### External follow-up

Partagez les liens vers les suivis mis en place spécifiquement pour les partenaires externes, qui peuvent les consulter et ajouter des statuts directement dans Yuzu.


### Tasks

## Assets

### Assets list

### Files

## Informations

### Project wiki

## Settings

### Follow-up - Settings

Créez des tableaux "Follow-up" pour suivre votre production, en définissant les colonnes que vous souhaitez afficher.

### Groups & Users - Settings
Définir les groupes d'utilisateurs, attribuer les membres et contrôler les autorisations d'accès.
Tous les utilisatuers d'un projet devraient appartenir à un groupe contenant les droits minimals, par exemple un groupe "all".
Ces mêmes utilisateurs peuvent être ensuite à ajouter à d'autres groupes du projet, ce qui leur donnera des droits additonnels.

### Steps - Settings
Configurez chaque étape à suivre dans votre production.
Ces Steps sont ceux qui verront des tâches créees.

Les steps sont créés à l'échelle du studio (voir developper guide pour en créer en utilisant l'API `opac`).
Ils sont ensuite ajouté à un projet via ce menu.

### Flags - Settings
Définissez des flags pour organiser et trier les différents types d'actifs.
Vous retrouverez ces Flags dans les vues breakdown, dans les follow-ups et dans les Notes. Vous pourrez ainsi filtrer, trier et grouper vos éléments en utilisant vos flags.

Les flags sont définit par type d'éléments :
    Assets : épisode, shot, model, folder, project
    Articles : Article d'un Wiki
    Takes : Take d'une tâche
    Dynamic Approval Value

### Dashboard - Settings
 Créez des tableaux de bord pertinents permettant aux équipes de suivre les progrès en temps réel.
