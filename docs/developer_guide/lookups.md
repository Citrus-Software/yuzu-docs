---
sidebar_position: 4
---

# Available lookups

In this page are listed filters currently available in Yuzu and, by extension, in `opac`.
This list is not exhaustive, you can update it if needed.

To use this doc, you need to understand the hierarchy.

For example, in `Task`, you have:

- takes:
    - comment:
        - exact, iexact, isnull, isempty, contains,

So you can filter tasks by using `Task.objects.filter(takes__comment__contains="yuzu")`.
You just need to join the different elements with `__`.

If you see lookups starting with `is`, it means the lookup needs a boolean after `=`.

For advanced explanations in filtering, please see `filters`.

:::tip
When you see `exact`, it means you can filter directly on the lookup. For example, `Asset.objects.filter(assetType="<assetType name>")`.
:::

## Activity

- date:
    - exact, lte, lt, gte, gt, range
- duration:
    - exact, lte, lt, gte, gt, range
- task:
    - exact, in, isnull
- user:
    - exact, in
- uuid:
    - exact, in

## Asset

- assetPostBoardLinks:
    - notes:
        - text:
            - contains, icontains
- assetType:
    - exact, in
- flags:
    - uuid:
        - exact, in, count
- links:
    - uuid:
        - exact, in
- mediaGroups:
    - medias:
        - uuid:
            - exact, count
- name:
    - exact, icontains
- parent:
    - name:
        - exact, in
    - uuid:
        - exact, in
- project:
    - uuid:
        - exact, isnull
- uuid:
    - exact, in

## File

- asset:
    - exact
- author:
    - exact
- createdAt:
    - exact, range, gte, gt, lte, lt
- fileType:
    - exact, in
- status:
    - exact, in
- stepPath:
    - exact
- updatedAt:
    - exact, range, gte, gt, lte, lt

## PostBoardLink

- asset:
    - assetType:
        - exact, in
    - flags__uuid:
            - exact, in, count
    - mediaGroups__medias__uuid:
                - exact, in, count
    - name:
        - exact, icontains
    - uuid:
        - exact, in
- firstShot__uuid:
        - exact, in, isnull
- linkType:
    - exact, in
- notes__text:
        - contains, icontains
- uuid:
    - exact, in

## Task

- activities:
    - date:
        - exact, range, gte, gt, lte, lt
    - duration:
        - exact, range, gte, gt, lte, lt, sum
- asset:
    - assetType:
        - exact, in
    - name:
        - exact, iexact, isnull, isempty, contains, icontains
    - parent:
        - uuid:
            - exact, in
    - project:
        - uuid:
            - exact, in
    - thumbnail:
        - exact, isnull
    - uuid:
        - exact, in
- assignedUser:
    - uuid:
        - exact, in, isnull
- suggestedUser:
    - uuid:
        - exact, in, isnull
- episodes:
    - uuid:
        - exact, in
- endDate:
    - exact, range, gte, gt, lte, lt
- isSuggestion:
    - exact
- name:
    - exact, iexact, startswith, endswith, contains, icontains
- parent:
    - uuid:
        - exact, in
- priority:
    - exact, range, gte, gt, lte, lt
- startDate:
    - exact, range, gte, gt, lte, lt
- status:
    - statusType:
        - exact, in
    - uuid:
        - exact, in
- step:
    - uuid:
        - exact, in, isnull
- takes:
    - comment:
        - exact, iexact, isnull, isempty, contains, icontains
    - estimLength:
        - exact, range, gte, gt, lte, lt, sum
    - flags:
        - uuid:
            - exact, in, count
    - number:
        - exact, range, gte, gt, lte, lt
    - refMedias:
        - uuid:
            - exact, isnull
    - uuid:
        - count
- taskType:
    - name:
        - exact, in
    - uuid:
        - exact, in
- updatedAt:
    - exact, range, gte, gt, lte, lt
- uuid:
    - exact, in

[Yuzu](http://ovm.io)
